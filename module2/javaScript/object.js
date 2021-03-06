// empty object
let obj = {};
console.log(obj);

// initializing object
let objName = {
    Name : "xyv",
    Age :34,
    "phoneNo" : 49357390,
    lastName : 'dkjie'
};
console.log(objName);

let capAmerica = {
    Name : "Steve",
    Age : 9999,
    Friends : ['Natasha','thor',"tony",'Bucky','Bruce'],
    Address : {
        City : "Queens",
        State : 'Haryana'
    },
    isAvenger : false,
    sayHi : function(){
        console.log("Cap America Says Hiii");
    }
}
// whole object
console.log(capAmerica);

// name of capAmerica
console.log(capAmerica.Name);

// age of capAmerica
console.log(capAmerica.Age);

// friends of capAmerica
console.log(capAmerica.Friends);
console.log(capAmerica.Friends[0]);

// address of capAmerica
console.log(capAmerica.Address);
console.log(capAmerica.Address.City);

// if we have no defined any key then the result for that key will be undefined
// console.log(capAmerica.result);
// calling a function key
capAmerica.sayHi();

console.log("object before update:",capAmerica);
// add a new key to the object
capAmerica.Movies = ["Avengers","EndWar","CivilWar"];
console.log("object after add",capAmerica);

// delete a key in the object
delete capAmerica.Movies;
console.log("object after del", capAmerica);

capAmerica.isAvenger = true;
console.log(capAmerica);

capAmerica.Address.State = "New York";
console.log(capAmerica);

// second method to access a key
console.log(capAmerica.Name);
console.log(capAmerica['Name']);