const multiply = function(x,y){
    console.log(x*y);
}

const multiplyByTwo = multiply.bind(this,2,5)
multiplyByTwo()
const multiplyByThree = multiply.bind(this,3,5)
multiplyByThree()