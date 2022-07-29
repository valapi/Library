"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItemTypeId = void 0;
var ItemTypeId;
(function (ItemTypeId) {
    //data
    //exchange
    function toString(x) {
        return ItemTypeId.to[x];
    }
    ItemTypeId.toString = toString;
    function fromString(x) {
        return ItemTypeId.from[x];
    }
    ItemTypeId.fromString = fromString;
})(ItemTypeId = exports.ItemTypeId || (exports.ItemTypeId = {}));
