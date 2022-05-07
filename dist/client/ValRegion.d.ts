import _Region from "../resources/Region";
import { CustomEvent } from './CustomEvent';
interface ValorantAPIRegion {
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
/**
 * * Class ID: @ing3kth/valapi/ValRegion
 */
declare class ValRegion extends CustomEvent {
    private base;
    private region;
    private server;
    private riotRegion;
    /**
    * @param {String} region Region
    * @returns {IValRegion}
    */
    constructor(region?: keyof typeof _Region);
    /**
     *
     * @returns {ValorantAPIRegion}
     */
    toJSON(): ValorantAPIRegion;
    /**
     * @param {String} region Region
     * @returns {String}
     */
    static toString(region: keyof typeof _Region.data): keyof typeof _Region;
    /**
     * @param {String} region Region
     * @returns {ValorantAPIRegion}
     */
    static fromString(region: keyof typeof _Region.data): ValorantAPIRegion;
}
export { ValRegion };
export type { ValorantAPIRegion };
//# sourceMappingURL=ValRegion.d.ts.map