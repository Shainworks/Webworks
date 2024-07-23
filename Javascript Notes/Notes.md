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
## Loops in JS and some practice questions (solved)
```js
console.log("Here i am gonna learn about loops in JS")

let a = 1;
// console.log(a)          //printing numbers manually can take alot of time
// console.log(a+1)
// console.log(a+2)

for (let i = 0; i <100; i++) {      //here the code snippet shows the for loop in js where statement1 i=0 is executed only once and then the 
   console.log(a+i);                    //statement2  checks the condition every time and executes until the condition is true and the sometimes the condition is never false in these conditions the output is generated infinitely, which should'nt be happening
                                        //third statement sees the condition if its true then it increments or decrements based on the given command
}

let obj = {         //this code snippet indicates forinloop where key is an example of "name" and element is an example of "darshan"...loopd through keys of an object,and also elements if necessary
    name:"Darshan",
    role:"Web developer",
    company:"Shainworks"
}

for (const key in obj)  {
    const element = obj[key]; 
    console.log(key,element);
}


for (const key in obj)  {           //for only printing keys in an object
    console.log(key);
}

for (const c of "Darshan") {        //loops through the values of an object...this will be easily understood in thearrays and strings concept
    console.log(c)
}

let u=0;
while (u<6) {       //this is an while loop statenment where it first checks the conditons and then executes the output and then value icrements and the process goes on
    console.log(u);
    u++;
}

let j=10;       //this is an dowhile loop smthg similar to while loop but it prints the initialized value atleast once
do {
    console.log(j);
    j++;
} while (j<6);

let obj1 ={             //prints the marks of a student
    maths:"99",
    physics:"100",
    chemistry:"100"
}
 for (const key in obj1) {
        const element = obj1[key];
        console.log(key,element);
 }


 let guess = 5;         //program to guess a number

 if (guess != 8) {
    console.log("try again")
 } else {
    console.log("You have guessed the number")
 }

 ```
 ## Functions in JS and practice questions (solved)
 ```js
 console.log("Hey darshan here,here is smthg about the functions ")


console.log("Hey this is darshan over here")
console.log("Hey this is darshan over the hill")
console.log("Hey this is darshan over the mountains")
console.log("Hey this is darshan over the clouds")
console.log("Hey this is darshan over plane")

//The block of statments print what we have typed but to change the name in a large scale we use functions...for example

function cool(name) {           //function is basiclly used for rusability...this alone word reuability tells alot things
console.log("Hey this is " + name + " over here")
console.log("Hey this is " + name + " over the hill")
console.log("Hey this is " + name + " over the mountains")
console.log("Hey this is " + name + " over the clouds")
console.log("Hey this is " + name + " over plane")
}

cool("Shain")           //this is function invocation a way to use the code inside a function
cool("Legend")

function sum(a,b) {
    console.log(a+b)
}
sum(10,10)
sum(15,10)
function sum1(a,b,c=3) {
    console.log(a,b,c)
    return a+b+c ;
   
}
result1 = sum1(1)       //this will return nan(not a number) happens when a number is added to undefined
result2 = sum1(1,16)
result3 = sum1(1,14,1)

console.log("The sum of the above number is ",result1)
console.log("The sum of the above number is ",result3)
console.log("The sum of the above number is ",result2)

const func1 = (x) =>{       //this is an arrow function basically used to decalre a function as an variable and use this function variable in the other function (It is a bit complex)
    console.log("I am an arrow fnction",x)
}

func1(23);
func1(45);
func1(67);


function findmean(num1,num2,num3,num4,num5) {       //this is used to find mean of 5 numbers using functions
    const sum =num1+num2+num3+num4+num5;
    const mean = sum/5;
    return mean;
}
mean= findmean(12,23,34,66,76)
console.log("The mean of the 5 numbers is ",mean)
```
## Strings in JS and Practice questions (solved)
```js
console.log("Here i will be learning about strings")
let a = "Darshansh";
let name = "Darshan"
let friend = "Null"
console.log(a[0]);
console.log(a[1]);
console.log(a[2]);
console.log(a[3]);
console.log(a[5]);
console.log(a[6]);
// console.log(a[7]);       //if this is executed then it will show as undefined cuz there is no 7th letter

console.log(a.length)       //gives the number of characters (property)
console.log(a.toUpperCase())        //converts every character to uppercase(function) 
console.log(a.toLowerCase())         //converts every character to lowercase(function) 
console.log(a.slice(2,5))       //prints letters from 2 to 5 (5 not included)
console.log(a.slice(1))         //prints letter from 1 (1 is not included)
console.log(a.replace("sh","77"))       //Replaces the mentioned letters ....if the letters are repeated it only replace the first matched words in the row
console.log(a.concat( name," is a legend"))         //concatenates two mentioned strings and even adds extra words by adding a comma and mentioning in double quotes

let b = "Darshan"
console.log(b.trim())       //removes whitespaces

console.log(b.indexOf("sh"))        //gives the index val;ue of an character
console.log(b.startsWith("Da"))     //checks whether the character is staring from a particular sequence(returns true) 
console.log(b.endsWith("an"))     //checks whether the character is ending from a particular sequence(returns true)

//strings are immutable (They cannot be changed) they can only be altered in certain places

console.log("My name is "+name+" and my friend name is "+friend)    //this is a lengthy process let make it easier by using template lieterls in the next line where we can insert the variables directly in a string using back ticks(This is called string interpolation)

console.log(`My name is ${name} and my friend name is ${friend}`)

console.log(`Hello 'single quote' "double quote"`)      //template literals are also used to insert double and single quote ina string

console.log("Name \"is\" ")     //another way is to use escape sequence character where we can use \ as an prefix to singlr or double quotes     \n-->gives a new line
                 //\t-->gives a tab space
                 //\r-->carriage return even i too don't know what it is



console.log("har\"".length)         //it will print 4


let amount = "Please give me Rs1000"
console.log(amount.slice(17))       //extracing the amount from the string
```
## Arrays in JS and Loops in arrays and also practice questions(solved)
```js
console.log("Today i'm gonna learn about Arrays")
//Arrays can basically hold more than one value and hence having collection of different Data types
let arr = [1,2,3,4,5,6]
// Index   0,1,2,3,4,5
arr[0] = 22      //Arrays are mutable(Original string can be changed) same thing cannot be done with strings cuz they are immutable
console.log(arr, typeof arr)        //returns as an object
console.log(arr.length)
console.log(arr[0])
console.log(arr[1])
console.log(arr[2])
console.log(arr[3])
console.log(arr[4])
console.log(arr[5])
console.log(arr.toString())     //converts an array to string
console.log(arr.join(" and "))     //Interchanges the commas with specified input such as and
 let a = [1,2,3,4,5,6]
 a.pop()        //removes last element from the array and updates the original array
 console.log(a)
 console.log(a.length)
 a.push("darshan")      //adds an element to the end array and updates the original array
 console.log(a)
console.log(a.length)
a.shift()
console.log(a)
a.unshift("Shain")
console.log(a)
delete a[2]         //The index number 2 array has been deleted
console.log(a)      //Displays as empty item in place of 3
console.log(a.length)       //The length is same as the space is allocated for the array but no value is given to it
console.log(a[2])       //returns as undefined cuz there is no value given to the allocated space
   
let a1 = [1,2,3]
let a2 = [4,5,6]
let a3 = [7,8,9]
console.log(a1.concat(a2,a3))       //concatenates three arrays and returns a new array without changing the existing array

let b = [3,2,1,"c","b","a"]
console.log(b)
b.sort()        // This method is used to sort an array alphabetically
console.log(b)      //3,2,1 is sorted to 1,2,3 and c,b,a is sorted to a,b,c
// b.splice(1,2)       //Starting from index 1 it removes two elements
b.splice(1,2,22,33)   //Starting from index 1 it removes two elements and then adds 22 and 33 inplace of those removed values  
console.log(b)
const num = [1,2,3,4]
console.log(num.slice(2))       //starting from number 2 index position values will be taken and a new array will be created
console.log(num.slice(1,3))       //starting from index 1 (included) and ending with index 3(excluded) the values will be taken and a new array will be printed

const n1 = [1,2,3,4,5,6]
n1.reverse()        //Arrays values will be reversed
console.log(n1)


console.log("Now i'll be learning about loops in arrays")

let e = [1,32,4,56,6,99]
// for (let index = 0; index < e.length; index++) {
//     const element = e[index];
//     console.log(element)
// }
e.forEach((value, index, array) => {            //calls a function for each array element where every array element is printed with it's value , index value  and in the array which it exists
    console.log(value, index, array)        
});

let obj = {
    ab:1,
    bb:2,
    cb:3
}
for (const key in obj) {        //this can be used to get the keys from an array
    if (Object.hasOwnProperty.call(obj, key)) {
        const element = obj[key];
        console.log(key , element)
    }
}
for (const value of e) {        //this can be used to get the values from an array
    console.log(value)
}


let newe = []
for (let index = 0; index < e.length; index++) {
    const element = e[index];
    newe.push(element**2)       //helps to create a new array from exixting array by changing properties (there is an easier way to do it by using map function)
}
console.log(newe)

let newnewe = e.map((e)=>{      //map function helps to create new array using the existing array by doing operations on it
    return e**2;
})
console.log(newnewe)

const greaterThanHundred = (e)=>{
    if(e>100){
        return true;
    }
    return false
}
console.log(newe.filter(greaterThanHundred))        //returns values grater than 100

let arr2 = [1,2,3,4,5,6]

const red = (a,b)=>{
    return a*b
}

console.log(arr2.reduce(red))       //reduces an array to a single value bye specifying the property here it will be reduced to 1*2*3*4*5*6 = 720


let numbers = [1,2,3,4,5]           //Lets users to add numbers into this array
let input;

while (true) {
    input = prompt("Enter a number to add into the array and type stop to stop the process")
    if(input.toLowerCase()=='stop'){
        break;
    }


let number = parseFloat(input)      //if the string does not contain a numeral value or if the first character is not a number then it returns nan(not a number)
if (!isNaN(number)) {
    numbers.push(number)
}else{
    console.log("invalid input")
}
}
alert(`The result is ${numbers}`)

let m = [12,70,30,100,2,3]

let divisibleByTen = (e) =>{        //filters numbers which are divisible by 10
    if(e%10 == 0){
        return true
    }
    return false
}
console.log(m.filter(divisibleByTen))

```
## Document object model in JS (Connecting webpage with JS)
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>JavaScript DOM</title>
</head>
<body>
    <div class="container">
        <div class="box">       
            I am a Box
        </div>
    </div>
     <h1>Change Background Color</h1>
    <input type="text" id="colorInput" placeholder="Enter a color or hex code">
    <button onclick="changeBackgroundColor()">Change Color</button>     //changes the color as per the user input
     <h1>Enter a Number</h1>
    <input type="number" id="numberInput" placeholder="Enter a number">
    <button onclick="checkNumber()">Submit</button>             //The page redirects to a google page if the number entered is greater than 4
    <script>
        document.title = "This is Darshan here"
        console.log(document.title)     //DOM represents the page contenet as HTML(basically mapping the entire document as an object)
        console.log(document.body)
        document.body.style.background = "Green"
                function changeBackgroundColor() {
            var color = document.getElementById('colorInput').value;
            document.body.style.backgroundColor = color;
              function checkNumber() {
            var number = document.getElementById('numberInput').value;
            if (number > 4) {
                window.location.href = "https://www.google.com";
            } else {
                alert("The number is not greater than 4.");
            }
        }
    </script>
</body>
</html>
```