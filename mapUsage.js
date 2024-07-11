const arr = [1,2,3,4]

// map takes three arguments, 
// first one is the iterative Element, 
// second is index and 
// the last is the array
const result = arr.map((num,index,res)=>{
    return num * 2
});
console.log(result);  //Output is: [2, 4, 6, 8]

// Polyfill