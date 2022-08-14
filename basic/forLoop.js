// LOOP: Task(work) repeat for paticular period/times

// javascript have four loop condtion
// 1) for loop: best for array
// 2) for/of: best for object
// 2) for/in: best for object
// 3) while: best for array
// 4) do while: best for array

// 1) for loop

// syntex
// 1) for keyword
// 2) (statement1 ; statement2 ; statment3) // statment seperated by ; (semi-colon)
// {
// logic /task / work
// }

// ---------------------------------------------------
// i) statement 1 : It is for inisilization OR starting value for loop
// It calles one time only
// let a =5; // inisiilzation
// let b = 6; // inisiilzation
// let anjana = "Anjana"  // inisiilzation

// i++ or i = i + 1 both are equal
for (let a = 1; a < 6; a = a + 1) {
    console.log(a); // block of code
} // end of loop

console.log("---------------------------")
// we can use statment 1 in before loop
let i = 0;
for (; i < 5; i++) {
    console.log(i);
}

//////////////////////////////////////////////////
// ii) statment 2: It is for condtion
// it will check condition each time before excute block of code
// If condition is true then excute block of code otherwise end loop

// condtion: It will gives us true or false
// name == "naveen" // equal to:  both are equal then true otherwise false
// name != "naveen" // Not equal to: both are not equal then true otherwise false
// a < b
// a == b
// z === q 
// 5 > 7
// i < arr.length 

// example
let phoneArr = ["iphone", "samsung", "redmi", "realme", "blackberry"];
// console.log("phone", phoneArr);

let phoneArrLength = phoneArr.length; // to find array length

// i = 0
// i < phoneArrLength
// i = i+ 1

for (let i = 0; i < phoneArrLength; i++) {
    console.log(phoneArr[i]);
}

console.log("----------------------------------------------- not so impotant");

// if do not use statment 2 then we have to write it in black of code with break statment

for (let i = 0; ; i++) {
    if (i >= phoneArrLength) {
        break;
    }
    console.log(phoneArr[i]);
}

// ///////////////////////////////////////////////////////////////
// statmant 3: often use for incremnet inisial/start/inisizilation value

// i = i + 1 // incremnt 1 value
// i++ // increment 1 value
//  i = i + 2 increment 2 value
//  i = i*2

// Examples

for (let i = 1; i < 3; i++) {
    console.log(i);
}

console.log("---------------------------");

// it will increment 2 every time
// 2 table or display even number
for (let i = 2; i < 21; i = i + 2) {
    console.log(i); // 2 4
}

console.log("dispaly odd number");
// display odd number
// i = 
for (let i = 1; i < 21; i = i + 2) {
    console.log(i); // 1
}

// if we do not use statmant 3 then we have to use it inside block of code

// i = -1
for (let i = 0; i > -5;) {
    console.log(i); //0
    i = i - 1;
}

/////////////////////////////////////
// create table for any number

let tableNmuber = 15;

console.log("display " + tableNmuber + "'s table");
// i = 2
for (let i = 1; i <= 10; i++) {
    console.log(tableNmuber * i); // 2 4
}

//1) write loop for 5 to 15
//2) write a function who takes one argument and return even or odd
//3) write a function who takes 3 argument and return largest from them

//4) write a loop for iterate/fetch each for a array (display) 
// arr = Anjana, preeti, Amit, Mistu, billu, Yash
// 
console.log("...................................");

for (let i = 5; i < 16; i = i + 1) {
    console.log(i);
}

console.log(".......................");

let nameArr = ["Anjana", "preeti", "Amit", "Naveen", "Mistu", "Billu"];
// console.log("name", nameArr);

//  console.log("display name from ", nameArr[0]);
//  console.log("display name from ", nameArr[1]);
//  console.log("display name from ", nameArr[2]);
//  console.log("display name from ", nameArr[3]);
//  console.log("display name from ", nameArr[4]);
//  console.log("display name from ", nameArr[5]);

