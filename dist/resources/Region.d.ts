export declare namespace Region {
    type String = keyof typeof Region.from;
    type Name = keyof typeof Region.to;
}
export declare class Region {
    static readonly from: {
        na: string;
        latam: string;
        br: string;
        pbe: string;
        eu: string;
        kr: string;
        ap: string;
    };
    static readonly to: {
        North_America: string;
        Latin_America: string;
        Brazil: string;
        Public_Beta_Environment: string;
        Europe: string;
        Korea: string;
        Asia_Pacific: string;
    };
    static toString(x: Region.Name): Region.String;
    static fromString(x: Region.String): Region.Name;
}
