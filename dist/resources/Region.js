"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fromData = {
    'na': 'North_America',
    'latam': 'Latin_America',
    'br': 'Brazil',
    'pbe': 'Public_Beta_Environment',
    'eu': 'Europe',
    'kr': 'Korea',
    'ap': 'Asia_Pacific',
};
const toData = {
    North_America: 'na',
    Latin_America: 'latam',
    Brazil: 'br',
    Public_Beta_Environment: 'pbe',
    Europe: 'eu',
    Korea: 'kr',
    Asia_Pacific: 'ap',
};
//exchange
function toString(x) {
    return toData[x];
}
function fromString(x) {
    return fromData[x];
}
//export
exports.default = {
    from: fromData,
    to: toData,
    toString,
    fromString,
};
//# sourceMappingURL=Region.js.map