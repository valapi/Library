const fromData = {
    'na': 'North_America',
    'latam': 'Latin_America',
    'br': 'Brazil',
    'pbe': 'Public_Beta_Environment',
    'eu': 'Europe',
    'kr': 'Korea',
    'ap': 'Asia_Pacific',
};

const toData = {
    North_America: 'na',
    Latin_America: 'latam',
    Brazil: 'br',
    Public_Beta_Environment: 'pbe',
    Europe: 'eu',
    Korea: 'kr',
    Asia_Pacific: 'ap',
};

//exchange

function toString(x: keyof typeof toData): keyof typeof fromData {
    return toData[x] as keyof typeof fromData;
}

function fromString(x: keyof typeof fromData): keyof typeof toData {
    return fromData[x] as keyof typeof toData;
}

//export

export default {
    from: fromData,
    to: toData,
    toString,
    fromString,
};