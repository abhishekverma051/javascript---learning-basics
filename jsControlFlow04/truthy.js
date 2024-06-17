const userEmail = "a@abhi.com"
// falsy 
//false,0,-0, BigInt0n ,  "",null,undefined,NaN
// truthy
// "0",'false', " ",[],{},function(){}
if (userEmail.length === 0) {
    console.log("array is empty");
}
const emptObj = {}
if (Object.keys(emptObj).length===0 ){
    console.log("object is empty ")

}
// nullish coalescing operator (??): undefined
let val1;
val1 = 5 ?? 10

// terniary operator
// condtion ? true : false
