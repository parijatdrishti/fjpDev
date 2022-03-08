// printing in js

console.log("hello world!!!");

// variables in js

let num = 5; //Number
console.log(num);

let char = 'a'; //char
console.log(char);

let str = "I am string"; //string
let string = 'I am also string'; //string

console.log(str);
console.log(string);

let bool = 'true';
console.log(bool);

//loops
for(let i = 1 ; i<=5 ; i++){
    console.log(i);
}

let count = 10;
while(count>0){
    console.log(count);
    count--;
}

// isprime
let n = 34925;
let isprime = true;
for(let i = 2 ; i*i <= n ; i++){
    if(n%i == 0){
        isprime = false;
        break;
    }
}
if(isprime == true){
    console.log("number is not prime");
}
else{
    console.log("number is not prime");
}