"use strict";
exports.__esModule = true;
var express = require("express");
var router = express.Router();
exports.githubRoute = router
    .get('/', function (req, res) {
    res.send('User Home Page');
});
//# sourceMappingURL=Github.js.map