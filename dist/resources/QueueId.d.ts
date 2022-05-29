declare const fromData: {
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
declare const toData: {
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
declare function toString(x: keyof typeof toData): keyof typeof fromData;
declare function fromString(x: keyof typeof fromData): keyof typeof toData;
declare const _default: {
    from: {
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
    to: {
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
    toString: typeof toString;
    fromString: typeof fromString;
};
export default _default;
//# sourceMappingURL=QueueId.d.ts.map