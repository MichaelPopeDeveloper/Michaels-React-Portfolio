"use strict";
exports.__esModule = true;
var express = require("express");
var path = require("path");
var UserRoute_1 = require("./Apps/React-A-Gram/Backend/src/routes/UserRoute");
var router = express.Router();
exports.AppsRoute = router
    .get('/weatherapp', function (req, res) {
    res.sendFile(path.join(__dirname, '../../public/Views/WeatherCast_View/build', 'index.html'));
})
    .get('/podomoro', function (req, res) {
    res.sendFile(path.join(__dirname, '../../public/Views/Podomoro_View/build', 'index.html'));
})
    .get('/reactagram', function (req, res) {
    res.sendFile(path.join(__dirname, '../../public/Views/React-A-Gram_View/build', 'index.html'));
})
    .use('/reactagram/user', UserRoute_1.userRoute);
//# sourceMappingURL=AppsRoute.js.map