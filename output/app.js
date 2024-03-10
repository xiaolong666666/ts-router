"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var router_1 = require("./router");
var app = express();
app.use(express.json());
(0, router_1.default)(app);
app.listen(80, function () {
    console.log('start listening on http://localhost');
});
//# sourceMappingURL=app.js.map