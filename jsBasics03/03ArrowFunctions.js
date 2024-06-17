 // this keyword refersto the current context
 const user = {
    username: "abhi",
    price: 999,
    welcomeMessage: function(){
        console.log(`${this.username},welcome to website`); // here "this"keyword will refer to the current context where username isdecalerd in the sxope

    }

 }
 user.welcomeMessage()
 user.username= "sam"

 user.welcomeMessage()

 const chai = function(){
    let username="abhi"
    console.log(this.username);
 }
 chai()

 /// another method of writing above funcion according to arrow function
 const chai1 = () =>{
    let username = "abhi"
    console.log(this);
 }
 chai1()

 //parameters in arrow function
 const addTwo =  (num1,num2) =>{
    return num1 + num2  //explicit return
 }
 console.log(addTwo(1,2));

 ///  or
 //  by implicit return
 //if we use curly braces then we have to give return type
 //if we use parenthesis then we donot have togive return type
 const addTwo1 = (num1,num2) =>  num1 + num2 
 