let fs = require("fs");
let path = require("path");
let downloadFolderPath = process.argv[2];
// console.log(downloadFolderPath);

let folderExists = fs.existsSync(downloadFolderPath);

let extensions = {
    Audio : [".mp3"],
    Video : [".mp4", ".mkv"],
    Document : [".doc", ".xlsx", ".pdf",".txt"],
    Image : [".jpeg", ".png", ".jpg", ".gif"],
    Software : [".exe"]
}

if(folderExists){
    // we will code
    // console.log("valid path");
    let files = fs.readdirSync(downloadFolderPath);
    for(let i = 0 ; i< files.length ; i++){
        let ext = path.extname(files[i]);
        let folderName = giveFolderName(ext);
        // console.log("Ext--", ext , "Folder Name--", folderName);
        let pathOfFolder = path.join(downloadFolderPath,folderName);
        let exists = fs.existsSync(pathOfFolder);
        if(!exists){
            fs.mkdirSync(pathOfFolder)
        }
        moveFile(downloadFolderPath, pathOfFolder, files[i]);
    }

}else{
    console.log("please enter a vaild path!!!!")
}

function giveFolderName(ext){
    for(let key in extensions){
        let extArr = extensions[key];
        for(let i = 0 ; i< extArr.length ; i++){
            if(extArr[i] == ext){
                return key;
            }
        }
    }
    return "Others";
}

function moveFile(downloadFolderPath, pathOfFolder, fileName){
    let sourcePath = path.join(downloadFolderPath , fileName);
    let destPath = path.join(pathOfFolder, fileName);
    fs.copyFileSync(sourcePath, destPath);
    fs.unlinkSync(sourcePath);
}