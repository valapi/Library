import _Region from "../resources/Region";
interface ValorantApiRegion {
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
declare class ValRegion {
    private base;
    private region;
    private server;
    private riotRegion;
    /**
     * Class Constructor
     * @param {String} region Region (default: na)
     */
    constructor(region?: keyof typeof _Region.from);
    /**
     *
     * @returns {ValorantApiRegion}
     */
    toJSON(): ValorantApiRegion;
    /**
     * @param {String} region Region
     * @returns {ValorantApiRegion}
     */
    static fromString(region: keyof typeof _Region.to): ValorantApiRegion;
}
export { ValRegion };
export type { ValorantApiRegion };
//# sourceMappingURL=ValRegion.d.ts.map