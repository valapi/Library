//interface
export namespace QueueId {
    export type String = keyof typeof QueueId.from;
    export type Name = keyof typeof QueueId.to;
}

export class QueueId {
    //change when have new map
    private static readonly NewmapName = 'Pearl';

    //data

    public static readonly from = {
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

    public static readonly to = {
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

    public static toString(x: QueueId.Name): Exclude<QueueId.String, 'newmap'> {
        return QueueId.to[x] as Exclude<QueueId.String, 'newmap'>;
    }

    public static fromString(x: QueueId.String): QueueId.Name | typeof QueueId.NewmapName {
        return QueueId.from[x] as QueueId.Name | typeof QueueId.NewmapName;
    }
}