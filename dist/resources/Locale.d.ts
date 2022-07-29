export declare namespace Locale {
    type String = keyof typeof Locale.from;
    type Name = keyof typeof Locale.to;
}
export declare class Locale {
    static readonly from: {
        "ar-AE": string;
        "de-DE": string;
        "en-GB": string;
        "en-US": string;
        "es-ES": string;
        "es-MX": string;
        "fr-FR": string;
        "id-ID": string;
        "it-IT": string;
        "ja-JP": string;
        "ko-KR": string;
        "pl-PL": string;
        "pt-BR": string;
        "ru-RU": string;
        "th-TH": string;
        "tr-TR": string;
        "vi-VN": string;
        "zh-CN": string;
        "zh-TW": string;
    };
    static readonly to: {
        Arabic_UAE: string;
        German_Germany: string;
        English_United_Kingdom: string;
        English_United_States: string;
        Spanish_Spain: string;
        Spanish_Mexico: string;
        French_France: string;
        Indonesian_Indonesia: string;
        Italian_Italy: string;
        Japanese_Japan: string;
        Korean_Korea: string;
        Polish_Poland: string;
        Portuguese_Brazil: string;
        Russian_Russia: string;
        Thai_Thailand: string;
        Turkish_Turkey: string;
        Vietnamese_Vietnam: string;
        Chinese_China: string;
        Chinese_Taiwan: string;
    };
    static toString(x: Locale.Name): Locale.String;
    static fromString(x: Locale.String): Locale.Name;
}
