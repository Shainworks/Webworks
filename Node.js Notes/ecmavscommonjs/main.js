// import {a,q,w,e,r} from "./ecmaes6.js"
// console.log(a,q,w,e,r)
// import darshan from "./ecmaes6.js"
// console.log(darshan)
//this above code works when we use es6 ecmascript


// (function(exports, require, module, __filename, __dirname) {

//     // Module code actually lives here
  
//   });
//nodejs wraps our whole content which we are using in this above function .....the aboove function alredy exists we don't have to write it

//Now i will change the type from module which was es6 type to common js by removing type:"module" in package json
const a = require("./common")
console.log(a,__dirname,__filename)