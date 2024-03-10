"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
var http_metadata_1 = require("./decorators/http-metadata");
var path_metadata_1 = require("./decorators/path-metadata");
var User = (function () {
    function User() {
    }
    User.prototype.info = function () {
        console.log('user info');
        return { messgae: 'user info' };
    };
    User.prototype.login = function (params) {
        console.log('user login', params);
        return { message: 'user login' };
    };
    User.prototype.exit = function () {
        console.log('user logout');
        return { message: 'user logout' };
    };
    __decorate([
        (0, http_metadata_1.httpGet)(),
        (0, path_metadata_1.path)('/user/info'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], User.prototype, "info", null);
    __decorate([
        (0, http_metadata_1.httpPost)(),
        (0, path_metadata_1.path)('/user/login'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], User.prototype, "login", null);
    __decorate([
        (0, http_metadata_1.httpPost)(),
        (0, path_metadata_1.path)('/user/logout'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], User.prototype, "exit", null);
    return User;
}());
exports.default = (function (app) {
    var user = new User();
    console.log(user);
    for (var methodName in user) {
        var method = user[methodName];
        if (typeof method !== 'function')
            break;
        var httpMethod = Reflect.getMetadata(http_metadata_1.httpSymbolKey, user, methodName);
        var pathMethod = Reflect.getMetadata(path_metadata_1.pathSymbolKey, user, methodName);
        console.log(methodName, httpMethod, pathMethod);
        app[httpMethod](pathMethod, method);
    }
});
//# sourceMappingURL=router.js.map