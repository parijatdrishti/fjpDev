let cp = require('child_process');
// to open calculator
// cp.execSync("calc");
// to open visual studio code
// cp.execSync("code");

content = cp.execSync("node test.js");
// the data stored in content is in standard binary form
console.log('output of test.js file :'+ content);
// if atleast a blank string is not attached the output will be in binary form then 
console.log(''+ content);

