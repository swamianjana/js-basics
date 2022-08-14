
// display number from 1 to 10 using for loop
for(let i = 1; i < 11; i++) {
    console.log(i);
}

// display number from 10 to 1 using for loop


for(let i = 10; i >=1; i= i-1) {
    console.log(i);
}
// factorial

// factorial of n!
// n * (n-1) * (n-2) * (n - 3) + .. . ... + (n - n - 1)

// if n = 1; break

// factorial of 5

// 5 * 4 *  3 * 2 * 1

let factorialNum  = 5;

let factorialNumRes = 5 * (5 -1) * (5 -1 - 1) * (5 - 1 -1 -1) * (5 - 1 -1 -1 -1);
console.log(factorialNumRes);

console.log("FACTORIAL----------------");
function getFactorial(factorialNum) {
    let fact = 1;
    for(let i = factorialNum; i>= 1; i-- ) {
        fact = fact * i;
    }
    return fact;

}

console.log(getFactorial(5));
console.log(getFactorial(6));

console.log("print only even numbers");

function printEven(arr) {
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] % 2 == 0) {
            console.log(arr[i]);
        }
    }
}
let arr = [2, 4, 7,9,11,6,17,10,1,13,3,16,17,77,25,55]
printEven(arr)

// console.log("delete all occerence element");

// function deleteElement(array, element) {
//     for(let i = 0; i < arr.length; i ++) {
//         if[]
//     }
// }

function numPower(num, pow) {
    let result = 1;
    for(let i = 0; i < pow; i++) {
        result = result * num;
    }
    return result;
}
console.log(numPower(5, 3));
console.log(numPower(2, 5));

console.log("%%%%%%%%%%%%%%%%%%%%");

// function digitCount(num) {
//     for(let i = 0; i < )
// }

let a = 123;
// 123 == 321 palindrome otherwise not

let reverseNum = 0;


for(; a > 0 ; ){
    //last digit
    let lastDigit = a % 10;
    reverseNum = reverseNum * 10 + lastDigit;
    a = a / 10;
    a = a.toFixed(0);
    console.log(lastDigit);
    console.log(a);
}



