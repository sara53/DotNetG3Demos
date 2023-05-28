/**
 * Engenda
 * ------------------------
 *  == let .. var ...const // done
 *  == Destructing // done
 *  == spread operator // done
 *  == rest params // done
 *  == arrow function// Done
 *  == default valus // done
 *  == String API // done
 *  == Array API
 * ----------------------------
 *

// console.log(fname);
// var fname = "mona";
// console.log(fname);

// function display() {
// 	for (var i = 0; i < 3; i++) {
// 		console.log(i);
// 	}
// 	console.log("i outside loop :", i);
// }

// display();

// var fname = "mona";
// console.log(fname);
// console.log(window.fname);

// function display() {
// 	console.log("Hello display");
// }

// display();

// display();
/*
 * var
 *  == reassign
 *  == redeclare
 *  == Hoisting
 *  == function scope
 *  == added to window object
 * ============================
 * let 
 *  == reassign
 *  == can't  redeclare 
 *  == can't hoisting
 *  == block scope
 *  == not added to window
 * ============================
 * const 
 *  == can't  reassign
 *  == can't  redeclare 
 *  == can't hoisting
 *  == block scope
 *  == not added to window
 */

// const PI = 3.14;
// PI = 4.14;
// console.log(fname);
// let fname = "mona";
// console.log(window.fname);
// function display() {
// 	let test = "Ali";
// 	for (let i = 0; i < 3; i++) {
// 		console.log(i);
// 		console.log(test);
// 	}
// }

// display();

// const arr;

// arr =
// arr = [123]; // ra
// arr.push("ali");
// console.log(arr);
/**========================= */

// function useArr(initalValue) {
// 	return [
// 		initalValue,
// 		function () {
// 			console.log("test");
// 		},
// 	];
// }
// let [x, y] = useArr(0);
// y();
// console.log(x);

// let [, , z] = arr;
// let x = arr[0];
// let y = arr[1];
// let z = arr[ 2 ];

// console.log(x);
// console.log(y);
// console.log(z + 10);

// let person = { fname: "mona", lname: "ali", age: 20, products: [10, 20] };

// // syntax suger
// let { products } = person;
// // let {fname:fname, age:age} = person
// // console.log(fname);
// // console.log(age);
// console.log(products);
// let arr1 = [10, 20, 30];

// console.log(Math.max(...arr1));
// let arr2 = [1, 2, 3, ...arr1, "new value"];
// // arr1.push("alaa");

// // for (let i = 0; i < arr1.length; i++) {
// // 	arr2[i] = arr1[i];
// // }

// arr1.push("ali");
// console.log("arr1 : ", arr1);
// console.log("arr2 : ", arr2);

// let person = { fname: "ali", lname: "ahmed" };

// let person2 = { ...person, color: "red" };

// console.log("Person ", person);
// console.log("Person2 ", person2);

// function display(...rest) {
// 	console.log(rest);
// 	// console.log(x + y);
// }

// display(10, 20, 30, "mona", "alaa");
/**
 * ==indexOf
 * == lastIndexOf
 * == CharAt
 * == includes
 * == split
 * == substring
 * == trim
 * == trimgStart
 * == trimEnd
 */
// let str = "Hello from iti";
// let x = ":(";

// console.log(`Hello Dot net ${str} ${x} ${x}`);

// function display(x, y) {
// 	return x + y;
// }

// var display = function (x, y) {
// 	return x + y;
// };
// // arrow function
// var display = (x, y) => {
// 	return x + y;
// };

// let sayHello = (x, y) => "hello";

// var result = sayHello();
// console.log(result);
// this.. window
// let person = {
// 	fname: "Ali",
// 	display: function () {
// 		console.log(this);
// 		console.log(person.fname);
// 	},
// };

// person.display();

// this ... window
// var fname = "Ali";
// function getName() {
// 	console.log(this.fname);
// }

// let person = {
// 	display: getName,
// };

// getName();

// person.display();
// this .. window
// var fname = "Ali";
// let person = {
// 	fname: "ahmed",
// 	display: function () {
// 		// this person
// 		setTimeout(() => {
// 			// window
// 			console.log(this.fname);
// 		}, 2000);
// 	},
// };

// person.display();

// let arr = ["ali", "asamaa", "Asmaa", "asalma"];

// let result = arr.find(function (item, index) {
// 	return item.startsWith("s");
// });

// console.log(result);
// function findElement() {
// 	for (let i = 0; i <= arr.length; i++) {
// 		if (arr[i] > 25) return arr[i];
// 	}

// 	return -1;
// }

// let result = findElement();
// console.log(result);

// function display(x, y, z) {
// 	console.log(x);
//     console.log( y );
//     console.log(z)
// }

// for (let i = 0; i < 3; i++) {
// 	display(arr[i], i, arr);
// 	console.log("=======");
// }

/**
 *  find
 *  findIndex
 *  filter
 *  map
 *  every
 *  some
 *  forech
 *
 */

// let products = [
// 	{
// 		id: 1,
// 		pName: "sumsung",
// 		cat: "elec",
// 	},
// 	{
// 		id: 3,
// 		pName: "Book",
// 		cat: "school",
// 	},
// 	{
// 		id: 2,
// 		pName: "iphone",
// 		cat: "elec",
// 	},
// ];

// let result = products.filter((item) => item.cat != "school");

// console.log(result);

// let itiTracks = ["SD", "OS", "DN", "PD"];

// itiTracks.forEach((item, index) => {
// 	console.log(item, index);
// });
// var result = itiTracks.some((item) => item.startsWith("s"));
// console.log(result);
// let result = itiTracks.map((item, index) => {
// 	return {
// 		id: index + 1,
// 		trackName: item,
// 	};
// });
// console.log(result);
