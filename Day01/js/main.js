// var first = "mona"; // string
// var num1 = 10.258858; // number
// var flag = true; // boolean
// console.log("==============");

// console.log(typeof fname);
// console.log(typeof num1);
// console.log(typeof flag);
// var fname = "ali";

// fname = "ahmed"; // ressign

// fname = 20;
// fname = true;

// console.log(fname);
// var fname;

// fname = true;
// console.log(typeof fname);
// var product = null;
// product = { id: 1, name: "lapopt" }; // standrad
// product = true;

// console.log(typeof product);
// camelCase
// var fname = 5; // literal creation
// var fname = String(5);
// console.log(typeof fname);
// console.log(fname);

// NaN --> Not a Number
// var num1 = 10;
// var num1 = Number("ali");

// console.log(typeof num1);
// console.log(num1);

// var flag = true;
// var flag = Boolean(-1);
// console.log(flag);
/** falsy values */

/**
 * Datatype in js (Primitve datatype , Refence datatype)
 * ------------------------------------------------------
 * string
 * boolean
 * number
 * null
 * undefined
 * (symbol) in es6
 * ==================================
 * -- redelcare
 * -- can reassign with different datatype
 * ---------------Refence Datatype------------
 * Object
 *
 */
/*** falsy values, truthy values
 * ---------------
 *  false --- 0 --- null -- NaN -- "" -- undefined
 */

// console.log(Boolean(undefined));
// console.log(Boolean(959));
/** Operator
 * -----------------
 *  (+) ==> number + number ==> add
 *  (+) ==> string + string ==> concat
 * ------------------
 * coercion --> jsEngine convert from datatype to anther datatype
 */
// var a = 2; // number
// var b = "Mona"; // string
// console.log(a - b);
/**
 *   (==) --> (values Only)
 *   (===) --> (values & datatype)
 *
 */

// var a = false;
// var b = "false";

// console.log(a === b);
/**
 * &&
 * ----------
 *  true && true --> true
 *  true && false --> false
 *  false && true --> false
 *  false && false --> false
 *
 */
/**
 * ||
 * ----------
 *  true || true --> true
 *  true || false --> true
 *  false || true --> true
 *  false || false --> false
 *
 */
/**
 * Not !
 * true => false
 * false => true
 */

// 1 > 2 || 3 > 1;
// false -->  false

// (3>1) && (1>2)
// true -->   ==

// (3>1) || (1<7)
// true  --> true
// "mona" && "ali";
// true &&  true ==>  true

// 0 && "ali" --> 0
// false   ->
// var b = "red";

// if (b == "red") {
//   console.log("Your fav color is :", "red");
// } else {
//   console.log(" you do not have any fav color ");
// }

// /** ternary Operator */

// b == "red"
//   ? console.log("Your fav color is :", "red")
//   : console.log(" you do not have any fav color ");
// if (color == "red") {
//   console.log("your fav color is ", "red");
// } else if (color == "green") {
//   console.log("your fav color is ", "green");
// } else if (color == "blue") {
//   console.log("your fav color is ", "green");
// } else {
//   console.log("you  do not have any fav color");
// }
// var color = "ggg";

// switch (color) {
//   case "red":
//     console.log("your fav color is ", "red");
//     break;
//   case "green":
//     console.log("your fav color is ", "green");
//     break;
//   case "blue":
//     console.log("your fav color is ", "blue");
//     break;
//   default:
//     console.log("you  do not have any fav color");
// }
// uteration ,, for loop while , do while

// for (var i = 20; i <= 40; i++) {
//   console.log(i);
// }

// console.log("After for loop");

// var i = 0;

// i++;
// console.log(i);
// i++;
// console.log(i);
// var j = 6;

// while (j < 5) {
//   console.log(j);
//   j++;
// }
// console.log("=============");

// var i = 6;
// do {
//   console.log(i);
//   i++;
// } while (i == "yes");
