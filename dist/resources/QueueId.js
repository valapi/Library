"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueueId = void 0;
class QueueId {
    //exchange
    static toString(x) {
        return QueueId.to[x];
    }
    static fromString(x) {
        return QueueId.from[x];
    }
}
exports.QueueId = QueueId;
//change when have new map
QueueId.NewmapName = 'Pearl';
//data
QueueId.from = {
    'unrated': 'Unrated',
    'competitive': 'Competitive',
    'spikerush': 'Spikerush',
    'deathmatch': 'Deathmatch',
    'ggteam': 'Escalation',
    'onefa': 'Replication',
    'snowball': 'Snowball_Fight',
    '': 'Custom',
    'tournamentmode': 'Custom_Tournament',
    'newmap': QueueId.NewmapName,
};
QueueId.to = {
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
