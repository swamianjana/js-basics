// for loop


// continue keyword: for skeep code
// synext
// continue;

for(let i = 0; i < 10; i++) {
    console.log(i);
}

// skeep 5 
console.log("================");
for(let i = 0; i < 10; i++) {
    if(i == 5) {
        continue; // skeep
    }
    console.log(i)
}

console.log("---------------------");
// display alternative index from array
let arr1 = [2, 4, 6, 7, 12, 45, 23];
// alternative: 2, 6, 12, 23

// 1st way 
// increment by 2
for(let i = 0; i < arr1.length; i = i+2){
    console.log(arr1[i]);
}

console.log("2nd way------------");
// check if index is even then display
for(let i = 0; i < arr1.length; i++) {
    if(i % 2 == 0){ // is it even
        console.log(arr1[i]);
    }
}

console.log("3rd way===============");
// if inidex is not even then skip
for(let i = 0; i < arr1.length; i++) {
    if( i % 2 != 0) { // is it odd
        continue;
    }
    console.log(arr1[i]);
}

// BREAK
// after reach at break statement it loop will complete/ finshed  or got the end of block of code
console.log("BREAK================");
for(let i = 1; i <= 10; i++) {
    if(i == 4 ){  
        break; // will go the end of the block(57)
    }
    console.log(i);
} 

console.log("sum of Array");
// arr = [2, 5, 1, 10, 15, 3];

// display sum, average, percantage

// sum = 2.... 3
// average = sum / how many number
// percentage= average * 100

let testArr = [19, 18, 19, 20, 15, 18, 10];

let testArrLength = testArr.length; //7
console.log("Length of array", testArrLength);

let sum =0;
 for(let i = 0; i <testArrLength; i++) {
    console.log(testArr[i]);
    sum = sum +  testArr[i]
 }
 console.log("Array sum ", sum);

 console.log("average of Array");

 
 let average = sum / testArrLength
 console.log("average of array", average)

 let percentage = (sum/ (testArrLength*20))* 100;
 console.log("percentage of array", percentage);

 console.log("-------------------------");

 

    
 
// && , ||
// we can use them when we have more than on condition
//synex

// if(condition 1 || conditon 2) {
//  block of code should be execute/work when 
// at least one of them is/are true 
// }

// if(condition 1 && conditon 2) {
//  block of code should be execute/work when
// both condition are true
// }


console.log("&& or ||");
// && (AND): both condition should be true

if( 4 < 5 && 12 > 15 ) { // true && false = false
    console.log("and Condtion: both condtion are true");
}

if( 4 < 5 || 12 > 15 ) { // true || false = true
    console.log("Or condtion: at least one condtion is/are true");
}

if( 4 > 5 && 12 < 15 ) { // false && true = false
    console.log("And condtion 2");
}

if( 4 > 5 || 12 < 15 ) { // false && true = true
    console.log("Or condtion 2");
}

if( 4 > 5 && 12 > 15 ) { // false && false = false
    console.log("And condtion 3");
}

if( 4 > 5 && 12 > 15 ) { // false && false = false
    console.log("OR condtion 3");
}

if( 4 < 5 && 12 < 15 ) { // true && true = true
    console.log("And condtion 4");
}

if( 4 < 5 && 12 < 15 ) { // true && true = true
    console.log("OR condtion 4");
}

// 4 < 5 && 12 < 15
// AND
if(4 < 5) { // true
    if(12 < 15) { // true
        console.log("And condtion 4");
    }
}

// OR
if(4 < 5) { // true
    console.log("OR condtion 4");
} 
if(12 < 15) { // true
    console.log("OR condtion 4");
}
console.log("++++++++++++++++++++++++++++++++++++");

function findTriangleType(side1, side2, side3) {
    if  (side1 == side2 && side2 == side3) {
     console.log("Equiletral Triangle");
    } else if (side1 == side2 || side2 == side3) {
        console.log("Isosceles Triangle");
    }else {
        console.log("Scalene Triangle");
    }
}

