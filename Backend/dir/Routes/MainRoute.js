"use strict";
exports.__esModule = true;
var express = require("express");
var router = express.Router();
exports.MainRoute = router
    .get('/*', function (req, res) {
    res.redirect('/');
});
//# sourceMappingURL=MainRoute.js.map