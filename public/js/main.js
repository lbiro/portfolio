const cvData = require('../../models/cvData');
const dateFormat = require("dateformat");

function fillBackground(req, res, p1, p2) {
    cvData.findOne({ name: p1 })
        .then(result => {

            res.render(p2, {
                image: result.img.data.toString('base64'),
                contentType: result.img.contentType
            })

        })
};

function fillDashboard(req, res, p1, p2) {
    let query = {};
    var mysort = { _id: -1 };

    cvData.find(query).sort(mysort)
        .then(result => {

            let bImage, bImageKeyboard, bImagePyramid1, bImagePyramid2, bImagePyramid3, bImageBall1,
                sContentType, sContentTypeKeyboard, sContentTypePyramid1, sContentTypePyramid2, sContentTypePyramid3, sContentTypeBall1,
                sVnev, sKnev, sSzulido, sTel, sEmail, sMunkakorok, sIrsz, sVaros, sUtca, sHazszam, sBemutatkozas,
                sS1,sS2,sS3,sS4,sS5,sS6,sS7,sS8,sS9,sS10,sS11,
                sE1,sE2,sE3,sE4,sE5,sE6,sE7,
                sL1,
                sWebPageAbout;

            let tomb = [];
            let tomb1 = [];
            let n_db = 0;
            
            for (let i = 0; i<result.length;i++) {
                if (result[i].name === p2){
                    bImage = result[i].img.data.toString('base64');
                    sContentType = result[i].img.contentType;
                };

                if (result[i].name === 'keyboard'){
                    bImageKeyboard = result[i].img.data.toString('base64');
                    sContentTypeKeyboard = result[i].img.contentType;
                };

                if (result[i].name === 'pyramid1'){
                    bImagePyramid1 = result[i].img.data.toString('base64');
                    sContentTypePyramid1 = result[i].img.contentType;
                };

                if (result[i].name === 'pyramid2'){
                    bImagePyramid2 = result[i].img.data.toString('base64');
                    sContentTypePyramid2 = result[i].img.contentType;
                };

                if (result[i].name === 'pyramid3'){
                    bImagePyramid3 = result[i].img.data.toString('base64');
                    sContentTypePyramid3 = result[i].img.contentType;
                };                

                if (result[i].webPageAbout){
                    sWebPageAbout = result[i].webPageAbout;
                };

                if (result[i].userData){
                    sVnev = result[i].vnev;
                    sKnev = result[i].knev;
                    sSzulido = dateFormat(result[i].szulido, "yyyy.mm.dd");
                    sTel = result[i].tel;
                    sEmail = result[i].email;
                    sMunkakorok = result[i].munkakorok;
                    sIrsz = result[i].irsz;
                    sVaros = result[i].varos;
                    sUtca = result[i].utca;
                    sHazszam = result[i].hazszam;
                    sBemutatkozas = result[i].bemutatkozas;
                    sS1 = result[i].s1;
                    sS2 = result[i].s2;
                    sS3 = result[i].s3;
                    sS4 = result[i].s4;
                    sS5 = result[i].s5;
                    sS6 = result[i].s6;
                    sS7 = result[i].s7;
                    sS8 = result[i].s8;
                    sS9 = result[i].s9;
                    sS10 = result[i].s10;
                    sS11 = result[i].s11;
                    sE1 = result[i].e1;
                    sE2 = result[i].e2;
                    sE3 = result[i].e3;
                    sE4 = result[i].e4;
                    sE5 = result[i].e5;
                    sE6 = result[i].e6;
                    sE7 = result[i].e7;
                    sL1 = result[i].l1;
                };

                if (result[i].ceg){
                    n_db = n_db+1;
                    
                    if (n_db <= 7)
                    {
                        tomb.push({"ceg": result[i].ceg, "munkakor": result[i].munkakor, "tolig": result[i].tolig, "leiras": result[i].leiras });
                    };

                    if (n_db > 7)
                    {
                        tomb1.push({"ceg": result[i].ceg, "munkakor": result[i].munkakor, "tolig": result[i].tolig, "leiras": result[i].leiras });
                    };
                    
                };

            };

            res.render('dashboard', {
                image: bImage,
                contentType: sContentType,
                
                imageKeyboard: bImageKeyboard,
                contentTypeKeyboard: sContentTypeKeyboard,

                imagePyramid1: bImagePyramid1,
                contentTypePyramid1: sContentTypePyramid1,

                imagePyramid2: bImagePyramid2,
                contentTypePyramid2: sContentTypePyramid2,

                imagePyramid3: bImagePyramid3,
                contentTypePyramid3: sContentTypePyramid3,

                imageBall1: bImageBall1,
                contentTypeBall1: sContentTypeBall1,

                vnev: sVnev,
                knev: sKnev,
                szulido: sSzulido,
                tel: sTel,
                email: sEmail,
                munkakorok: sMunkakorok,
                irsz: sIrsz,
                varos: sVaros,
                utca: sUtca,
                hazszam: sHazszam,
                bemutatkozas: sBemutatkozas,
                data: tomb,
                data1: tomb1,
                s1: sS1,
                s2: sS2,
                s3: sS3,
                s4: sS4,
                s5: sS5,
                s6: sS6,
                s7: sS7,
                s8: sS8,
                s9: sS9,
                s10: sS10,
                s11: sS11,
                e1: sE1,
                e2: sE2,
                e3: sE3,
                e4: sE4,
                e5: sE5,
                e6: sE6,
                e7: sE7,
                l1: sL1,
                webPageAbout: sWebPageAbout
            })

        })

};

module.exports = { fillBackground, fillDashboard };


