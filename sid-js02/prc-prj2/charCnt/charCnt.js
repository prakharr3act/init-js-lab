let span = document.querySelector("span");
let input = document.querySelector("#inp");
let h2 = document.querySelector("h2");

input.addEventListener("keydown",function(event){
  let count = 20;
  let result = count - input.value.length;
  span.innerText = `${result}`;
   let specialChars = /[^a-zA-Z0-9 ]/;

  if (specialChars.test(input.value)) {
    span.style.color = "orange";
    h2.innerText = "You can't use special characters!!"
  }
  else if (result <0 ){
    span.style.color = "red";
    h2.innerText = ""
  }
  else{
    span.style.color = "white"
    h2.innerText = ""
  }

})