//interface
export namespace Region {
    export type String = keyof typeof Region.from;
    export type Name = keyof typeof Region.to;
}

export class Region {
    //data

    public static readonly from = {
        'na': 'North_America',
        'latam': 'Latin_America',
        'br': 'Brazil',
        'pbe': 'Public_Beta_Environment',
        'eu': 'Europe',
        'kr': 'Korea',
        'ap': 'Asia_Pacific',
    };

    public static readonly to = {
        North_America: 'na',
        Latin_America: 'latam',
        Brazil: 'br',
        Public_Beta_Environment: 'pbe',
        Europe: 'eu',
        Korea: 'kr',
        Asia_Pacific: 'ap',
    };

    //exchange

    public static toString(x: Region.Name): Region.String {
        return Region.to[x] as Region.String;
    }

    public static fromString(x: Region.String): Region.Name {
        return Region.from[x] as Region.Name;
    }
}