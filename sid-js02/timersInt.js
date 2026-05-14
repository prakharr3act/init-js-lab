let count = 10;
let inter = setInterval(function(){
  if(count >= 1 ){
    count--;
      console.log(count)
  }
 else{
 clearInterval(inter)
 }
},1000)