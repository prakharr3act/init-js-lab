let marks = [21,42,31,0,1,26,32,3,41,89,98,84,1,2,11,25,69,36,51,78,81,21,3,2,14,15,62,15,]

marks.forEach(function(value){
  console.log(value)
})

// use map only when you want to make a new array
let newArr = marks.map(function(value){
  return 1;
})

console.log(newArr)

//filter

