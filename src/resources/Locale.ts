//interface
export namespace Locale {
    export type String = keyof typeof Locale.from;
    export type Name = keyof typeof Locale.to;
}

export class Locale {
    //data

    public static readonly from = {
        "ar-AE": "Arabic_UAE",
        "de-DE": "German_Germany",
        "en-GB": "English_United_Kingdom", //not support valorant-api.com
        "en-US": "English_United_States",
        "es-ES": "Spanish_Spain",
        "es-MX": "Spanish_Mexico",
        "fr-FR": "French_France",
        "id-ID": "Indonesian_Indonesia",
        "it-IT": "Italian_Italy",
        "ja-JP": "Japanese_Japan",
        "ko-KR": "Korean_Korea",
        "pl-PL": "Polish_Poland",
        "pt-BR": "Portuguese_Brazil",
        "ru-RU": "Russian_Russia",
        "th-TH": "Thai_Thailand",
        "tr-TR": "Turkish_Turkey",
        "vi-VN": "Vietnamese_Vietnam",
        "zh-CN": "Chinese_China",
        "zh-TW": "Chinese_Taiwan",
    };

    public static readonly to = {
        Arabic_UAE: "ar-AE",
        German_Germany: "de-DE",
        English_United_Kingdom: "en-GB",
        English_United_States: "en-US",
        Spanish_Spain: "es-ES",
        Spanish_Mexico: "es-MX",
        French_France: "fr-FR",
        Indonesian_Indonesia: "id-ID",
        Italian_Italy: "it-IT",
        Japanese_Japan: "ja-JP",
        Korean_Korea: "ko-KR",
        Polish_Poland: "pl-PL",
        Portuguese_Brazil: "pt-BR",
        Russian_Russia: "ru-RU",
        Thai_Thailand: "th-TH",
        Turkish_Turkey: "tr-TR",
        Vietnamese_Vietnam: "vi-VN",
        Chinese_China: "zh-CN",
        Chinese_Taiwan: "zh-TW",
    };

    //exchange

    public static toString(x: Locale.Name): Locale.String {
        return Locale.to[x] as Locale.String;
    }

    public static fromString(x: Locale.String): Locale.Name {
        return Locale.from[x] as Locale.Name;
    }
}