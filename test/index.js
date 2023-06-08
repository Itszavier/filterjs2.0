
const {Filter, censor, hasBlacklistWord} = require("../lib")

const filter = new Filter("i motherfucker you bitch");

console.log(filter.hasBlacklistWord());

console.log(filter.censor());


console.log(hasBlacklistWord("i love you BitCH", null, (match) => {
    console.log(match);
}));



console.log(hasBlacklistWord('hello fuck', null, (match) => {
    console.log(match);
}))


console.log(censor("fuck you"))