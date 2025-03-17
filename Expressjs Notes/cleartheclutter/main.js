import fs from "fs/promises"
import fsn from "fs"
import path from "path"

const basepath = "C:\\Users\\msdar\\Desktop\\cleartheclutter"
//Change this basepath according to your system requirements

let files = await fs.readdir(basepath)
//readdir(basepath) reads the file in the path and lists them in a array
for (const item of files) {
    console.log("running for ", item)
    let ext = item.split(".")[item.split(".").length - 1]
    if (ext != "js" && ext != "json" && item.split(".").length > 1) {       //i don't want my js and json file to be moved over there
        //what this below if block does is
        //The script checks if a folder with the same name as the file extension (e.g., txt, png, etc.) exists within the basepath.
        // If the folder exists:
        // The file is moved into this folder using fs.rename().
        if (fsn.existsSync(path.join(basepath, ext))) {     //existsSync checks whether the directory exists and returns a boolean
            // Move the file to this directory if its not a js or json file
            fs.rename(path.join(basepath, item), path.join(basepath, ext, item))    //rename is used to rename or move the files and here it is used to move
        }
        else {
            fs.mkdir(ext)
            fs.rename(path.join(basepath, item), path.join(basepath, ext, item))
        }
    }

}
