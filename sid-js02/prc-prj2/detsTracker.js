let h3 = document.querySelector("h3")

window.addEventListener("keydown",function(event){
  if (event.key === " "){
    h3.innerText = `Space`;
  } else {
  h3.innerText = `${event.key}`
  }
})