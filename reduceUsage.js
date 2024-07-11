const arr = [1,2,3,4]

// The reduce function runs a callback function on all elements in the array
// and aggregates them into a single value
// It takes four arguments, the first one is the accumulator--> which is the latest aggregate value,
// second parameter is the current value in the array which is being iterated and the next two parameters are index and the original array

const result = arr.reduce((acc,current,index,res)=>{
    acc = acc + current 
    console.log("current value is "+ current+" Aggrate value is "+acc);
    return acc
},0)
// You can also pass the initial value, if not the first element is considered to be an initial value

console.log(result);  //Output is: 10