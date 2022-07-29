export declare namespace QueueId {
    type String = keyof typeof QueueId.from;
    type Name = keyof typeof QueueId.to;
}
export declare class QueueId {
    private static readonly NewmapName;
    static readonly from: {
        unrated: string;
        competitive: string;
        spikerush: string;
        deathmatch: string;
        ggteam: string;
        onefa: string;
        snowball: string;
        '': string;
        tournamentmode: string;
        newmap: string;
    };
    static readonly to: {
        Unrated: string;
        Competitive: string;
        Spikerush: string;
        Deathmatch: string;
        Escalation: string;
        Replication: string;
        Snowball_Fight: string;
        Custom: string;
        Custom_Tournament: string;
    };
    static toString(x: QueueId.Name): Exclude<QueueId.String, 'newmap'>;
    static fromString(x: QueueId.String): QueueId.Name | typeof QueueId.NewmapName;
}
