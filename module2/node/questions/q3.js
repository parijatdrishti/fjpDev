//Q. copy index.html file from module1 to a new folder inside module2 having name html.
let fs = require("fs");
let path = require("path");

let sourcePath = path.join(__dirname , "..","..","..","module1","index.html");
console.log(sourcePath)
let destPath = path.join(__dirname,"..","..","index.html");
console.log(destPath)

fs.copyFileSync(sourcePath, destPath);