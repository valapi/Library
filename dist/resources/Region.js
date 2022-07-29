"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Region = void 0;
class Region {
    //exchange
    static toString(x) {
        return Region.to[x];
    }
    static fromString(x) {
        return Region.from[x];
    }
}
exports.Region = Region;
//data
Region.from = {
    'na': 'North_America',
    'latam': 'Latin_America',
    'br': 'Brazil',
    'pbe': 'Public_Beta_Environment',
    'eu': 'Europe',
    'kr': 'Korea',
    'ap': 'Asia_Pacific',
};
Region.to = {
    North_America: 'na',
    Latin_America: 'latam',
    Brazil: 'br',
    Public_Beta_Environment: 'pbe',
    Europe: 'eu',
    Korea: 'kr',
    Asia_Pacific: 'ap',
};
