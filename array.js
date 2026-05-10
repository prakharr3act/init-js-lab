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