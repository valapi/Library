const fromData = {
    'unrated': 'Unrated',
    'competitive': 'Competitive',
    'spikerush': 'Spikerush',
    'deathmatch': 'Deathmatch',
    'ggteam': 'Escalation',
    'onefa': 'Replication',
    'snowball': 'Snowball_Fight',
    '': 'Custom',

    //change when have new map
    'newmap': 'Fracture',
};

const toData = {
    Unrated: 'unrated',
    Competitive: 'competitive',
    Spikerush: 'spikerush',
    Deathmatch: 'deathmatch',
    Escalation: 'ggteam',
    Replication: 'onefa',
    Snowball_Fight: 'snowball',
    Custom: '',
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