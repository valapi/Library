declare const fromData: {
    na: string;
    latam: string;
    br: string;
    pbe: string;
    eu: string;
    kr: string;
    ap: string;
};
declare const toData: {
    North_America: string;
    Latin_America: string;
    Brazil: string;
    Public_Beta_Environment: string;
    Europe: string;
    Korea: string;
    Asia_Pacific: string;
};
declare function toString(x: keyof typeof toData): keyof typeof fromData;
declare function fromString(x: keyof typeof fromData): keyof typeof toData;
declare const _default: {
    from: {
        na: string;
        latam: string;
        br: string;
        pbe: string;
        eu: string;
        kr: string;
        ap: string;
    };
    to: {
        North_America: string;
        Latin_America: string;
        Brazil: string;
        Public_Beta_Environment: string;
        Europe: string;
        Korea: string;
        Asia_Pacific: string;
    };
    toString: typeof toString;
    fromString: typeof fromString;
};
export default _default;
