//https://www.codementor.io/olatundegaruba/nodejs-restful-apis-in-10-minutes-q0sgsfhbd
const jwt = require("jsonwebtoken");
const ActiveDirectory = require("activedirectory");
const APP_SECRET = "appsekret";
const USERNAME = "admin";
const PASSWORD = "admin";

module.exports = function (req, res, next) {
    if (req.url == "/login" && req.method == "POST") {
        var config = {
            url: 'ldap://mf.gov.pl',
            baseDN: 'dc=mf,dc=gov,dc=pl'
        };

        var ad = new ActiveDirectory(config);
        var username = 'MF\\'+req.body.name;
        var password = req.body.password;
        ad.authenticate(username, password, function (err, auth) {

            if (auth) {
                console.log('Authenticated!');
                let token = jwt.sign({ data: USERNAME, expiresIn: "1h" }, APP_SECRET);
                res.json({ success: true, token: token });
                res.statusCode = 200;
                // res.end();
            } 
            if(err){
                res.json({success:false});
            }
            return;
        });
        return;
    }
    //res.end();
    next();
}
