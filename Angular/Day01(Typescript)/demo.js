/**
 * vaiables
 * ---------
 *  == Datatypes
 *  == union data type
 * == define custom datatype
 * == object
 * == array
 * == functions
 * == classess
 * == interface
 * == inhertance
 */
/**
 * string
 * number
 * boolean
 * undefined
 * null
 * any
 *
 */
// let fname: x = "mona";
// let lname: x = 10;
// fname = false;
// var arr: string[] = [];
// arr.push("new Value");
// arr.push("ali");
// arr.push(10);
// arr.push(false);
// let products: { id: number; productName: string; price: number }[] = [];
// products.push({ id: 1, productName: "laptop", price: 10 });
// products.push("dd");
/**======== Tuble ========= */
// let result: [string, number] = ["mona", 10];
/**==================== */
// function add(x: number, y: number, ...w: string[]): void {
// 	console.log(w);
// 	console.log("ddd");
// }
// add(1, 2, "mona", "ali");
// add(33, 6);
// add(1);
// add(66, 34);
// add(66, 44);
// class Product {
// 	constructor(public id: number, private prodName: string) {}
// 	get getProductName(): string {
// 		return this.prodName;
// 	}
// 	set setProductName(value) {
// 		this.prodName = value;
// 	}
// }
// class P {
// 	id: number;
// 	prodName: number;
// 	constructor(id: number, pName: string) {
// 		this.id = id;
// 		this.prodName = pName;
// 	}
// }
// let p1 = new Product(1, "sumsung");
// p1.setProductName = "ali";
// console.log(p1.getProductName);
//set
// p1.setProductName("new Value");
// console.log(p1.getProductName());
// p1.prodName = "new Product"; // eroro
// // get
// console.log(p1.prodName);
// interface IProduct {
// 	id: number;
// 	productName: string;
// 	quantity: number;
// 	price: number;
// 	imgURL?: string;
// 	// discount: (rate: number) => number;
// }
// let arr: IProduct[] = [
// 	{ id: 1, price: 200, quantity: 10, productName: "sum" },
// 	{ id: 2, price: 200, quantity: 10, productName: "sum" },
// 	{ id: 3, price: 200, quantity: 10, productName: "sum" },
// ];
// class Product implements IProduct {
// 	constructor(
// 		public id: number,
// 		public productName: string,
// 		public quantity: number,
// 		public price: number
// 	) {}
// 	discount(rate: number): number {
// 		// code
// 		return 3;
// 	}
// }
// var p1 = new Product(1, "sumsung", 10, 400);
// var p2 = new Product(2, "laptop", 60, 44);
// console.log(p1, p2);
// super class
// class Person {
// 	constructor(public id: number, public fname: string) {}
// 	display() {
// 		console.log("Display");
// 	}
// }
// // subclass
// class User extends Person {
// 	constructor(id: number, fname: string, public pass: string) {
// 		super(id, fname);
// 	}
// 	display(): void {
// 		/// new Code
// 		console.log("From Child");
// 	}
// }
// let myUser = new User(1, "ali", "123");
// myUser.display();
// console.log(myUser);
// function show(fname: string, age: number) {
// 	console.log(fname + " : " + age);
// }
// let result: [string, number] = ["mona", 10];
// show(...result);
// show("mona", 10,30,40);
