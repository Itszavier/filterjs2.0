"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.censor = exports.hasBlacklistWord = void 0;
const badwords_1 = require("./badwords");
const utils_1 = require("./utils");
function hasBlacklistWord(inputText, customBlacklist, callBack) {
    if (!inputText) {
        throw new Error("could not find text: please specfic the text you want to check");
    }
    let blacklistWord = customBlacklist || badwords_1.badwords;
    const text = inputText;
    const spiltedText = text.toLowerCase().split(" ");
    const included = spiltedText.map((text) => ({ included: blacklistWord.includes(text), text })).filter((obj => obj.included === true));
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
exports.hasBlacklistWord = hasBlacklistWord;
function censor(inputText, customblacklist) {
    if (!inputText) {
        throw new Error("could not find text: please specfic the text you want to censer as paramater");
    }
    const text = inputText;
    let blacklistWords = customblacklist || badwords_1.badwords;
    const filtered = text.toLowerCase().split(" ").map((txt) => {
        if (badwords_1.badwords.includes(txt)) {
            return "*".repeat(txt.length);
        }
        return txt;
    }).join(" ");
    return (0, utils_1.toOrginalCase)(text, filtered);
}
exports.censor = censor;
