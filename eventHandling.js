// let inp = document.querySelector("input");
// inp.addEventListener("input",function(event){
//   if(event.data !== null){
//     console.log(event.data);
//   }
// })

// change event
// when input or textarea shows any change

let select = document.querySelector("select");
let h3 =  document.querySelector("h3");
select.addEventListener("change",function(event){
h3.textContent = `${event.target.value} is selected`;
})
