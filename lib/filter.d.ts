export interface IFilterOptions {
    customBlacklist?: string[];
}
export declare type hasBlacklistWordCallback = (match: {
    included: boolean;
    text: string;
}[] | null) => void;
export declare class Filter {
    text: string | undefined;
    options: IFilterOptions | undefined;
    constructor(text?: string, options?: IFilterOptions);
    hasBlacklistWord(callBack?: hasBlacklistWordCallback): boolean;
    censor(inputText: string | null): string;
    customblacklist(...words: string[]): string[] | undefined;
}
