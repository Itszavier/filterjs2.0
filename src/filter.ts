import { badwords } from "./badwords";
import { toOrginalCase } from "./utils";




export interface IFilterOptions {
    customBlacklist?: string[],
}

export type hasBlacklistWordCallback = (match: { included: boolean, text: string }[] | null) => void;

export class Filter {
    text: string | undefined;
    options: IFilterOptions | undefined;

    constructor(text?: string, options?: IFilterOptions) {
        this.text = text;
        this.options = options;
    }

    hasBlacklistWord(inputText?: string, callBack?: hasBlacklistWordCallback) {
        const text = inputText || this.text;

        if (!text) {
            throw new Error("could not find text: please specfic the text you want to check");
        }

        const spiltedText = text.toLowerCase().split(" ");


        const blackListWords = this.options?.customBlacklist || badwords;



        const included = spiltedText.map((text) => ({ included: blackListWords.includes(text), text })).filter((obj => obj.included === true));
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

    censor(inputText: string | null) {
        const text = inputText || this.text;

        if (!text) {
            throw new Error("could not find text: please specfic the text you want to censer as paramater")
        }

        const blackListWords = this.options?.customBlacklist || badwords;


        const filtered = text.toLowerCase().split(" ").map((txt) => {
            if (badwords.includes(txt)) {
                return "*".repeat(txt.length);
            }
            return txt;
        }).join(" ");
        return toOrginalCase(text, filtered);
    }


    customblacklist(...words: string[]) {
        if (!words) {
            return;
        }

        if (this.options) {
            return this.options.customBlacklist = words;
        }
    }

}

