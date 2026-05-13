let div = document.querySelector(".ctn");

div.addEventListener("mouseover",function(event) {
  div.style.backgroundColor = "red";
})


div.addEventListener("mouseout",function(event) {
  div.style.backgroundColor = "green";
})