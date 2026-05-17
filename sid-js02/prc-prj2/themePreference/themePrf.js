if(window.matchMedia("(prefers-color-scheme: dark)").matches){
  document.body.classList.add("body-dark")
  document.body.classList.remove("body-light")
  localStorage.setItem("theme","body-dark");
}
else{
  document.body.classList.add("body-light")
  document.body.classList.remove("body-dark")
   localStorage.setItem("theme","body-light");
}

document.querySelector(".theme-btn").addEventListener("click",function(){
 if(localStorage.getItem("theme") == "body-dark" || document.body.classList.contains("body-dark")){
  document.body.classList.add("body-light")
   document.body.classList.remove("body-dark")
 }
 else if(localStorage.getItem("theme") == "body-light" ||  document.body.classList.contains("body-light")){
  document.body.classList.add("body-dark")
 document.body.classList.remove("body-light")
 }
});