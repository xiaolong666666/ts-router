"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.path = exports.pathSymbolKey = void 0;
require("reflect-metadata");
exports.pathSymbolKey = Symbol('path');
var path = function (path) {
    return function (target, propertyKey, descriptor) {
        Reflect.defineMetadata(exports.pathSymbolKey, path, target, propertyKey);
        if (!descriptor.value)
            return;
        var oldMethod = descriptor.value;
        descriptor.value = function (req, res) {
            var params = Object.assign({}, req.body, req.query);
            var result = oldMethod.call(this, params);
            res.send(result);
        };
    };
};
exports.path = path;
//# sourceMappingURL=path-metadata.js.map