import path from "path"
let myPath = "C:\\Users\\msdar\\Desktop\\Frameworks\\fsndpathmodules\\path.js"
console.log(path.extname(myPath))   //gives the extension of ther file
console.log(path.dirname(myPath))   //gives the directory of the file where it is located
console.log(path.basename(myPath))  //gives the full base name of the file with extension
console.log(path.join("c:\\","progams\\darshan.txt"))      //joins the paths of specified.... the package will understand even if there is mmistakes with the slashes