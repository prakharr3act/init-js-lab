let count = 10;
let inter = setInterval(function(){
  if(count >= 1 ){
    count--;
      console.log(` You will be logged out in ${count} seconds...`)
  }
 else{
 clearInterval(inter, function(){
 document.querySelector("div").style.display = "initial"
 })
 }
},1000)