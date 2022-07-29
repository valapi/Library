//import

import { Region } from "../resources/Region";

//interface

namespace ValRegion {
    /**
     * Region Data
     */
    export interface Json {
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
}

//class

class ValRegion {
    private base: Region.String;
    private region: string;
    private server: string;
    private riotRegion: string;

    /**
     * 
     * @param {String} region Region (default: na)
     */
    public constructor(region: Region.String = 'na') {
        this.base = region;

        this.region = 'na';
        this.server = 'na';
        this.riotRegion = 'americas';

        switch (region) {
            case 'na': {
                break;
            }
            case 'latam': {
                this.region = 'latam';
                break;
            }
            case 'br': {
                this.region = 'br';
                break;
            }
            case 'pbe': {
                this.server = 'pbe';
                this.riotRegion = 'pbe1';
                break;
            }
            case 'eu': {
                this.region = 'eu';
                this.server = 'eu';
                this.riotRegion = 'europe';
                break;
            }
            case 'kr': {
                this.region = 'kr';
                this.server = 'kr';
                this.riotRegion = 'asia';
                break;
            }
            case 'ap': {
                this.region = 'ap';
                this.server = 'ap';
                this.riotRegion = 'asia';
                break;
            }
            default: {
                return new ValRegion('na');
            }
        }
    }

    /**
     * 
     * @returns {ValRegion.Json}
     */
    public toJSON(): ValRegion.Json {
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
    public static fromString(region: Region.String): ValRegion.Json {
        const _region = new ValRegion(region);
        return _region.toJSON();
    }

    /**
     * @param {string} region Region
     * @returns {ValRegion.Json}
     */
    public static fromName(region: Region.Name): ValRegion.Json {
        const _region = new ValRegion(Region.toString(region));
        return _region.toJSON();
    }
}

//export

export { ValRegion };