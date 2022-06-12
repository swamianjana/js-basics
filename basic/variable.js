// varaibles
// var, let, const, use nothing

// var
var a = 5;
console.log(a);

// let
let b = 5
console.log(b);

// const
const c = 5;
console.log(c);

// nothing == var
d = 5;
console.log(d);

// Explain var
// var = variable
// name = identifier
// "Anjana" = value
// data type = string
// var fName = "Anjana"; // decalaration and assign together
var fName; // decalration
console.log( fName);
fName = "Anjana"; // assign
console.log("Name: ", fName);
fName = "Naveen"; // re assing
console.log("Name ", fName);


// explain let
let lName; // value = undefined
console.log("Last name ", lName);
lName = "Kumari"; // value = kumari
console.log("Last name ", lName);
lName = "Swami"; // value =swami
console.log("Last Name ", lName);

// explain const: constant means it Never changes
// const mName; // can't decalaration only
const mName = "Kumar"; // decaration and assign together
console.log("Middle Name", mName);
// mName = "kumari"; // throw error -> can't change value of constant variable
console.log("middle Name", mName);

// let x = 5;
// let y = 6;
// let z = 7;

let x = 5, y = 6, z = 7; // same as above code

// difference 2
// Re-declaring variables;
var carName = "i20"; // value =i20
console.log(carName);
var carName; // re - declare // value = it will take preious value if current value is undefined
console.log("carName ", carName); // i20

var carName = "fortunure"; // re-declare
console.log("Car Name ", carName);

let phone = "Realme";
console.log(phone);
phone= "iPhone"; // re-assing
// let phone; // can't re-decalre
// let phone = "sumsung";
console.log("Phone", phone);

// var drawbacks: we can re-declare
// line no 20
var laptop = "Macbook";

// line no 200
var laptop =  "Dell";
console.log("Laptop ", laptop);

//  for let
let book = "English"; // line no at 50
// line no at 150
book = "Math"
console.log("BooK", book);

// const uses;
// for constant value
const pi = 22/7;
const carTyreSize = 4;
// pi = 44;
console.log(pi); 

var abc = "Anjana"
console.log(abc);

abc = "Swami" // re-assing

console.log(abc);

var abc = "Naveen";
console.log(abc);

// let abc = "Naveen Swani"; // re-decalring // not allowed
console.log(abc);


let xyz = "Person";
console.log(xyz);

// var xyz = "Animal"; // not allowed
// console.log(xyz);


// #######################################

// BLOCK SCOPE

// Block: insid {}

console.log(a);

// variable declare iside this{} cannot asses
// EXAMPLE : 1
// {
//     let x = 5;
// }
// x cannot be used here

// EXAMPLE :2
// {
//     var x = 5;

// }
// x can be used;