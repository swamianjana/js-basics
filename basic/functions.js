// learn function
// function: block of code which is use for specifc task/work.
//  which is re-usable

// 2 steps
//  1) function inisilization/create 
//  2) call/ invoke  function

// 1) function inisilization
    // i) function keyword uses for create new function
    // ii) function name () // () = paranthisis
    // iii) parameters / arguments inside paranthisis ()
    // iv) function start with  { // start
        //          function code OR Logic or work
        // return somthing
    //  } // function end

// 2) CALL OR INVOKE FUNCTION
// functionName() // zero parameter
// functionName(para1) // single parameter
// functionName(a1, a2) // 2 parameters (seperate by comma ,))

// let's begin with some example

// function qualities
// 1) takes arguments -> number, string, boolean, array, obj.
// 2) return something -> Number ,string, array, boolean, obj.

// zero argument/parameter function
// takes argument = 0 paramenter
// return nothing or null

// work: display Anjana in console
function displayWord() {
    console.log("Anjana");
}

// call or invoke
displayWord();
displayWord();

// single arguments/ parameter
// takes arguments = 1 -> name
// return nothing

// work: display name in console
function dynamicDisplayWord(name) { // name get
    console.log(name);
}

// call
let name1 = "Naveen"; 
dynamicDisplayWord(name1); // name pass
  

// console.log(fullName); // not available

// 2 arguments or parameters
// takes arguments : 2 -> firstName and lastName
// return nothing

// work: concation(add) firstName and lastName and display it
function displayFullName(firstName, lastName) {
    let fullName = firstName + " " + lastName;  // fullName = local variable means it is available only on this(a function k liye) function
    console.log(fullName);
}

// console.log(fullName); // not available

let fName1 = "Anjana";
let lName1 = "Swami";

// call displayFullName to display full name who takes 2 arguments fName and lName
displayFullName(fName1,  lName1);

let fName2 = "Joy";
let lName2 = "Kapoor";

displayFullName(fName2, lName2);

displayFullName("Naveen", "Indoria");

let fName3 = "harry";
let lName3 = "singh";
displayFullName(fName3, lName3);

// 2 arguments 
// takes argumetn = 2 -> num1 (number) and num2 (number)
// return = sum of num1 and num2 // number

// work: get sum of two number
(function getSum(num1, num2) {
    let sum = num1 + num2;
    return sum;

}


 console.log(getSum(50, 70));

console.log(getSum(50, 70));

console.log(getSum(25, 50));
console.log(getSum(40, 40));

// SUBTRACT
function getSub(num1, num2) {
    let sub = num1 - num2;
    return sub;
}
let sub = getSub(50, 20);
console.log(sub);

console.log(getSub(60, 100));

// MULTIPLY
function getmulti(num1, num2) {
let multi = num1 * num2;
return multi;
} 
let multi = getmulti(15, 2);
console.log(multi);

console.log(getmulti(12, 122));

// DIVIDE
function getdiv(num1, num2) {
    let div = num1 / num2;
    return div;
}
let div = getdiv(100, 40);
console.log(div);

console.log(getdiv(40, 4));

function product(str, num) {
let name = str + " " + num;
return name;
}

let result2 = product("swami", 34);
console.log(result2);

let result3 = product("xyz", 50);
console.log(result3);
// dynamicDisplayWord("anjana")

console.log("------------------------");
// how code execute/work

let abc = 5;
// console.log(abc);
function displaySomething(abc) {
    console.log(abc);
}

//  functinoName = displaySomething

// functionName() // with paranthisis it takes as a function 
// otherwise it take as a variable

console.log(displaySomething); // variable

// line no 154 execute after called function
displaySomething(25); // function called
console.log(abc);

function getResult(a, b){
    let res = a + b;
    return res;
}


console.log(getResult); // variable

// line no 169 excute after called function (177)
let result = getResult(4 , 8); // 12
console.log(result);

// 3 parameter

function displayStudentN0(str, num, str1) {
    let name4 = str + " " + num + " " + str1;
    return name4;
}
let result0 = displayStudentN0("hello", 4, "universe") 
console.log(result0);

let result00= displayStudentN0("hii", 4, "tomm") 
console.log(result00);


// PERCETAGE###
function getper(marks, totalNum, per) {
    let percentage= marks / totalNum * per;
    return percentage;
}
let result44 = getper(67, 100, 100);
console.log(result44);

let result11 = getper(200, 500, 100);
console.log(result11);

// Kudos Anjana!!!!

function calculatePercentage(marks, totalNumber) {
  let percentage = (marks / totalNumber) * 100;
  return percentage + "%";
}

console.log(calculatePercentage(250, 500));
console.log(calculatePercentage(400, 450));
