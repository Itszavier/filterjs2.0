
const {Filter, censor, hasBlacklistWord} =require("../lib")

const filter = new Filter("i motherfucker you bitch");

console.log(filter.hasBlacklistWord('i love you'));

console.log(filter.censor("fuck you bitch"));


console.log(hasBlacklistWord('fuck you'));



console.log(hasBlacklistWord('hello fuck', null, (match) => {
    console.log(match);
}))


console.log(censor("fuck you"))