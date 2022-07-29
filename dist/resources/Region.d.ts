export declare namespace Region {
    const from: {
        'na': 'North_America';
        'latam': 'Latin_America';
        'br': 'Brazil';
        'pbe': 'Public_Beta_Environment';
        'eu': 'Europe';
        'kr': 'Korea';
        'ap': 'Asia_Pacific';
    };
    const to: {
        North_America: 'na';
        Latin_America: 'latam';
        Brazil: 'br';
        Public_Beta_Environment: 'pbe';
        Europe: 'eu';
        Korea: 'kr';
        Asia_Pacific: 'ap';
    };
    type String = keyof typeof Region.from;
    type Name = keyof typeof Region.to;
    function toString(x: Region.Name): Region.String;
    function fromString(x: Region.String): Region.Name;
}
