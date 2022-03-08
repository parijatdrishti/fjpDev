let str = "I am a string";
console.log(str);

// length
let len = str.length;
console.log(len);

// sliced method - extracts part of a string

let slicedStr = str.slice(2,9);
console.log(slicedStr);

// replace method - replaces the part in string you want and stores it in new variable original string is unchnaged

let repstr = str.replace("am","was");
console.log("replaced string",repstr);
console.log("original string",str);

// uppercase function
let uppercase = str.toUpperCase();
console.log(uppercase);

// lowercase function
let lowercase = str.toLowerCase();
console.log(lowercase);

// concate

let firstName = "Drishti"
let lastName = "Parijat"

let fullName = firstName.concat(lastName);
console.log(fullName);

let fullName2 = firstName + lastName;
console.log(fullName2);

// split -> return arr by splitting string using symbol specified

let splitarr = str.split(" ");
console.log(splitarr);