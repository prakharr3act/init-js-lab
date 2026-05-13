let form = document.querySelector('form');
let inputs = document.querySelector("input");
let name = document.getElementById("name");
let age = document.getElementById("age");
let email = document.getElementById("email");
let profilePic = document.getElementById("profilePic");
let submitBtn = document.getElementById("submitBtn");

form.addEventListener("submit",function(event){
  event.preventDefault();
  let div = document.createElement("div");
  div.setAttribute("class","container")
  document.querySelector("body").append(div);
})