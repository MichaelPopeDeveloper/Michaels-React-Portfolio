"use strict";
exports.__esModule = true;
var bodyParser = require("body-parser");
var express = require("express");
var session = require("express-session");
var passport = require("passport");
var logger = require("morgan");
var path = require("path");
var MainRoute_1 = require("./Routes/MainRoute");
var MainAPIRoute_1 = require("./Routes/API/MainAPIRoute");
var AppsRoute_1 = require("./Routes/AppsRoute");
var mongoose_1 = require("mongoose");
var Server = (function () {
    function Server() {
        this.port = process.env.PORT || 3001;
        this.DB_URL = process.env.DB_URL || 'mongodb://localhost:27017/michaels-portfolio';
        this.express_session_secret = process.env.session_secret || 'midoria-shonen';
        this.app = express();
        this.config();
        this.routes();
        this.listen();
        this.api();
    }
    Server.bootstrap = function () {
        return new Server();
    };
    Server.prototype.api = function () {
    };
    Server.prototype.config = function () {
        this.app.use(logger('dev'));
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({
            extended: true
        }));
        this.app.use(session({
            secret: this.express_session_secret,
            resave: false,
            saveUninitialized: false
        }));
        this.app.use(passport.initialize());
        this.app.use(passport.session());
        mongoose_1.connect(this.DB_URL, { useNewUrlParser: true })
            .then(function () { return console.log('Connected to MongoDB'); })["catch"](function (err) { return console.log(err); });
    };
    Server.prototype.listen = function () {
        var _this = this;
        this.app.listen(this.port, function () {
            console.log("Listening on port " + _this.port);
        });
    };
    Server.prototype.routes = function () {
        this.app.use(express.static(path.join(__dirname, '../public/Views/Portfolio_View/build')));
        this.app.use(express.static('./public/Views/WeatherCast_View/build'));
        this.app.use(express.static(path.join('./public/Views/Podomoro_View/build')));
        this.app.use('/', MainRoute_1.MainRoute);
        this.app.use('/api', MainAPIRoute_1.MainAPIRoute);
        this.app.use('/apps', AppsRoute_1.AppsRoute);
    };
    return Server;
}());
exports.Server = Server;
//# sourceMappingURL=server.js.map