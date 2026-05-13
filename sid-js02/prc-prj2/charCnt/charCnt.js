let span = document.querySelector("span");
let input = document.querySelector("#inp");

input.addEventListener("keydown",function(event){
  let count = 20;
  let result = count - input.value.length;
  span.innerText = `${result}`;
  if(){

  }
  esle if (result <0 ){
    span.style.color = "red";
  }
  else{
    span.style.color = "white"
  }

})