let nameArrLength = nameArr.length;

for (let i = 0; i < nameArrLength; i++) {
    console.log("display name from", nameArr[i]);
}

console.log("...........................");

function maximium(num1, num2, num3) {
    let max = 0;
    if (num1 > num2) {
        if (num1 > num3) {
            max = num1;
        } else {
            max = num3
        }
    } else if (num2 > num3) {
        max = num2;
    } else {
        max = num3;
    }
    return max;
}

console.log(maximium(600, 400, 800));
console.log(maximium(100, 666, 555));
console.log(maximium(290, 260, 95));

console.log("........................");

// display reminder of number
let numerator = 17;
let dinometer = 2;

let res = numerator / dinometer;//whole number

console.log(res);

let reminder = numerator % dinometer; //remindir number

console.log(reminder);
if (reminder == 0) {
    console.log("even");
} else {
    console.log("odd");
}

console.log("..............");

function isEvenOrOdd(number) {
    if (number % 2 == 0) {
        console.log("number is even");
    } else {
        console.log("number is odd");
    }
}

isEvenOrOdd(4);
isEvenOrOdd(41);
isEvenOrOdd(24);

// fetch largest value from sorted array

// sorted array means assending order
         
let numArr = [0, 1, 4, 8, 10, 16]; // sorted

let numArr1 = [5, 1, 10, 23, 16, 90, 4]; // unsorted number
let numArrLength = numArr.length;
console.log("Last index value", numArr[numArrLength - 1]);

let a = 3;
numArr[a];

// how to fetch value from index
arr = [    // index
    1, // 0 
    5, // 1
    9, // 2
    10 // 3
]

console.log("0th index", arr[0]);
console.log("1th index", arr[1]);
console.log("2th index", arr[2]);
console.log("3th index", arr[3]);

// display lastindex
let arrLength = arr.length;
console.log("Value at Last index ", arr[arrLength - 1]);

// ith index value = value

for (let i = 0; i < arrLength; i++) {
    console.log(i + "th index value = ", arr[i])
}

console.log(".....................");

for (let i = 12; i < 121; i = i + 12) {
    console.log(i);
}

console.log("............");
for (let i = 1; i <= 10; i++) {
    console.log(17 * i);
}

console.log("................");


let testArr = [5, 7, 10, 11,  15, 20, 24, 30];

let testArrLength = testArr.length;
console.log("Length of array", testArr.length);

for (let i = 0; i < evenArrLength; i++) {
    console.log(testArr[i]);
}

console.log("even number");
for (let i = 0; i < testArr.length; i++) {
    if (testArr[i] % 2 == 0) {
        console.log(testArr[i]);
    }
}

console.log("odd number");
for (let i = 0; i < testArr.length; i++) {
    if (testArr[i] % 2 !== 0) {
        console.log(testArr[i]);
    }
}
 console.log("fully divisible by 3")

 for (let i = 0; i < testArr.length; i++) {
     if (testArr[i] % 3 == 0) {
         console.log(testArr[i]);
     }
 }
  
 console.log("sum of arr");
 let add = 0; // 0
 let a1 = 5;
 add = add + a1; // 0 + 5= 5
 let a2 = 7;
 add = add + a2; // 5 + 7 = 12
 let a3 = 10;
 add = add + a3; // 12 +10 = 22
 let a4 = 11;
 add = add + a4; //22 + 11 = 33
let a5 = 15;
add = add + a5;
let a6 = 20;
add = add + a6;
let a7 = 24;
add = add + a7;
let a8 = 30;
add = add + a8;
 console.log(add);

 let sum =0;
 for(let i = 0; i <testArr.length; i++) {
    sum = sum +  testArr[i]
 }
 console.log("Array sum ", sum);
// QUESTION########
console.log(".............");



let num = 4;
5 % 2
console.log(num % 2)
let reminder2 = num % 2
if (reminder2 == 0) {
    console.log("even")
}


// multiply of all the numbers in the array
