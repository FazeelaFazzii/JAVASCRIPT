console.log("MERGED CLASS1 ES6")
var arr=[1,2,3,4]

console.log(arr[2]);
var[one,two,three,four,five]=[1,2,3,4];//es6 restructuring
console.log(three);
console.log(five);
console.log(four);
function getscores(){
    return[90,100];
}
let [x,y,z]=getscores();
console.log(x);
console.log(y);
console.log(z);
const obj= {
    name:"faseela",
    email:"faseelavs.faz@gmail.com",
    age:30
}
console.log(obj.email)
let{name,age,email,dum}=obj;
console.log(email)
console.log(dum)
let person={
    firstname:"Faseela",
    lastname:"V S",
    age1:20,
    middlename:"sda",
    

}
let {age1,firstname,lastname,middlename=""}=person;
console.log(age1);
console.log(firstname);
console.log(lastname);
console.log(middlename);

