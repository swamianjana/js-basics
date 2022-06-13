let marksArr;
console.log("marks Array", marksArr);

marksArr = ["10", "12", "19", "50", "60",];
console.log("marksArr after put values", marksArr);

// fetch values case###
console.log("display 19 from marksArr", marksArr[2]);

// add value####
marksArr[5] = "70";
console.log(" display update value", marksArr);

// update###
marksArr[1] = "20";
console.log("after replace 12 with 20",  marksArr);

// deleted###
let isDelete = delete marksArr[4];
console.log("after deleting value", marksArr);


// OBJECT
let studentMarkobj = {
"English" : 50,
"Hindi" : 40,
"Maths" : 20,
"js" : 30,
"Economics" : 49
}

console.log("my object ", studentMarkobj);
// fetch###

console.log("who got marks in Economics", studentMarkobj.Economics);

// Add###
studentMarkobj["Aptitude"] = 45;
console.log(" after adding  new subject", studentMarkobj);

// update###
studentMarkobj["Maths"] = 41;
console.log("after update 20 with 41", studentMarkobj);

// deleted####
let deleteValue= studentMarkobj["Hindi"]
console.log(" delete value", deleteValue );

let isDeleted = delete studentMarkobj["Hindi"]
console.log("after delete hindi", studentMarkobj);


