# Get started 

based on the older package `devspeed-filterjs` but with more advance filtering.
```js
const {Filter, badwords} = require("@devspeed/filterjs");

const TextFilter = new Filter("hi badword") 

console.log(TextFilter.censor()) // hi *******

console.log(TextFilter.hasBlacklistWord()); // true
```


>  badwords is filled with most of the words from 