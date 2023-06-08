"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toOrginalCase = exports.toLowerCase = void 0;
const toLowerCase = (string) => {
    return string.toLowerCase();
};
exports.toLowerCase = toLowerCase;
const toOrginalCase = (originalString, modifiedString) => {
    let restoredString = '';
    for (let i = 0; i < originalString.length; i++) {
        const originalChar = originalString[i];
        const modifiedChar = modifiedString[i];
        if (originalChar === originalChar.toUpperCase()) {
            restoredString += modifiedChar.toUpperCase();
        }
        else {
            restoredString += modifiedChar.toLowerCase();
        }
    }
    return restoredString;
};
exports.toOrginalCase = toOrginalCase;
