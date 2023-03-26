/** Dom --> document object Model */
// console.log(document);
// events --> 3 ways -->
/** how to select element from document
 * -------------------------------------
 *    == getElementById --> single Element
 *    == querySelector --> single Element
 *    == getElementsByClassName --> collection of Elements
 *    == getElementsByTagName --> collection of Elements
 *    == getElementsByName --> collection of Elements
 *    == querySelectorAll --> collection of Elements
 *  ----------------------------------------------------
 * === document.body
 * ===document.images
 * ===document.links
 * == document.forms
 * ==firstChild
 * ==firstElementChild
 * ==lastChild
 * ==lastChild
 * ==lastElementChild
 * ==children
 * ==childNodes
 */

// var div = document.querySelector(".div1");
// var span = document.querySelector("span");
// console.log(div.children);
// console.log(div.childNodes);
/** inner Text,
 * innerHTML
 * textContent (search)
 * ---------------- value
 */
// var result = document.getElementById("result");
// function changeContent() {
//   var h1 = document.querySelector(".div1 p:first-child");

//   h1.innerHTML = "<h1>welcome From ITI</h1>"; // set
// }

// var input1 = document.getElementById("input1");
// function getValue() {
//   console.log(input1.checked);
// }
/**
 *   p.style.backgroundColor = "#8d6a8b";
  p.style.padding = "10px";
  p.style.margin = "10px";
  
 */
/**
 *  ====== style attribute
 *  ====== className
 *  ==== classList
 */
// function changeStyle() {
//   var p = document.querySelector("#p1");
//   //   p.classList.add("jsClass");
//   //   p.classList.remove("p1");
//   //   p.classList.toggle("jsClass");
// }
/**
 * 
 * 
  var myText1 = document.createTextNode("Welcome From ITI");
  var myText2 = document.createTextNode("Hello Dot net");

  //   p.appendChild(myText1);
  var test = p.appendChild(myText2);

  var result = p.append("Welcome mona", myText1);
  console.log(result);
  console.log(test);
 */
