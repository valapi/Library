"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Locale = void 0;
var Locale;
(function (Locale) {
    //data
    //exchange
    function toString(x) {
        return Locale.to[x];
    }
    Locale.toString = toString;
    function fromString(x) {
        return Locale.from[x];
    }
    Locale.fromString = fromString;
})(Locale = exports.Locale || (exports.Locale = {}));
