let div = document.querySelector(".ctn");
window.addEventListener("mousemove",function(event){
 div.style.top = event.clientY + "px";
 div.style.left = event.clientX + "px";
})