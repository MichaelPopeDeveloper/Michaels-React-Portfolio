"use strict";
exports.__esModule = true;
var express = require("express");
var path = require("path");
var router = express.Router();
exports.MainRoute = router
    .get('/', function (req, res) {
    res.sendFile(path.join(__dirname, '../../public/Views/Portfolio_View/build/index.html'));
});
//# sourceMappingURL=MainRoute.js.map