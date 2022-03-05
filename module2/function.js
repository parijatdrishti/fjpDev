// function without parameter and without return type
function saysHello(){
    console.log("say hello from functions");
}

saysHello();

// function with parameter
function sum(num1,num2){
    let addition = num1 + num2;
    console.log("addition of two numbers is " + addition);
}

sum(3,5);

// function with return type

function mul(num1,num2){
    return num1*num2;
}
let ans = mul(3,5);
console.log(ans);

//function can be stored into variables and thats why called as first class citizen
let a = function sub(num1,num2){
            return num1 - num2;
        }

console.log(a(10,5));