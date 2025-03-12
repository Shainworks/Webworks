const fs = require("fs").promises;

async function handleFiles() {
    console.log("Starting");

    await fs.writeFile("darshan2.txt", "Hey darsshan here with 2.0 version");
    console.log("File written");

    let data = await fs.readFile("darshan2.txt", "utf-8");
    console.log("File read:", data);

    await fs.appendFile("darshan.txt", "Hey I am an appended text");
    console.log("Text appended");

    console.log("Ending");
}

handleFiles();
console.log("This runs while async function executes");
//Here i am using this module "require("fs").promises" to make it use async and await to avoid callbackhell
