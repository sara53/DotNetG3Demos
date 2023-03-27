// btn.onclick = function () {
//   changeStyle("orange");
// };
/**
 *
 * btn.onclick = changeStyle;
 * btn.addEventListener("click", changeStyle);
 */

// var p = document.getElementById("p1");

// function changeStyle(e) {
//   console.log(e.target);
//   p.style.background = " #172646";
//   p.style.color = "#ddd";
// }
//  <p id="p1">
//       Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio quasi animi
//       consequuntur expedita harum doloremque. Minima obcaecati repellat
//       distinctio fugiat dolorem voluptas magni nesciunt perferendis adipisci,
//       numquam dolore explicabo expedita.
//     </p>
//     <button id="btn1" onclick="changeStyle(event)">Click</button>
/**
 * Events
 * -----------------------
 *  1- add attribute on element
 *  2- attach function
 *   == btn.onclick = changeContent;
    ==  btn.onclick = changeStyle;
 *  3- addEventListener
 */
// input1.addEventListener("focus", function (e) {
//   console.log(e.target.value);
//   e.target.style.border = "2px solid blue";
// });
// input1.addEventListener("blur", function (e) {
//   e.target.style.border = "2px solid orange";
// });
// var input1 = document.getElementById("input1");
// var input1 = document.getElementById("input1");
// var errorMessage = document.getElementById("errorMessage");

// input1.addEventListener("input", function (e) {
//   if (e.target.value.length <= 3) {
//     input1.style.border = "2px solid red";
//     errorMessage.style.display = "block";
//   } else {
//     input1.style.border = "2px solid green";
//     errorMessage.style.display = "none";
//   }
// });
// function first() {
//   console.log("first");
// }
// function second(e) {
//   e.stopPropagation();
//   console.log("Second");
// }
// function third(e) {
//   e.stopPropagation();

//   console.log("third");
// }
/** Dom
 * Bom --> Browser Object Model
 *  -- window
 *  -- screen // self study
 *  -- location
 *  -- navigator  // self study
 *  -- history
 */

/** =========== */
// var myWin;
// function openNewTab() {
//   myWin = window.open("about.html", "", "width=200,height=200");
// }
// function closeTab() {
//   myWin.close();
// }
// function moveToTab() {
//   myWin.moveTo(200, 200);
//   myWin.focus();
// }
// function moveByTab() {
//   myWin.moveBy(100, 100);
// }
// function resizeToTab() {
//   myWin.resizeTo(400, 400);
// }
// function resizeBoTab() {
//   myWin.resizeBy(100, 100);
// }

// setTimeout(function () {
//   window.open("about.html");
// }, 2000);
// var result = document.getElementById("result");
// var myInterval;
// function start() {
//   var i = 0;
//   myInterval = setInterval(function () {
//     result.innerHTML = i++;
//   }, 1000);
// }
// function end() {
//   clearInterval(myInterval);
// }
// function startDownload(e) {
//   var result = document.getElementById("result");
//   result.innerHTML = "Link  will appear after 2 seconds";
//   setTimeout(function () {
//     e.target.setAttribute("disabled", "true");
//     e.target.style.opacity = "0.5";
//     result.innerHTML = "<a href='#google'>Google</a>";
//   }, 2000);
// }
