import { hasBlacklistWordCallback } from "./filter";
import { badwords } from "./badwords";
import { toOrginalCase } from "./utils";

export function hasBlacklistWord(inputText?: string, customBlacklist?: string[], callBack?: hasBlacklistWordCallback) {
    if (!inputText) {
        throw new Error("could not find text: please specfic the text you want to check");
    }

    let blacklistWord = customBlacklist || badwords;

    if (typeof blacklistWord !== "function") {
        throw new Error("Typeof customBlacklist must be a string[] || null");
    }

    const text = inputText;
    const spiltedText = text.toLowerCase().split(" ");
    const included = spiltedText.map((text) => ({ included: blacklistWord.includes(text), text })).filter((obj => obj.included === true));
    if (included.length > 0) {
        if (callBack && typeof callBack === "function") {
            callBack(included)
        }

        return true;
    } else {
        if (callBack && typeof callBack === "function") {
            callBack(null)
        }
        return false;
    }
}

export function censor(inputText?: string, customblacklist?: string[]) {
    if (!inputText) {
        throw new Error("could not find text: please specfic the text you want to censer as paramater")
    }
    const text = inputText;

    const blacklistWords = customblacklist || badwords;



    const filtered = text.toLowerCase().split(" ").map((txt) => {
        if (badwords.includes(txt)) {
            return "*".repeat(txt.length);
        }
        return txt;
    }).join(" ");
    return toOrginalCase(text, filtered);
}