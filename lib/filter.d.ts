export interface IFilterOptions {
    customBlacklist?: string[];
}
export declare type hasBlacklistWordCallback = (match: {
    included: boolean;
    text: string;
}[] | null) => void;
export declare class Filter {
    text: string;
    options: IFilterOptions;
    constructor(text: string, options: IFilterOptions);
    hasBlacklistWord(inputText: string, callBack?: hasBlacklistWordCallback): boolean;
    censor(inputText: string): string;
    customblacklist(...words: string[]): void;
}
