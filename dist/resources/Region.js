"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Region = void 0;
var Region;
(function (Region) {
    //data
    //exchange
    function toString(x) {
        return Region.to[x];
    }
    Region.toString = toString;
    function fromString(x) {
        return Region.from[x];
    }
    Region.fromString = fromString;
})(Region = exports.Region || (exports.Region = {}));
