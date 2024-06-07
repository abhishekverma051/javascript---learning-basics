//array
// arrays a data structure consisting of a collection of elements 
//(values or variables), of same memory size, 
//each identified by at least one array index or key.
//the indexing starts from 0 to n-1
// where n is the number of elements in the array
// array uses square brackets []
// arrays in JS are resizeable

const myArr = [0,1,2,3,4,5]
// array indexing
//console.log(myArr[0]);
// array methods
// myArr.push(6)
// myArr.push(7)
// myArr.pop()
//myArr.unshift(0) // add elememts at the index 0
////console.log(myArr.includes(9)) //Determines whether an array includes a certain element,
// returning true or false as appropriate.
//console.log(myArr.indexOf(3));

// slice and splice
const myn1 = myArr.slice(1,3)
console.log(myn1);
console.log("B",myArr);

const myn2 = myArr.splice(1,3)
console.log(myn2);
//