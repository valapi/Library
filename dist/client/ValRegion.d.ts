import { Region } from "../resources/Region";
declare namespace ValRegion {
    interface Json {
        data: {
            base: string;
            api: string;
            server: string;
            riot: string;
        };
        url: {
            playerData: string;
            partyService: string;
            sharedData: string;
        };
        riot: {
            api: string;
            esports: string;
            server: string;
        };
    }
}
declare class ValRegion {
    private base;
    private region;
    private server;
    private riotRegion;
    /**
     * Class Constructor
     * @param {String} region Region (default: na)
     */
    constructor(region?: Region.String);
    /**
     *
     * @returns {ValRegion.Json}
     */
    toJSON(): ValRegion.Json;
    /**
     * @param {string} region Region
     * @returns {ValRegion.Json}
     */
    static fromString(region: keyof typeof Region.to): ValRegion.Json;
}
export { ValRegion };
