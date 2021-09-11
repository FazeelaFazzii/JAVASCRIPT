//console.log("merged class2 ES6");

//let ranks=[1,2,3];
//console.log(ranks.map((e,index) =>{return(e*100)}));
//let newfilterarr=ranks.filter((e,index) => {
  // console.log(e)
    //if(e%2==0)
      //  return e
//})
//console.log(newfilterarr);
let concert=false;
let attendConcert=new Promise(function(resolve,reject){
    setTimeout(() => {
        if(concert){
            resolve("bob attended function")
        }
        else{
            reject("bob failed to attended function")
        }
    },2000);
});
console.log(attendConcert)
attendConcert.then((data)=>console.log(data)).catch((error));
console.log("i wont wait for anyone");