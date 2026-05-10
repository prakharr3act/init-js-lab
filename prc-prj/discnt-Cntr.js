function discountCounter(discount){
 return function(price){
 return price - price * (discount/100);
 }
}

let ten = discountCounter(10);
let twenty = discountCounter(20);
console.log(ten(200));


