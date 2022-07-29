export declare namespace QueueId {
    const from: {
        'unrated': 'Unrated';
        'competitive': 'Competitive';
        'spikerush': 'Spikerush';
        'deathmatch': 'Deathmatch';
        'ggteam': 'Escalation';
        'onefa': 'Replication';
        'snowball': 'Snowball_Fight';
        '': 'Custom';
        'tournamentmode': 'Custom_Tournament';
        'newmap': 'Pearl';
    };
    const to: {
        Unrated: 'unrated';
        Competitive: 'competitive';
        Spikerush: 'spikerush';
        Deathmatch: 'deathmatch';
        Escalation: 'ggteam';
        Replication: 'onefa';
        Snowball_Fight: 'snowball';
        Custom: '';
        Custom_Tournament: 'tournamentmode';
    };
    type String = keyof typeof QueueId.from;
    type Name = keyof typeof QueueId.to;
    function toString(x: QueueId.Name): Exclude<QueueId.String, 'newmap'>;
    function fromString(x: QueueId.String): QueueId.Name | typeof QueueId.from['newmap'];
}
