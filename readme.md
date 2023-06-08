# Get started 

based on the older package `devspeed-filterjs`
```js
const {Filter, badwords} = require("@devspeed/filterjs");

const TextFilter = new Filter("hi badword") 

console.log(TextFilter.censor()) // hi *******

console.log(TextFilter.hasBlacklistWord()); // true
```


>  badwords is filled with most of the words from [https://www.noswearing.com](https://www.noswearing.com/)