// const brr = [ 2,3,4,5,6]
// for (const num of brr) {
//    console.log(num)
// }

// const greet = "HElllo world "
// for (const greet2 of greet) {
//     console.log(`the ech element of greetings is : ${ greet2}` );
// }
const map = new Map()
map.set('IN','INDIA')
map.set('US','USA')
map.set('UK','UNITED KINGDOM')
 console.log(map)
 for (const [key,value] of map) { // if we wnt key or vlue elements differently theb we use this 
    console.log(key)
 }