// fileSystemModule
let fs = require("fs");

let path = require("path");

let filePath = path.join(__dirname, "file.txt");
// console.log(filePath);

// CRUD 
// C-create
// it creates file if it does not exist otherwise it overrides
fs.writeFileSync(filePath,"Hello I am a text File. ");

// R - read
// to read a file
console.log("before update")
let content = fs.readFileSync(filePath , "utf-8");
console.log(content);

// U- update
fs.appendFileSync(filePath , "\nNewly added content")
console.log("after update");
console.log(fs.readFileSync(filePath , "utf-8"));

// D- delete
fs.unlinkSync(filePath);