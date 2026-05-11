let marks = [21,42,31,0,1,26,32,3,41,89,98,84,1,2,11,25,69,36,51,78,81,21,3,2,14,15,62,15,]

// marks.forEach(function(value){
//   console.log(value)
// })

// use map only when you want to make a new array
// let newArr = marks.map(function(value){
//   return 1;
// })

// console.log(newArr)

//filter
// makes new array and passes the value to it if it is true

let filterArr = marks.filter(function(val){
if (val > 33){
  return true;
}
})

console.log(filterArr);


//reduce  
// makes a single array ??

let marksSum = marks.reduce(function(accumalator, value){
  return accumalator + value;
},0)

console.log(marksSum)

//find 
// find the first element if detected
let data = [
  {id:985, key:'joesph'},
  {id:731, key:2},
  {id:103, key:'joesph'},
]
let findFnc = data.find(function(val){
 return val.key === 'joesph';
})

console.log(findFnc);


// some

let resultSome = marks.some(function(value){
  return value > 90;
})

console.log(resultSome);

// every

let resultEvy = marks.every(function(value){
  return value > 33;
})

console.log(resultEvy);

// destructuring

let age = [10,21,10,30,6,40,80,90,50,4,10,20,30,5,50,60,]
let [a,b,c,,e] = age;
console.log(a,b,c,e);