// standard array
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
console.log(arr); // [1, 2, 3]

arr[20]= 21;
console.log(arr)

//push adds at the end
arr.push(22);
console.log(arr)

//pop reomves the last element
arr.pop();
console.log(arr)

//shift removes first element
arr.shift()
console.log(arr)

//unshift add at the first
arr.unshift(0);
console.log(arr)

//splice removes from btw 
// arr.splice(starting position, number of elements to be remove)
arr.splice(20,2);
console.log(arr)

//slice makes new copy and add value
// arr.slice(start, end);
let newArr = arr.slice(0,20);
newArr.push("newArray")
console.log(newArr);


//reverse
arr.reverse()
console.log(arr)

//sort 
// this syntax works but not considered good
let marks = [21,42,31,0,1,26,32,3,41,89,98,84,1,2,11,25,69,36,51,78,81,21,3,2,14,15,62,15,]
marks.sort()
console.log(marks)


// ascending order
let ao = marks.sort(function(a,b){
  return a-b;
});
console.log(ao)


//descending order

let Do = marks.sort(function(a,b){
  return b-a;
});
console.log(Do);

