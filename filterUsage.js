const arr = [1,2,3,4]

// filter takes three arguments, 
// first one is the iterative Element, 
// second is index and 
// the last is the array
const result = arr.filter((num,index,res)=>{
    return num % 2 == 0 
})
console.log(result);  //Output is: [2, 4]