/// js executional context includes
// global executional context
// memory phase in which just memory is allocated but no work is done
// executional phase  in which whole work willbe done
// whenver we call a function in the code then a  "New executional context will be created and later deleted after the work is done"
let val1 = 10 
let val2 = 5
function addNum(num1,num2){
    let total = num1 + num2
    return total
}
let result1 = addNum(val1,val2) // new executional context created
let result2 = addNum(10,2)   // new executional context created
 // in memory phase
 // val1 = undefined
 // val2 = undefined
 // addNum = undefined
 // result1 = undefined
 // result2 = undefined
 //============================= in execution phase ============
 // val1 = 10
 // val2 = 5
 // addNum = new executional context created
 // result1 = 15
 // result2 = new excutonal context created
 