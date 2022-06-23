//import
import _Region from "../resources/Region";

//interface

interface ValorantApiRegion {
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

class ValRegion {
    private base: keyof typeof _Region | string;
    private region: any;
    private server: any;
    private riotRegion: any;

    /**
     * Class Constructor
     * @param {String} region Region (default: na)
     */
    public constructor(region: keyof typeof _Region.from = 'na') {
        this.base = region;

        if (!_Region.from[region]) {
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
     * @returns {ValorantApiRegion}
     */
    public toJSON(): ValorantApiRegion {
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
     * @returns {ValorantApiRegion}
     */
    public static fromString(region: keyof typeof _Region.to): ValorantApiRegion {
        const _region = new ValRegion(_Region.toString(region));
        return _region.toJSON();
    }
}

//export
export { ValRegion };
export type { ValorantApiRegion };