console.log("Hello Darshan")
var slugify = require('slugify')

const a = slugify('some string') // some-string
console.log(a)
// if you prefer something other than '-' as separator
const b = slugify('some st$%ring', '_')  // some_string
//some special characters are not allowed basically slugify is smthg in the url of search engines where special characters are not allowed 
console.log(b)
//And this a stand alone js this is not written anywhere
//Bascially servewr side Coding
//Node.js has Chrome v8 JS engine which creates a runtimr environment for users to run js code