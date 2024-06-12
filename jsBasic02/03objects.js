// objects
// object is the blue print of class
// we can declare object by two types:
// ------------------------------by literal
// ------------------------------by constructor
// singleton - when ew make a constructor
// there is no formation of singleton by literal method
//++++++++++++++++++++++ object literal+++++++++++++++++++++++++
const mySym = Symbol("key1")

const jsUser = {
    name:"Abhi", //key amd value
    "full name":"Abhishek Verma",
    [mySym] : "key1",
    age : 21,
    location:"Punjab",
    email: "abhi@github.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday","Saturday"]
}

// object access
// is way -- console.log(jsUser.age)
//second way
console.log(jsUser["email"])
console.log(jsUser["full name"])
console.log(typeof jsUser[mySym])

// update in object
jsUser.email = "abhi@code.com"
console.log(jsUser.email)
//Object.freeze(jsUser)

// function
jsUser.greeting = function(){
    console.log("hello js user");
}
//console.log(jsUser.greeting());

// *************************** singleton - by constructor****************
//const tinderUser = new Object()
const tinderUser = {}
tinderUser.id = "5439BCS"
tinderUser.name="Abhi"
tinderUser.isLoggedIn=false
//console.log(tinderUser)
const regularUser = {
    email:"abc@ecp.com",
    fullname: {
        userFullname: {
            firstname: "abhi",
            lastname: "verma"
        }
    }
}
console.log(regularUser.fullname.userFullname.lastname);

// object concatenation
const obj1 = {1:"a",2:"b"}
const obj2 = {3:"c",4:"d"}

//const obj3 = {obj1,obj2}
const obj3 = Object.assign(obj1,obj2)
const obj4 = Object.assign({},obj1,obj2)

console.log(obj3);

const users =[
    {
        id:1,
        email:"a@gmail.com"
    },
    {
        id:2,
        email:"b@gmail.com"
    },
    {
        id:3,
        email:"c@gmail.com"
    },
    {
        id:4,
        email:"d@gmail.com"
    },
    {
        id:5,
        email:"e@gmail.com"
    }
]
// loop for array
users[1].email
console.log(tinderUser);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'));

/// destructuring a object
const course = {
    coursename: "js with abhi",
    price : "999",
    courseInstructor: "abhi"
}
const {courseInstructor} =course //  equals to course.courseInstructor
// we just need to write courseInstructor to call this object
console.log(courseInstructor); 

// or
const {courseInstructor: instructor}=course
console.log(instructor);