/* array helper methods */

// 1. forEach 
let colors = ['red', 'blue', 'green', 'orange']

for(let index = 0; index<colors.length;index++)
{
   console.log(colors[index]);
   
 }

console.log("-------");


// passing iterator function to forEach method
colors.forEach(function(color){
  console.log(color)
});


let primes = [2, 3, 5, 7, 11, 13]
let sum = 0;
function adder(num){
    sum += num;
}
primes.forEach(adder)
console.log(`The sum of primes is ${sum}`);







//2.map



// 3. filter



//4.find



//5. every


//6. some




//7. reduce

