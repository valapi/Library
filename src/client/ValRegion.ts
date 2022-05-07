//import
import _Region from "../resources/Region";
import { CustomEvent } from './CustomEvent';

//interface

interface ValorantAPIRegion {
    data: {
        base: string,
        api: string,
        server: string,
        riot: string,
    },
    url: {
        playerData: string,
        partyService: string,
        sharedData: string,
    },
    riot: {
        api: string,
        esports: string,
        server: string,
    }
}

//class

/**
 * * Class ID: @ing3kth/valapi/ValRegion
 */
class ValRegion extends CustomEvent {
    private base:keyof typeof _Region | string;
    private region:any;
    private server:any;
    private riotRegion:any;

    /**
    * @param {String} region Region
    * @returns {IValRegion}
    */
    constructor(region:keyof typeof _Region = 'na') {
        super();
        this.base = region;

        if(!_Region[region] || region === 'data') {
            throw new Error(`Region '${String(this.base)}' not found`);
        }

        switch (region) {
            case 'na':
                this.region = 'na';
                this.server = 'na';
                this.riotRegion = 'americas';
                break;
            case 'latam':
                this.region = 'latam';
                this.server = 'na';
                this.riotRegion = 'americas';
                break;
            case 'br':
                this.region = 'br';
                this.server = 'na';
                this.riotRegion = 'americas';
                break;
            case 'pbe':
                this.region = 'na';
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
     * @returns {ValorantAPIRegion}
     */
     public toJSON():ValorantAPIRegion {
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
     * @param {String} region Region
     * @returns {String}
     */
     public static toString(region: keyof typeof _Region.data):keyof typeof _Region {
        return _Region.data[region] as keyof typeof _Region;
    }

    /**
     * @param {String} region Region
     * @returns {ValorantAPIRegion}
     */
     public static fromString(region: keyof typeof _Region.data):ValorantAPIRegion {
        const _region = new ValRegion(ValRegion.toString(region));
        return _region.toJSON();
    }
}

//export
export { ValRegion };
export type { ValorantAPIRegion };