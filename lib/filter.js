"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Filter = void 0;
const badwords_1 = require("./badwords");
const utils_1 = require("./utils");
class Filter {
    constructor(text, options) {
        this.text = text;
        this.options = options;
    }
    hasBlacklistWord(inputText, callBack) {
        var _a;
        if (!inputText && !this.text) {
            throw new Error("could not find text: please specfic the text you want to check");
        }
        const text = inputText || this.text;
        const spiltedText = text.toLowerCase().split(" ");
        const blackListWords = ((_a = this.options) === null || _a === void 0 ? void 0 : _a.customBlacklist) || badwords_1.badwords;
        const included = spiltedText.map((text) => ({ included: blackListWords.includes(text), text })).filter((obj => obj.included === true));
        if (included.length > 0) {
            if (callBack && typeof callBack === "function") {
                callBack(included);
            }
            return true;
        }
        else {
            if (callBack && typeof callBack === "function") {
                callBack(null);
            }
            return false;
        }
    }
    censor(inputText) {
        var _a;
        if (!this.text && !inputText) {
            throw new Error("could not find text: please specfic the text you want to censer as paramater");
        }
        const text = inputText || this.text;
        const blackListWords = ((_a = this.options) === null || _a === void 0 ? void 0 : _a.customBlacklist) || badwords_1.badwords;
        const filtered = text.toLowerCase().split(" ").map((txt) => {
            if (badwords_1.badwords.includes(txt)) {
                return "*".repeat(txt.length);
            }
            return txt;
        }).join(" ");
        return (0, utils_1.toOrginalCase)(text, filtered);
    }
    customblacklist(...words) {
        if (!words) {
            return;
        }
        this.options.customBlacklist = words;
    }
}
exports.Filter = Filter;
