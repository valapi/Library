"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Locale = void 0;
class Locale {
    //exchange
    static toString(x) {
        return Locale.to[x];
    }
    static fromString(x) {
        return Locale.from[x];
    }
}
exports.Locale = Locale;
//data
Locale.from = {
    "ar-AE": "Arabic_UAE",
    "de-DE": "German_Germany",
    "en-GB": "English_United_Kingdom",
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
Locale.to = {
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
