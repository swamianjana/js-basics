//  data type: which type of variable
//  like: Numaric, charater ,String type, boolean, array, object

// NumaricL: Number(number can be written with or without decimal)
// type of Number
// integer: without deciaml
//  example

let num1 = 1; // integer number
let num2 = 10; // integer number
let rollNo = 04; // integer

// float: with decimal (.)
let marks = 18.67; // float number
let num3 = 198.09095; //float number

let num4 = 165.00 // float number

// character: single value
// example: a-z,0-9, /, ., 
let ch = 'a'; // character
let ch1 = 1; // numeric
let ch2 = '.' // character

// String: combination of two or more character 

let str = "Anjana"; // string
let str1 = "Naveen" // String
let str2 = "123Naveen" // String
let str3 = "12353" // string
let str4 = "Naveen 1232" // string

// typeof operator
// typeof <variable Name>
console.log( " type of num1 ", typeof num1); // number
console.log( " type of num3 ", typeof num3); // number

console.log( " type of ch ", typeof ch); // string

console.log( " type of str1 ", typeof str1); // string

// boolean: true or false
// 5 > 0 = true
// 6 > 0 = true
//  8 < 10 = true
// 10 > 15 = false
//  10 == 20 => false
//  10 >= 10 = true
// 10 > 10 = false

let isStudentPassed = true; // boolean
console.log(" type of is student passed : ", typeof isStudentPassed);

console.log(5 > 0);
console.log(10 >= 10);
console.log(10 > 10);

// Array: combination or set of data types

let student1 = "Anjana";
let student2 = "Naveen";
let student3 = "Amit";
let student4 = "Preeti";
let student5 = "Billu";

console.log(student1);
console.log(student2);
console.log(student3);

// using array
// define using big brackets
//  [] 
// index = 0 - size of array (how many values in array)
// Array index always start from 0
// length of array = values inside array 

let studentArr; // define
console.log("studnet array ",studentArr);
//              0      ,    1,      2,      3,          4
studentArr = ["Anjana", "Naveen", "Amit", "Preeti", "Billu"] // assing values
console.log("studnet array afer assing values ",studentArr);

// size
// get size of array : length
console.log("Length of array", studentArr.length);
console.log("display 3rd index from array ", studentArr[2]);
console.log("display 1rd index from array ", studentArr[0]);
console.log("display 2rd index from array ", studentArr[1]);
console.log("display 4rd index from array ", studentArr[3]);
console.log("display 5rd index from array ", studentArr[4]);
console.log("display 6rd index from array ", studentArr[5]); // index out of bound error

let marksArr = [12, 15, 10, 20, 19]; // define and assign // Array data type
console.log("studnet Marks array ", marksArr); // Array

console.log("display 20 from array ", marksArr[3]);
console.log("display 15 from array ", marksArr[1]);
console.log("display 19 from array ", marksArr[4]);

let checkTypeofMarksArr = typeof marksArr;
console.log("type of marksArr ", checkTypeofMarksArr);

let mixArr = [1, 12.15, "Naveen", true];
console.log(mixArr);

let car;
console.log(typeof car); // undefined

let carArr = ["Hynduai", "Suzuki", "BMW", "Farari", "Audi"];

console.log("Car Array : ",carArr);

// display indivisual cars
console.log("display Hynduai car from ", carArr[0])

// insert or add 
// varaibleName[size of array] = value
// variableName[integer value] // only integer value allowed as index of array

carArr[5] = "Toyeta";
console.log("Display updated cars ", carArr);

carArr[6] = "Tata";
console.log("updaed car array ", carArr);

console.log("display size of car array ", carArr.length);

// update
// Replace BMW with Mercedes
// variableName[replace index] = new value

carArr[2] = "Mercedes";
console.log("After replace BMW with Mercedes ", carArr);

// ############ DELETE / REMOVE ##########
// in-build function means already made function
// pop()
// shift()
// delete operator:
// delete variableName[index]

// 1st way: using delete operator
let isDelete = delete carArr[3];
console.log("Is delte value from array", isDelete);
console.log("updatd Car array ", carArr);

