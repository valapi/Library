"use strict";
//import
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValRegion = void 0;
const Region_1 = require("../resources/Region");
//class
class ValRegion {
    /**
     * Class Constructor
     * @param {String} region Region (default: na)
     */
    constructor(region = 'na') {
        this.base = region;
        if (!Region_1.Region.from[region]) {
            throw new Error(`Region '${String(this.base)}' not found`);
        }
        this.region = 'na';
        this.server = 'na';
        this.riotRegion = 'americas';
        switch (region) {
            case 'na':
                break;
            case 'latam':
                this.region = 'latam';
                break;
            case 'br':
                this.region = 'br';
                break;
            case 'pbe':
                this.server = 'pbe';
                this.riotRegion = 'pbe1';
                break;
            case 'eu':
                this.region = 'eu';
                this.server = 'eu';
                this.riotRegion = 'europe';
                break;
            case 'kr':
                this.region = 'kr';
                this.server = 'kr';
                this.riotRegion = 'asia';
                break;
            case 'ap':
                this.region = 'ap';
                this.server = 'ap';
                this.riotRegion = 'asia';
                break;
            default:
                return new ValRegion('na');
        }
    }
    /**
     *
     * @returns {ValRegion.Json}
     */
    toJSON() {
        return {
            data: {
                base: this.base,
                api: this.region,
                server: this.server,
                riot: this.riotRegion,
            },
            url: {
                playerData: `https://pd.${this.server}.a.pvp.net`,
                partyService: `https://glz-${this.region}-1.${this.server}.a.pvp.net`,
                sharedData: `https://shared.${this.server}.a.pvp.net`,
            },
            riot: {
                api: `https://${this.riotRegion}.api.riotgames.com`,
                esports: `https://esports.api.riotgames.com`,
                server: `https://${this.region}.api.riotgames.com`,
            }
        };
    }
    /**
     * @param {string} region Region
     * @returns {ValRegion.Json}
     */
    static fromString(region) {
        const _region = new ValRegion(Region_1.Region.toString(region));
        return _region.toJSON();
    }
}
exports.ValRegion = ValRegion;
