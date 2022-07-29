export namespace QueueId {
    //data

    export declare const from: {
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

    export declare const to: {
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

    //interface

    export type String = keyof typeof QueueId.from;
    export type Name = keyof typeof QueueId.to;

    //exchange

    export function toString(x: QueueId.Name): Exclude<QueueId.String, 'newmap'> {
        return QueueId.to[x];
    }

    export function fromString(x: QueueId.String): QueueId.Name | typeof QueueId.from['newmap'] {
        return QueueId.from[x];
    }
}