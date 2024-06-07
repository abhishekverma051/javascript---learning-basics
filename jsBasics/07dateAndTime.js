// Dates

let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toISOString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toDateString());
// console.log(myDate.toJSON());
// console.log(typeof myDate); //date is a object
let myCreatedDate = new Date(2023,12,23)
console.log(myCreatedDate.toString());

// Months starts from 0 in java script like 0 to 11
let myCreatedDate1 = new Date("01-14-2024")
console.log(myCreatedDate1)

let myTimeStamp = Date.now()
console.log(myTimeStamp);
console.log(myCreatedDate.getTime());


let newDate = new Date("07-06-2024")

// `${newdate.getday()}and the time`
newDate.toLocaleString('default',{
    weekday:"long",
    timeZone:''
})


