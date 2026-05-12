let inp = document.querySelector("input");
let p = document.querySelector("p");
inp.style.display = "none";

p.addEventListener("click", function(){
  inp.click();
})

inp.addEventListener("change",function(event){
   const file = event.target.files[0];
  if (file){
 p.innerText = `${file.name}`
  }

})