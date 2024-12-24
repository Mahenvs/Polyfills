let name1 = {
    firstName :"Mahe ",
    lastName:" U"
}

let printFullName = function(country,msg){
    console.log(this.firstName + " "+ this.lastName+" from "+country+" msg is "+msg);
}
printFullName("india","hello")
let printBind = printFullName.bind(name1," India")
printBind("How are you?")

// Lets write our own bind method
Function.prototype.myBind = function(...args){
    let obj = this
    params = args.slice(1)//the result would be an array
    return function(...args2){
        // obj.call(args[0])
        obj.apply(args[0],[...params,...args2])
         //we are using apply, because params would be an array.
        //  So the apply method takes the second argument as an array, 
        // so we have to use apply method
    }
}

let customBind = printFullName.myBind(name1," India ")
customBind("How are you?")