findTriangleType(12,12,12);
findTriangleType(15,15,32);
findTriangleType(20,11,5);

console.log("***************************************");

function checkInRange(num, start, end) {
    if (num >= start &&  num <= end) {
        console.log("num is between start and end value");
    }    else {
        console.log("num is outside range value");
    }             
} 

checkInRange(15,35,50);
checkInRange(15,3,20);
checkInRange(50,20,11);
checkInRange(20,2,30);

console.log("####################################");

function checkLeapYear(year) {
    if (year % 4 == 0 && year % 100 !== 0 || year % 400 == 0) {
     console.log("year is leap");
    }else {
        console.log("year is not leap");
    }
}

checkLeapYear(2022);
checkLeapYear(2011);
checkLeapYear(2000);
checkLeapYear(4000);
checkLeapYear(1995);

console.log("///////////////////////////////////");


function findDaysMonth(month, year) {
    if (month < 1 || month > 12) {
        console.log("Invalid month");
    }else if (month == 2) {
        if (year % 4 == 0 && year % 100 !== 0 || year % 400 == 0) {
            console.log("February is 28 days");
           }else {
            console.log("February is 29 days");
           }
    }else if (month == 4 || month == 6 || month == 9 || month == 11) {
        console.log("30 days") 
    }else {
        console.log("31 days");
    }
}

findDaysMonth(2, 2011);
findDaysMonth(3, 2011);
findDaysMonth(2, 2000);

console.log("==========================");

let arr = [4, 2, 54, 1, 24, 3,7];
for(let index = 0; index < arr.length; index++) {
    console.log("index at ", index);
    console.log("value at "+ index + " = " + arr[index]);
    // index = index
    // value = arr[index]
    // console.log(`index at ${index} = ${arr[index]}`);
}


// 
let length = arr.length; // 6
console.log("last index", length - 1);
console.log("value at last index", arr[length - 1]);

// display largest value from arr


console.log("++++++++++++++++++++++++++++++++");
function rectangleArea(a,b) {
    return a*b
}

console.log(rectangleArea(50,30));

console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
// function reverseNum(num) {
//      reverse = 0;
    
// }

function getPower(num, pow) {
    let multi = 1;
    for (let i = 0; i < pow; i++) {
        multi = multi * num;
    }
    // console.log(multi);
    return multi;
}
console.log(getPower(2, 4));
console.log(getPower(5, 3));
console.log(getPower(5, 2));

console.log("@@@@@@@@@PRINCIPLE VALUE@@@@@@@@@@@@@@@@@@@@");
function simpleInt(principle, rate, time) {
    var amount =principle + principle*time*rate;
    return amount;
}
console.log(simpleInt(50000,15,2));

console.log("%%%%%%%%circleValue%%%%%%%%%%%%%%%%%%%%%%");

function circleValue(radius) {
    let resArr = []; // empty array  
    var area = (22/7 * radius*radius);
    var peri = (2*22/7*radius);
    // resArr.push(area);
    // resArr.push(peri);

    resArr[0] = area;
    resArr[1] = peri;

    return resArr;
    // return [area,peri];
}
console.log("Pi value ",Math.PI);
console.log(circleValue(10));
console.log(circleValue(50));
console.log(circleValue(20));

console.log("COMPOUND INTRREST VALUE###########");

// reverse Array

let arr3 = [1, 2, 3, 4, 5, 10, 8];

console.log("display array........", arr3);
for(let i = 0; i < arr3.length; i++) {
    console.log(i + 1 + "st value" ,arr3[i]);
}

//reverse
console.log("reverse------------------");
for(let i = arr3.length -1; i >= 0; i = i - 1 ){
    console.log( i + 1 +"st value ",arr3[i]);
}


function compoundInt(principle, rate, time, n ) {
    var intrest = principle * (Math.pow((1+(rate / n)), (n * time)))
    return principle + intrest;
}
console.log(compoundInt(20000,5,2,2));
console.log(compoundInt(250,8,4,2));

// 
