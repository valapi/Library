"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueueId = void 0;
var QueueId;
(function (QueueId) {
    //data
    //exchange
    function toString(x) {
        return QueueId.to[x];
    }
    QueueId.toString = toString;
    function fromString(x) {
        return QueueId.from[x];
    }
    QueueId.fromString = fromString;
})(QueueId = exports.QueueId || (exports.QueueId = {}));