// push(value) = insert / add new value at the end of the array
carArr.push("Kia");
console.log("After push new vlaue in array", carArr);

// pop() : remove/delete last index from array

let deletedValue = carArr.pop();
console.log("Last index delete", deletedValue);
console.log("After remove last element car array", carArr);

// 3rd way : shift()  = remove/ delte starting index from array
// variableName.shift()
deletedValue = carArr.shift();
console.log("starting index delete", deletedValue);
console.log("After remove starting element car array", carArr);


// object: combination of data types 
// key and value pair
// key - unique identity (Roll No)  // must be UNIQUE  // not duplication allow
// value - details ( student details) // duplication allow
// define
// let/var/const variableName = {key1 : value1 , key2 : value2} // object stucture
// let/var/const variableName = [value1, value2] // array stucture

// example
let studnetObj = { // key = integer, value = String
    1 : "Anjana",
    2 : "Naveen",
    3: "Amit", 
    4: "Preeti",
    5 : "Billu"
}

console.log("Display studnet object: ", studnetObj);

// fetch values or get
// variableName.key or variableName[key]

// using dot operator
// studentObj.4; // does not work for integer key
console.log("fetch Billu from studnet object", studnetObj[5]);

// $$$$$$$$$$$$$ CURD $$$$$$$$$$$$$$$$$$
// C= create / add
// U = Update / change
// R = read / fetch / get
// D = Delete / remove

// ##################
// insertion or add 
// ###############
//  1)  using dot operator
// variableName.key = value 

// 2) square bracket
// variableName["key"] = value

// 3) spread operator (...) : copy old values
// variableName = {...variableName, key1: value1, key2 : value2}


// 1) way
// studentObj.6 = "Rahul"; // does not work here due to integer key

// 2 way
studnetObj[6] = "Rahul";
console.log("updated Student Obj ", studnetObj);

// 3rd way
studnetObj = {...studnetObj, 7: "Priya", 8 : "Ram"};
console.log("updated Student Obj ", studnetObj);

// ##########################
// update or change or replace
//  ################
// 1st way  : dot operator
// varaibleName.key = updated value

// 2nd way : using square bracket
// variableName[key] = upated value

// 3rd way : sprade operator
// varabileName = {...variableName, key : updatedValue}

// example
studnetObj[1] = "Anja";
console.log("updae object ", studnetObj);

studnetObj = {...studnetObj, 7 : "Anjali"};
console.log("updaed studnet object ", studnetObj);

// #######################
// Delete element or value
// #######################
// delete varabileName.key or varaibleName[key]

delete studnetObj[1]

console.log("After delete one element ", studnetObj);

let subjectTeacherObj = {  // key = string , value = string
    "ComputerSceince" : "Naveen swami",
    "Hindi" : "Ram",
    "English": "shyam",
    "Javascript" : "Radha",
    "CSS" : "Seeta",
    "HTML" : "Rahul"
}

console.log("studnet teacher object ", subjectTeacherObj);

// fetch or get
console.log("who teach English", subjectTeacherObj.English); // dot operator
let englishTeacher = subjectTeacherObj["English"]; // square breacket

console.log("English Teacher ", englishTeacher);

console.log("Who teach Js ", subjectTeacherObj["Javascript"]);

// insert / add
subjectTeacherObj.pythan = "anjali" // dot operator
console.log("add new subject", subjectTeacherObj);

// square bracket
subjectTeacherObj["science"] = "swami";
console.log("add new sbject", subjectTeacherObj);

// UPDATE#################
subjectTeacherObj["ComputerSceince"] = "Preeti";
console.log("update subject", subjectTeacherObj);

// fetch####################
console.log("who teach css", subjectTeacherObj.CSS);

// deleted###
let deleteValue= subjectTeacherObj["English"];

console.log("deleted value",deleteValue);
let isDeleted =  delete subjectTeacherObj["English"]; // true or false
console.log("after delete english subject", subjectTeacherObj);
console.log("delete value ", isDelete);


