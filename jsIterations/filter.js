// const arr = [ 
//     { name: "Arush", },
//    { name: "Gaurav", }, 
//    { name: "Abhishek", }, 
//    { name: "Ruqayya", },
//     ]; 
//     let namearr = [] 
//    arr.forEach((obj) => {
//     namearr.push(obj.name);
//   });
//   console.log(namearr)
  

  

    const arr = [ 
      { name: "Arush", age: 25 },
      { name: "Gaurav", age: 20 }, 
      { name: "Abhishek", age: 30 }, 
      { name: "Ruqayya", age: 18 },
    ]; 
    let nme = []
    arr.forEach((obj)=>nme.push(obj.name,obj.age))
  
  console.log(nme);
  const filteredArr = arr.filter((obj) => obj.age > 21);
   console.log(filteredArr);

  

  // const arr = [ 
  //   { name: "Arush", age: 26, isActive: true },
  //   { name: "Gaurav", age: 22, isActive: false }, 
  //   { name: "Abhishek", age: 21, isActive: true },
  //   { name: "Ruqayya", age: 19, isActive: false }
  // ]; 
  // let nme = []
  // arr.forEach((obj)=>nme.push(obj.name,obj.age,obj.isActive) )
  // const filteredArr = arr.filter((obj) => obj.isActive === true);
  
  // console.log(filteredArr);
  



