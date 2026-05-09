function changeBill(order){
let deliveryCharge = 51;
let tax = 32;
return order + deliveryCharge + tax;
}

 let runBill = changeBill(512);
 console.log(runBill);


 