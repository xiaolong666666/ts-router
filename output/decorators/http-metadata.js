"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.httpPost = exports.httpGet = exports.httpSymbolKey = void 0;
require("reflect-metadata");
exports.httpSymbolKey = Symbol('http');
var httpGet = function () {
    return function (target, propertyKey) {
        Reflect.defineMetadata(exports.httpSymbolKey, 'get', target, propertyKey);
    };
};
exports.httpGet = httpGet;
var httpPost = function () {
    return function (target, propertyKey) {
        Reflect.defineMetadata(exports.httpSymbolKey, 'post', target, propertyKey);
    };
};
exports.httpPost = httpPost;
//# sourceMappingURL=http-metadata.js.map