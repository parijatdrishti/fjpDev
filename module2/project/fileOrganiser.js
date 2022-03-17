let fs = require("fs");
let folderPath = process.argv[2];
// console.log(folderPath);

let folderExists = fs.existsSync(folderPath);

if(folderExists){
    // we will code
    // console.log("valid path");
    let files = fs.readdirSync(folderPath);
    console.log(files);

}else{
    console.log("please enter a vaild path!!!!")
}