"use strict";
exports.__esModule = true;
var express = require("express");
var UserRoute_1 = require("./UserRoute");
var router = express.Router();
exports.mainRoute = router
    .get('/', function (req, res) {
    res.send('home page');
});
UserRoute_1.userRoute.use('/user', UserRoute_1.userRoute);
//# sourceMappingURL=MainRoute.js.map