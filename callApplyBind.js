let name2={
    firstName:"mahe",
    lastName:" U",
    
}
let printName =function (hometown){
 console.log(this.firstName + " "+" "+this.lastName+"stays in "+hometown);
};
let name1={
    firstName:"va",
    lastName:" S",
    
}
// Function borrowing
printName.call(name2,"Sydney")
// Apply and call are same, except the apply method parameters has to be passed as an list/array
printName.apply(name2,["Sydney"])
// Bind and call are same, except the bind method cannot be invoked immediately
// it creates a copy of the function first then can be invoked later
let printBind = printName.bind(name2,"Sydney")
printBind() //This prints the exact same function output now