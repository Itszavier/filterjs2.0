export const toLowerCase = (string: string) => {
    return string.toLowerCase();
}

export const toOrginalCase = (originalString: string, modifiedString: string) => {
    let restoredString = '';
    for (let i = 0; i < originalString.length; i++) {
        const originalChar = originalString[i];
        const modifiedChar = modifiedString[i];
        if (originalChar === originalChar.toUpperCase()) {
            restoredString += modifiedChar.toUpperCase();
        } else {
            restoredString += modifiedChar.toLowerCase();
        }
    }
    return restoredString;
}




