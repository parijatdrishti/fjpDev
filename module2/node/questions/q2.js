//Q. given an array arr=[audio,video,image,software,documents,applications,other]
//   make folder for each element in the given array and inside each folder make 4 files of that type

let fs = require("fs");
let path = require("path");
let arr = ['audio','video','image','software','documents','applications','other'];
let nameArr = ['abc','efg','def' , 'tyr'];
let extArr = ['.mp3','.mp4','.jpg','.exe','.pdf','.apk','.obj'];

let organisePath = path.join(__dirname, "organise");

if(!fs.existsSync(organisePath))
    fs.mkdirSync(organisePath);

for(let i =0 ; i<arr.length ; i++){
    let folderPath = path.join(organisePath, arr[i]);
    if(!fs.existsSync(folderPath))
        fs.mkdirSync(folderPath);
    for(let j = 0 ; j<nameArr.length ; j++){
        let fileName = nameArr[j] + extArr[i];
        let filePath = path.join(folderPath,fileName);
        fs.writeFileSync(filePath,"");
    }  
}
    
