let inp = document.querySelector("input");
let p = document.querySelector("p");
inp.style.display = "none";

p.addEventListener("click", function(){
  inp.click();
})

inp.addEventListener("change",function(event){
 let fileName = event.target.files[0].name;
 p.innerText = `${fileName}`
})