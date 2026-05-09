// Loops
// 1.For loop =>

// for (start, end, change){
//   //code
// }

// 2.While loop

// start
// while(end){
// //code
// change
// }

// 3. Do While

// let i =0
// do{
//   //code
//   i++;
// }
// while(i<20)


// runs once even if the condition gets wrong

// 4. Break

// for( let i =10; i<20; i++){
//   console.log(i);
//   if(i === 30){
//     break;
//   }
// }


// Q1: Stops at multiple of 7

for( let i=0; i < 100; i++){
  console.log(`System Activate Will In ${i} Seconds`)
  if( i % 7 === 0){
     break;
  }
}