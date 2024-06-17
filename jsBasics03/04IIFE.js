// Immediately Invoked Function Expressions (IIFE)
//sytanx (function will be created inside it)()and the second parenthesis is for execution
// exp
// (function chai(){
//     console.log(`Db connected`)

// })()
// chai()

// we use  iife to reduce the global pollution
// unnammed iife
((name)=>{
    console.log(`DB CONNECTED TWO${name}`);
})(`abhi`)
