const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const passport = require('passport');

// User model
const User = require('../models/User');

// Main.js
const main = require("../public/js/main");

// Login Page
router.get('/login', (req, res) => {
    main.fillBackground(req, res, "blue circle", "login");
});

// Register Page
 router.get('/register', (req, res) => {
     main.fillBackground(req, res, "blue circle", "register");
 });

// Register Handle
router.post('/register', (req, res) => {
    const { name, email, password, password2 } = req.body;

    let errors = [];

    // Check Required Fields
    if (!name || !email || !password || !password2) {
        errors.push({ msg: 'Please fill in all fields' });
    };

    // Check passwords match 
    if (password !== password2) {
        errors.push({ msg: 'Password do not match' });
    };

    // Check pass length
    if (password.length < 6) {
        errors.push({ msg: 'Password should be least 6 characters' });
    }

    if (errors.length > 0) {
        res.render('register', {
            errors,
            name,
            email,
            password,
            password2
        });
    } else {
        // validation passed
        User.findOne({ email: email })
            .then(user => {
                errors.push({ msg: 'Email is already registered' });
                if (user) {
                    // User exists
                    res.render('register', {
                        errors,
                        name,
                        email,
                        password,
                        password2
                    });
                } else {
                    const newUser = new User({
                        name,
                        email,
                        password
                    });

                    // Hash password
                    bcrypt.genSalt(10, (err, salt) =>
                        bcrypt.hash(newUser.password, salt, (err, hash) => {
                            if (err) throw err;
                            // Set password to hash 
                            newUser.password = hash;
                            // Save user
                            newUser.save()
                                .then(user => {
                                    req.flash('success_msg', 'You are now registered and can log in');
                                    res.redirect('/users/login');
                                })
                                .catch(err => console.log(err));
                        }))
                }
            });

    }

});

// Login Handle
router.post('/login', (req, res, next) => {
    passport.authenticate('local', {
        successRedirect: '/dashboard#idBemutatkozas',
        failureRedirect: '/users/login',
        failureFlash: true
    })(req, res, next);
});

// Logout Handle
router.get('/logout', (req, res) => {
    req.logout();
    req.flash('success_msg', 'You are  logged out');
    res.redirect('/users/login');
});

module.exports = router;