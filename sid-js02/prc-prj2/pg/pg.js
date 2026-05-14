let count = 0;
let intvl = setInterval(function(){
  if(count <= 99){
      let rndNum = Math.floor(Math.random()*2);
      count = count + rndNum;
    document.querySelector(".bar").style.width = `${count}%`;
   document.querySelector(".percent").textContent = `${count}%`;
  }
  else{
   document.querySelector(".percent").textContent = "100%";
   document.querySelector(".bar").style.width = `100%`;
   clearInterval(intvl);
      document.querySelector(".card").style.display = "none";
  }
},30)

