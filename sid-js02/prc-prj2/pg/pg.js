let count = 0;
setInterval(function(){
  if(count <= 99){
      let rndNum = Math.floor(Math.random()*3);
      count = count + rndNum;
    document.querySelector(".bar").style.width = `${count}%`;
   document.querySelector(".percent").textContent = `${count}%`;

  }
},100)

