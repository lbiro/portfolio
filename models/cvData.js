const mongoose = require('mongoose');

const cvDataSchema = new mongoose.Schema({
    ceg: {
        type: String,
        required: false
    },
    munkakor: {
        type: String,
        required: false
    },
    tolig: {
        type: String,
        required: false
    },
    leiras: {
        type: String,
        required: false
    },
    name: {
        type: String,
        required: false
    },
    img:
    {
        data: Buffer,
        contentType: String
    },
    vnev: {
        type: String,
        required: false
    },
    knev: {
        type: String,
        required: false
    },
    szulido: {
        type: Date,
        required: false
    },
    tel: {
        type: String,
        required: false
    },
    email: {
        type: String,
        required: false
    },
    munkakorok: {
        type: String,
        required: false
    },
    irsz: {
        type: String,
        required: false
    },
    varos: {
        type: String,
        required: false
    },
    utca: {
        type: String,
        required: false
    },
    hazszam: {
        type: String,
        required: false
    },
    bemutatkozas: {
        type: String,
        required: false
    },
    userData: {
        type: Boolean,
        required: true
    },
    s1: {
        type: String,
        required: false
    },
    s2: {
        type: String,
        required: false
    },
    s3: {
        type: String,
        required: false
    },
    s4: {
        type: String,
        required: false
    },
    s5: {
        type: String,
        required: false
    },
    s6: {
        type: String,
        required: false
    },
    s7: {
        type: String,
        required: false
    },
    s8: {
        type: String,
        required: false
    },
    s9: {
        type: String,
        required: false
    },
    s10: {
        type: String,
        required: false
    },
    s11: {
        type: String,
        required: false
    },                                        
    s12: {
        type: String,
        required: false
    },                                        
    s13: {
        type: String,
        required: false
    },                                        
    s14: {
        type: String,
        required: false
    },                                        
    s15: {
        type: String,
        required: false
    },                                        
    e1: {
        type: String,
        required: false
    },
    e2: {
        type: String,
        required: false
    },
    e3: {
        type: String,
        required: false
    },
    e4: {
        type: String,
        required: false
    },
    e5: {
        type: String,
        required: false
    },
    e6: {
        type: String,
        required: false
    },
    e7: {
        type: String,
        required: false
    },                        
    l1: {
        type: String,
        required: false
    },                        
    webPageAbout: {
        type: String,
        required: false
    }    
});

const cvData = mongoose.model('cvData', cvDataSchema);

module.exports = cvData;

