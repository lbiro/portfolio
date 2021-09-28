const express = require('express');
const router = express.Router();
const { ensureAuthenticated } = require('../config/auth');

// Data model
const cvData = require('../models/cvData');

// Main.js
const main = require("../public/js/main");

// Welcome Page
router.get('/', (req, res) => {
    main.fillBackground(req, res, "blue circle", "welcome");
});

router.get('/dashboard', ensureAuthenticated, (req, res) => {
    main.fillDashboard(req, res, "HospNET Egészségügyi, Informatikai Kft.", "prism");
});


module.exports = router;