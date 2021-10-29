// CommonJS, every file is module (by default)
// Modules - Encapsulated Code (only share minimum)
const names = require("./03-names");
const sayHi = require("./04-utils");
const data = require("./05-alternative-flavor");
require("./06-mind-grenade");
sayHi("susan");
sayHi(names.john);
sayHi(names.peter);
console.log(data);
