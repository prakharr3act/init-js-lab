let count = 10;
let button = document.querySelector("button");
button.addEventListener("click",function(){
      document.querySelector("div").style.display = "none";
    window.location.reload();

})
let inter = setInterval(function(){
  if(count >= 1 ){
    count--;
      console.log(` You will be logged out in ${count} seconds...`)
  }
 else{
 clearInterval(inter);
    console.log("You have been logged out");
    document.querySelector("div").style.display = "block";
 }
},1000)


let div = document.querySelector("div");
div.addEventListener("click",function(events){
  
})