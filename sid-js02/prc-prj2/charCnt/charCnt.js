let span = document.querySelector("span");
let input = document.querySelector("#inp");

input.addEventListener("keydown",function(event){
  let count = 20;
  let result = count - input.value.length;
  span.innerText = `${result}`;
   let specialChars = /[^a-zA-Z0-9 ]/;

  if (specialChars.test(input.value)) {
    span.style.color = "orange";
  }
  else if (result <0 ){
    span.style.color = "red";
  }
  else{
    span.style.color = "white"
  }

})