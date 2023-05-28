/**
 * =  Async Code excution in memory
 * = setTimeOut execution in  memory
 * = Promise --> then.. catch --> async Await
 * = fetch
 * ===========================================
 *  == classes in es6 (inhertance)
 *  == Module in Es6
 */

// function first() {
// 	console.log("First");
// 	second();
// 	console.log("End");
// }

// function second() {
// 	setTimeout(() => {
// 		console.log("second");
// 	}, 2000);
// 	console.log("After second Execution");
// }
// first();

// setTimeout(() => {
// 	console.log("first");
// }, 2000);
// setTimeout(() => {
// 	console.log("Second");
// }, 1000);

// console.log("End");
/*var productsId;

setTimeout(() => {
	productsId = [100, 200, 300, 400];
	setTimeout(() => {
		var product = {
			id: productsId[0],
			pName: "sumsung",
			price: "200$",
		};

		setTimeout(() => {
			var price = product.price;
            console.log( price );
            
		}, 500);
	}, 1000);
}, 2000);

*/

// var myPromise = new Promise(function (x, y) {
// 	// x({ id: 1, pName: "sumsung" });
// 	y("Error on getting data");
// });

// myPromise
// 	.then(function (data) {
// 		console.log(data);
// 	})
// 	.catch(function (error) {
// 		console.log(error);
// 	});

/**
 * Pending
 * fulfilled
 * rejected
 *
 */
// function display(myFun) {
// 	myFun(
// 		function () {
// 			console.log("First");
// 		},
// 		function () {
// 			console.log("Second");
// 		}
// 	);
// }

// display(function (x, y) {
// 	x();
// 	y();
// });

// function getProductsId() {
// 	return new Promise(function (x, y) {
// 		var productsId;
// 		setTimeout(() => {
// 			productsId; //= [100, 200, 300, 400];

// 			productsId ? x(productsId) : y("Error on getting ids List");
// 		}, 2000);
// 	});
// }

// function getProduct(productId) {
// 	return new Promise(function (resolve, reject) {
// 		var product = {
// 			id: productId,
// 			pName: "sumsung",
// 			price: "200$",
// 		};
// 		product ? resolve(product) : reject("Error on getting product data");
// 	});
// }

// function getPrice(product) {
// 	return new Promise((resolve, reject) => {
// 		var price = product.price;
// 		price ? resolve(price) : reject("Error on getting Price");
// 	});
// }

// getProductsId()
// 	.then((productsIds) => getProduct(productsIds[0]))
// 	.then((product) => getPrice(product))
// 	.then((price) => console.log(price))
// 	.catch((error) => console.log(error));

// async function execute() {
// 	try {
// 		let productsId = await getProductsId();
// 		let product = await getProduct(productsId[0]);
// 		let price = await getPrice(product);

// 		console.log(price);
// 	} catch (error) {
// 		console.log(error);
// 	}
// }

// execute();

// fetch("https://jsonplaceholder.typicode.com/users")
// 	.then((response) => {
// 		return response.json();
// 	})
// 	.then((data) => {
// 		console.log(data);
// 	})
// 	.catch(() => {});

// async function test() {
// 	let response = await fetch("https://jsonplaceholder.typicode.com/users");
// 	let data = await response.json();
// 	console.log(data);
// }
// test();

// class Product {
// 	#id;
// 	constructor(id = 0, pName = "", price = "") {
// 		this.#id = id;
// 		this.pName = pName;
// 		this.price = price;
// 	}
// 	display() {
// 		console.log(`${this.pName} : ${this.price}`);
// 	}

// 	get getId() {
// 		return this.#id;
// 	}

// 	set setId(value) {
// 		this.#id = value;
// 	}
// }

// var p1 = new Product(1, "iphone", "200");

// for (let key in p1) {
// 	console.log(p1[key]);
// }

// parent class... super class
// class Person {
// 	constructor(fname, lname) {
// 		this.fname = fname;
// 		this.lname = lname;
// 	}
// 	display() {
// 		console.log(`${this.fname} : ${this.lname}`);
// 	}
// }

// // subclass .. child class
// class User extends Person {
// 	constructor(fname, lname, password) {
// 		super(fname, lname);
// 		this.password = password;
// 	}

// 	display() {
// 		// new imple...
// 		console.log("ffff");
// 	}
// }

// let u1 = new User(1, "ali", 123);

// u1.display();
// console.log(u1);

// var fname = "ahmed";
// var age = 20;

// var myKey = "color";

// let person = {
// 	fname,
// 	age,
// 	[myKey]: "red",
// 	display() {
// 		console.log("display");
// 	},
// };

// console.log(person);

// person.display();
/**
 * Object.assign
 * Object.keys
 * Object.Values
 * Object.entries
 */
