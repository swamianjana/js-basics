
// Given a string and we have to reverse it
// example : anjana -> anajna

// find size of string
// using length keyword same as array

let str = "anjana";
console.log("str length ", str.length);

// find any character 
// we can find any character using charAt predifined function

// sytex
// strVariableName.charAt(index);

console.log("first character ", str.charAt(0));
console.log("second character ", str.charAt(1));
console.log("third character ", str.charAt(2));
console.log("fourth character ", str.charAt(3));
console.log("fifth character ", str.charAt(4));
console.log("Sixth character ", str.charAt(5));

// j + 1 th value str.charAt(i)
for(let j= 0; j < str.length; j++) {
    console.log(j+1 + "st character " , str.charAt(j));
}

// str.charAt(j) == a || str.charAt(j) == e 
// count = count + 1 // count++
console.log("reverse string.....................");
// reverse
// start with last index
 for(let i = str.length - 1; i >= 0; i-- ) {
     console.log(i+1  + "st character", str.charAt(i));
 }

//  we have predinfined method/function in javascript to reverse string
// stringVariableName.reverse();

let reverseString = "";
console.log("reverse string", reverseString);

for(let i = str.length - 1; i >= 0 ; i--) {
    reverseString = reverseString + str.charAt(i);
}

console.log("reverse string", reverseString);

// convert number to string
let num = 12342;
console.log(num + "")
console.log( typeof (num + ""));

//reverse number
let strNum = num.toString();
for(let i = strNum.length-1; i >= 0; i-- ) {
    console.log(i + 1 + "st number", strNum.charAt(i));
}

// 2nd way
// we have method in js for convert from num to str
// numVariableName.toSting()

console.log(num.toString());
console.log(typeof num.toString());

let reverseNumber = "";
console.log("reverse number", reverseNumber);

for(let i = strNum.length - 1; i >= 0; i--) {
    reverseNumber = reverseNumber + strNum.charAt(i); 
}
console.log("reverse Number", reverseNumber);

console.log(strNum == reverseNumber ? "Palindrome" : "Not Palindrome");

// 3 way

let a = 23;
let b = 10;
let div = a /b;
console.log( div);
// we have function to display how many values after decimal
console.log( div.toFixed(3));
console.log( div.toFixed(5));
console.log( div.toFixed(0));

console.log("count random values##########");
// we have predefined method for calculate power
// Math.pow(num, power);


console.log(Math.pow(2, 3));
console.log(Math.pow(5, 2));

console.log("#######################");

console.log(Math.random() * 100);

function genRandom(start, end) {
return (Math.random() * end) + start
} 
console.log(genRandom(1,10));
console.log(genRandom(2,15));

console.log("COUNT VOWEL#####");

function countVowel(str) {
    let vowelCount = 0;
    let consonetCount = 0;
    str = str.toLowerCase();
    for(let i = 0; i < str.length; i++) {
        if(str.charAt(i) == "a" || str.charAt(i) == "e" || str.charAt(i) == "i" || str.charAt(i) == "o" || str.charAt(i) == "u" ) {
            vowelCount++;
        }
        else {
            consonetCount++;
        }
    }
    return {"vowel" :vowelCount, 
        "consonet" : consonetCount};
    // return [vowelCount, consonetCount];
}

let str1 = "Anjana";
console.log("Orignal string "+ str1);
console.log("Lower Case string ",str1.toLowerCase());
console.log("Upper Case string ",str1.toUpperCase());


console.log(countVowel("Anjana"));
console.log(countVowel("Naveen"));
console.log(countVowel("Universe"));

console.log("COUNT LETTER IN STRING##########");

function letterCount(str, character) {
    let count = 0;
    str = str.toLowerCase();
    for(let i = 0; i < str.length; i++ ) {
        if(str.charAt(i) == character) {
            count++;
        }
    } 
    return count;
}
console.log(letterCount("MissUniverse",'i'));
console.log(letterCount("Connect",'t'));


