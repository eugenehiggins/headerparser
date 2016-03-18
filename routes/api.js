var express = require('express');
var router = express.Router();
var ip = require('ip');
var locales = require('locales');
var os = require('os');

/* GET home page. */
router.get('/whoami', function(req, res, next) {


    var fullLang = req.headers["accept-language"];
    var lang = fullLang.split(",")[0];

    var userAgent  = req.headers['user-agent'];
    var patt = /\((.+?)\)/;
    var os = patt.exec(userAgent)[1].toString();

    var output = JSON.stringify({ipaddress: ip.address(), language: lang, software: os});

    res.end(output);
});

module.exports = router;
