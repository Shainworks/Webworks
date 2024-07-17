## Variables,Data types and Objects in JS
```js
console.log("Hey this is the first script")
let a = 5;
let b = 6;
let c = "Darshan";
console.log(a+b+34)
console.log(typeof a,typeof b, typeof c)
// var 88a = 23; Nt alowed.....improper way of naming an identifier
{
    let a = 55;
    console.log(a)
}
console.log(a)
// const a1 = 23;
// a1 = a1 + 1;  Not allowed because constant value cannot be changed ....it must only be initialized during the declaration

let x = "Darshan bhai";
let y = 22;
let z = 3.55;
const p = true;
let q = undefined;
let r = null;

console.log(x, y, z, p, q, r)
console.log(typeof x, typeof y, typeof z, typeof p, typeof q, typeof r)


let o = {
    "Darshan": "Darshan",
    "job code": 5600,
    "is_handsome": true
}

console.log(o);
o.salary = "100crores";
console.log(o);
o.salary = "500crores";
console.log(o);
```
## Conditional statements and expressions in JS with practice questions
```js
console.log("Hello this is where i will be learnng Conditinals of JS")

let age = 17
let grace = 2
// console.log(age + grace)   //expressions in JS
// console.log(age - grace)
// console.log(age * grace)
// console.log(age / grace)
// console.log(age ** grace)
// console.log(age %  grace)

if((age+grace)>18){                             //testing assignment operators
    console.log("You are an adult")
}
else{
    console.log("You are still a chiild Dumbo")
}

let age1 = 17
age1+=grace
if(age1>18){
    console.log("You are an adult")
}
else{
    console.log("You are still a chiild Dumbo")
}

let age2 = 16                                       
age2+=grace
if(age2==18){                                        //testing the comparision operators (Equals to)
    console.log("You are an adult") 
}
else{
    console.log("You are still a chiild Dumbo")
}

let age3 = 19                                       
age3+=grace
if(age3!=18){                                        //testing the comparision operators (Not Equals to)
    console.log("You are an adult") 
}
else{
    console.log("You are still a chiild Dumbo")
}


let age4 = 0                                      
if(age4==18){                                        //this is an example of if else if ladder
    console.log("You are an adult") 
}               
else if(age4 == 1){
    console.log("FBI open up")
}
else if(age4 == 0){
    console.log("FBI can't catch him")
}
else{
    console.log("You are still a chiild Dumbo")
}


a=6;
b=8;
let c = a > b ? (a - b) : (b - a)
console.log(c)
/*
The above expression translates to
if(a>b){
let c = a - b;
}
else{
let c = b - a;
}
*/

age7=15;                                 //to test whether a persons age lies in between 10 and 20
let k = age7<20 && age7>10;
console.log(k)
if(k=true){
    console.log("The person lies in the age limit")
}
else{
    console.log("You are still a chiild Dumbo")
}

num=6;                                 //This is to test whether the given number is divisible by both 2 and 3
if(num % 2 ==0 && num % 3==0){
    console.log("The given number is divisible by both 2 and 3")
}
else{
    console.log("The number is not divisible by both 2 and 3")
}

num1=4;
if(num1 % 2 ==0 && num1 % 3==0){
    console.log("The given number is divisible by both 2 and 3")
}
else{
    console.log("The number is not divisible by both 2 and 3")
}

num2=4;//This is to test whether the given number is divisible by either 2 and 3
if(num2 % 2 ==0 || num2 % 3==0){
    console.log("The given number is divisible by both 2 and 3")
}
else{
    console.log("The number is not divisible by both 2 and 3")
}

num3=7;
if(num3 % 2 ==0 || num3 % 3==0){
    console.log("The given number is divisible by both 2 and 3")
}
else{
    console.log("The number is not divisible by both 2 and 3")
}
```