//https://www.codementor.io/olatundegaruba/nodejs-restful-apis-in-10-minutes-q0sgsfhbd
const jwt = require("jsonwebtoken");

const APP_SECRET = "appsekret";
const USERNAME = "admin";
const PASSWORD = "admin";

module.exports = function (req, res, next) {
    if (req.url == "/login" && req.method == "POST") {
        if (req.body != null && req.body.name == USERNAME
                && req.body.password == PASSWORD) {
            let token = jwt.sign({ data: USERNAME, expiresIn: "1h" }, APP_SECRET);
            
            res.json({ success: true, token: token });
            console.log("jest haslo"+req.url)
        } else {
            res.json({ success: false });
            console.log("NIE MA hasla"+req.url)
        }
       
        res.end();
        return;
    } else if //((req.url.startsWith("/products") && req.method != "PUT")
                 (req.url.startsWith("/taking") && req.method == "GET") {
               // || (req.url.startsWith("/products") && req.method != "GET")) {
                    console.log("warunek jest spełniony")
         let token = req.headers["authorization"];
         if (token != null && token.startsWith("Bearer<")) {
            token = token.substring(7, token.length - 1);
            console.log('TOKEN: '+token)
            try {
                jwt.verify(token, APP_SECRET);
                //console.log(atob(token.split('.')[1]))
                next(console.log(Buffer.from(token.split('.')[1], 'base64').toString('ascii')));
                return;
            } catch (err) {}
         }

        res.statusCode = 401;
        res.end();
        return;
    }
    next();
}