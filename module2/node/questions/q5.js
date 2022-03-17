//move a file

let fs = require("fs");
let path = require("path");

let sourcePath = path.join(__dirname, "file2.txt");
let destPath = path.join(__dirname,"newFolder","file2.txt");

fs.copyFileSync(sourcePath,destPath);
fs.unlinkSync(sourcePath);