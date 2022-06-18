console.log(" Welcome into condition.... ");

// condition: It gives true or false
//            OR happen or not happen

// example:
// is your age is above 18: yes (true)
// have you passed secondary education (10th): yes
// have you passed your high secondary education (12th): yes
// have you master degree: No (false)

// In javascript we have 4 condition statement
// if
// else
// else if
// switch

// 1) if condition
// syntex or structure
// i) if keyword
// ii) paranthisis () with condition // (condition)
// ii) {
// block of code 
//   logic
// }

// else condtion
// syntex
// i) if(condtion) {
//logic
// }
//ii) else {
// logic 
// }

// examples

// if you are above or equal to 18 then you are eligible for give vote other no;
let age = 55;

if (age >= 18) {
    // logic
    console.log("you are eligible for give vote");
} else {
    console.log("you are not eligible for give vote");
}

// if your password is naveen@123 then it is correct otherwise wrong
// condition: password == 'naveen@123'

let password = "naveen@123";

if (password == "naveen@123") {
    console.log("Hurre!!!! correct password");
} else {
    console.log("opps..., Incorrect passowrd!!! try agin....");
}

// if your email id is anj@12 then it is correct otherwise incorrect
let emailId = "anjaad";
if (emailId == "anj@12") {
    console.log("password correct");
} else {
    console.log("sorry...incorrect password");
}

if (5 > 10) {
    console.log("Correct");
}

// 3) else if: if condition is worong and this condition is correct then it is called
// syntex
// if(condtion) {
// logic
// } 
// else if(condtion) {
// logic
// } else {
// logic
// }

// if you got marks above 70% then you got 1st divition 
// otherwise if you got above 50% then you got 2nd divition
// otherwise you got 3rd divition

let marks = 33;

if (marks >= 70) {
    console.log("First Division");
} else if (marks >= 50) {
    console.log("Second Division");
} else {
    console.log("3rd division");
}

if (marks > 70) {
    console.log("1st Division");
} else {
    if (marks > 50) {
        console.log("2nd Divsion");
    } else {
        console.log("Third Division");
    }
}

// // if you got marks above 70% then you got 1st divition 
// otherwise if you got above 50% then you got 2nd divition
// otherwise if you got avove 33% then you got 3rd divsion
// otherwise you are Fail

let percentage = 80;

if (percentage >= 70) {
    console.log("first division");
} else if (percentage >= 50) {
    console.log("second division");
} else if (percentage >= 33) {
    console.log("third division");
}
else {
    console.log("fail");
}

// create function who return stream (subject chooseer)
// based on 10th class percetnage
// if you got above or equal 80 than return Science
// else if you got above 60 than return Commerce
// else return Arts

function subjectChooser(tenthPercentage) {

    let stream = "";
    if (tenthPercentage >= 80) {
        stream = "Science";
    } else if (tenthPercentage > 60) {
        stream = "Commerce";
    } else {
        stream = "Arts";
    }

    return stream;
}

let studentPer1 = 90;
// function call
let studentStream1 = subjectChooser(studentPer1);
console.log(studentStream1);

console.log(subjectChooser(40));
console.log(subjectChooser(70));

if (15 > 6) {
    console.log("15 > 6");
}

if (60 > 9) {
    console.log("60 > 9");
}

if (6 > 10) {
    console.log("6 > 10");
}

// create a function who calculate according 
// two values and operator return result
// operator: +, -, *, /

// argumetns: 3 : num1, num2, operator
// return: result

function calculator(num1, num2, operator) {
    let result = 0;
    if (operator == "+") {
        result = num1 + num2;
    }
    if (operator == "-") {
        result = num1 - num2;
    }
    if (operator == "*") {
        result = num1 * num2;
    }
    if (operator == "/") {
        result = num1 / num2;
    }

    return result;
}

// called 
console.log(calculator(12, 10, "+"));
console.log(calculator(16, 10, "-"));
console.log(calculator(40, 5, "*"));
console.log(calculator(100, 5, "/"));


// create function who gives recommand phones bases on money

