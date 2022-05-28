//data

const fromData = {
    '01bb38e1-da47-4e6a-9b3d-945fe4655707': 'Agents',
    'f85cb6f7-33e5-4dc8-b609-ec7212301948': 'Contracts',
    'd5f120f8-ff8c-4aac-92ea-f2b5acbe9475': 'Sprays',
    'dd3bf334-87f3-40bd-b043-682a57a8dc3a': 'Gun_Buddies',
    '3f296c07-64c3-494c-923b-fe692a4fa1bd': 'Cards',
    'e7c63390-eda7-46e0-bb7a-a6abdacd2433': 'Skins',
    '3ad1b2b2-acdb-4524-852f-954a76ddae0a': 'Skin_Variants',
    'de7caa6b-adf7-4588-bbd1-143831e786c6': 'Titles',
};

const toData = {
    Agents: '01bb38e1-da47-4e6a-9b3d-945fe4655707',
    Contracts: 'f85cb6f7-33e5-4dc8-b609-ec7212301948',
    Sprays: 'd5f120f8-ff8c-4aac-92ea-f2b5acbe9475',
    Gun_Buddies: 'dd3bf334-87f3-40bd-b043-682a57a8dc3a',
    Cards: '3f296c07-64c3-494c-923b-fe692a4fa1bd',
    Skins: 'e7c63390-eda7-46e0-bb7a-a6abdacd2433',
    Skin_Variants: '3ad1b2b2-acdb-4524-852f-954a76ddae0a',
    Titles: 'de7caa6b-adf7-4588-bbd1-143831e786c6',
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