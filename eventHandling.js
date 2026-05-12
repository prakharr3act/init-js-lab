let inp = document.querySelector("input");
inp.addEventListener("input",function(event){
  if(event.data !== null){
    console.log(event.data);
  }
})