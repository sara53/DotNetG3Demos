// function getAllusers() {
//   var tableBody = document.getElementById("tableBody");
//   var xhr = new XMLHttpRequest();

//   xhr.onreadystatechange = function () {
//     if (xhr.readyState == 4) {
//       if (xhr.status == 200) {
//         var response = xhr.response;
//         var data = JSON.parse(response);
//         var tr = document.createElement("tr");
//         var td1 = createTableBody();
//         var td2 = createTableBody();
//         var td3 = createTableBody();
//         var td4 = createTableBody();

//         td1.innerHTML = data.id;
//         td2.innerHTML = data.name;
//         td3.innerHTML = data.username;
//         td4.innerHTML = data.email;

//         tr.append(td1, td2, td3, td4);
//         tableBody.append(tr);
//       }
//     }
//   };

//   xhr.open("GET", "https://jsonplaceholder.typicode.com/users/2");
//   xhr.send("");
// }

// function createTableBody() {
//   var td = document.createElement("td");
//   return td;
// }

// /** Object.keys  */

/**
 * 
 *  <button onclick="getAllusers()">Get All Users</button>
    <table border="1">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Username</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody id="tableBody"></tbody>
    </table>
 */
//get
// console.log(document.cookie);
// set

// var btn = document.getElementById("btn1");

// var expireDate = new Date();

// expireDate.setDate(expireDate.getDate() + 3);

// var myDate = new Date();
// myDate.setDate(myDate.getDate() - 1);

// document.cookie = "username=ali;expires=" + myDate;
// // document.cookie = "email=a.acom";
// // document.cookie = "username=mona";

// btn.addEventListener("click", function () {
//   var inputValue = document.getElementById("input1").value;
//   saveCookie("email", inputValue);
// });

// function saveCookie(key, value) {
//   document.cookie = key + "=" + value + ";expires=" + expireDate;
// }
// function getCookie(key) {
//   document.cookie;
// }
// function getAllCookies() {}

/**
 * saveCookie
 * getAllCooki
 * getCookie
 * clearCookie
 * hasCookie
 */
