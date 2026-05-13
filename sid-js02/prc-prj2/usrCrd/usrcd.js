let form = document.querySelector('form');
let inputs = document.querySelectorAll("input");
let name = document.getElementById("name");
let age = document.getElementById("age");
let email = document.getElementById("email");
let profilePic = document.getElementById("profilePic");
let submitBtn = document.getElementById("submitBtn");

form.addEventListener("submit",function(event){
  event.preventDefault();

  let div = document.createElement("div");
  div.setAttribute("class","container")
  div.innerHTML = `
   <img src="${profilePic.value}" alt="Profile Picture" id="profilePic">
    <p id="name">${name.value}</p>
    <p id="age">${age.value}</p>
    <p id="email">${email.value}</p>
  `
  document.querySelector("body").append(div);
  name.value = "";
  age.value = "";
  profilePic.value = "";
  email.value = "";
}) 