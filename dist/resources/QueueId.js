"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fromData = {
    'unrated': 'Unrated',
    'competitive': 'Competitive',
    'spikerush': 'Spikerush',
    'deathmatch': 'Deathmatch',
    'ggteam': 'Escalation',
    'onefa': 'Replication',
    'snowball': 'Snowball_Fight',
    '': 'Custom',
    'tournamentmode': 'Custom_Tournament',
    //change when have new map
    'newmap': 'Pearl',
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
    Custom_Tournament: 'tournamentmode',
};
//exchange
function toString(x) {
    return toData[x];
}
function fromString(x) {
    return fromData[x];
}
//export
exports.default = {
    from: fromData,
    to: toData,
    toString,
    fromString,
};