// argumetns: money 
// return phone name

// if money > 100000 then iPhone
// else if money > 60000 then sumsung
// otherwise if money > 40K then one-plus-one
// otherwise if money > 20k then motorola
// else if money > 10k then realme, Redmi
// else standrd phone

function phonechooser(Money) {
    let phoneName = "";
    if (Money >= 100000) {
        phoneName = "iPhone";
    } else if (Money >= 60000) {
        phoneName = "samsung";
    } else if (Money >= 40000) {
        phoneName = "one-pluse-one";
    } else if (Money >= 20000) {
        phoneName = "motorola";
    } else if (Money >= 10000) {
        phoneName = "Redmi,realme";
    } else {
        phoneName = "standred phone"
    }
    return phoneName;
}

console.log(phonechooser(50000));
console.log(phonechooser(150000));
console.log(phonechooser(70000));
console.log(phonechooser(30000));
console.log(phonechooser(11000));
console.log(phonechooser(1000));


// QUESTION OF IF,ELSE##############

function marksChooser(Marks) {
    let marksName = "";
    if (Marks > 90) {
        marksName = "AA";
    }else if (Marks > 80) {
        marksName = "AB";
    }else if (Marks > 70) {
        marksName = "BB";
    }else if (Marks > 60) {
        marksName = "BC";
    }else if (Marks > 50) {
        marksName = "CC";
    }else if (Marks > 40) {
        marksName = "CD";
    }else if (Marks > 30) {
        marksName = "DD";
    }else {
        marksName = "FF";
    }
    return marksName;
}

console.log(marksChooser(100));
console.log(marksChooser(80));
console.log(marksChooser(70));
console.log(marksChooser(60));
console.log(marksChooser(50));
console.log(marksChooser(40));
console.log(marksChooser(45));
console.log(marksChooser(25));
console.log(marksChooser(44));

// QUESTION##########

function getInteger(num1, num2) {
    let max = 0;
    if(num1 > num2) {
        max = num1;
    }else  {
        max = num2;
    }
    return max;
}

let int = getInteger(50, 200);
console.log(int);

console.log(getInteger(600, 100));
console.log(getInteger(500, 100));

// QUESTION#######

function product(num1 , num2 , num3) {
    let mult = num1 * num2 *   num3;
     result = 0;
    if( mult < 0) {
        result = "negitive value";
    }else {
        result = "positive value"; 
    }
    return result;
    }
    
    let result2 = product(10, -5, 3) ;
    console.log(result2);

    console.log(product(2, 4, 9));
    console.log(product(10, 6, 11));



/////////////////////////////////////////////
// #######  SWITCH ###############

// switch: way for conditional statment
// syntex

// 1) switch keyword
// 2) ( exprestion ) // solved equation ( y = 5,  6 > 10, "naveen" )
// 3) {
//  4) case expected_value1 :
// block of code OR logic
//  5) break;

// case expecte_value1:
// code or logic
// break;
// 6) default:
// logic or code
// }


// display pressed number from 0 - 9

let pressedNumber = 12;

switch (pressedNumber) {

    case 0:
        console.log("You pressed zero");
        break;
    case 1:
        console.log("you pressed one");
        break;
    case 2:
        console.log("You pressed Two");
        break;
    case 3:
        console.log("you pressed Three");
        break;
    case 4:
        console.log("You pressed four");
        break;
    case 5:
        console.log("you pressed Five");
        break;
    case 6:
        console.log("You pressed Six");
        break;
    case 7:
        console.log("you pressed Seven");
        break;
    case 8:
        console.log("You pressed Eight");
        break;
    case 9:
        console.log("you pressed Nine");
        break;
    default:
        console.log("opps... Invalid number pressed");
}
pressedNumber = 2;
if(pressedNumber ==1) {
    console.log("you pressed one");
}else if(pressedNumber == 2) {
    console.log("you pressed Two");
}else if(pressedNumber == 3) {
    console.log("you pressed Three");
}else{
    console.log("Invalid");
}

let i =5;
let j =7;

let i1 =5, j1 = 7;