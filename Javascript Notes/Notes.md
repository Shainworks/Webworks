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
## Document object model in JS (Connecting webpage with JS) and some practice questions(solved)
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
                }
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
## Acessing Parent,Children and Sibling nodes using DOM
```js
console.log("Here i am gonna learn about DOM children,parent and sibling nodes")
document.body.firstElementChild     //This will give the first element in the body tag which is an elment and will ignore all other text nodes(WIll retuen the first elment inside the body)
document.body.firstElementChild.childNodes          //This will give acess to every nodes inside this including text and comment nodes(will return every single node present in it)
document.body.firstElementChild.children        //This will give acess to nodes which are only the elements (Will only rteurn element nodes)



//There is still alot of ways to acess nodes of an html page using dom.....they need not to be memorized .....we wil get the grip as we code
```
## Acessing elements using ID's , classes and more
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Selecting by id's classes and more</title>
    <style>
        .box{
            height: 34px;
            width: 34px;
            margin: 34px;
            padding: 34px;
            border: 2px solid black;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="box">Lord Darshan1</div>
        <div class="box">Lord Darshan2</div>
        <div class="box"></div>Lord Darshan3</div>
        <div class="box">Lord Darshan4</div>
        <div class="box">Lord Darshan5</div>
        <div id="redbox" class="box">Lord Darshan6</div>
    </div>
    <script>console.log("Here i will be targeting elements in html")
        let boxes = document.getElementsByClassName("box")
        console.log(boxes)
        boxes[2].style.backgroundColor = "Violet"
        document.getElementById("redbox").style.backgroundColor = "red"
        document.querySelector(".box").style.backgroundColor = "Yellow"     //selects the first element whose class name is box
        
        // document.querySelectorAll(".box").style.backgroundColor = "Yellow"       //when we want to select every elmenet with the box as a class name ,,,this property won't help us .....we will have to acess each lement.....But for this command it only returns us the nodes present with an error report
        
        document.querySelectorAll(".box").forEach(e=>{
            e.style.backgroundColor = "green"
        })          //now this for each loop helps us to acess every single elements which is of the class name box
        
        document.getElementsByTagName("div")        //returns every element with the html div tag      
        
        // document.getElementsByName()      //returs element by matching the name attribute
        
        //elem.matches(css) --> To check if the element matches  the given css selectors
        
        //elem.closest(css) --> To look for thenearest ancestor that matches the given selectors (even the elements are also checked)
        
        //elemA.contains(elemB) --> Returns true if element b exists inside element a or returns false</script>
</body>
</html>
```
## Inserting and removing elmenets Using DOM
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Removing and inserting elements using DOM</title>
</head>
<body>
    <div class="container yelloo grein">
        <div class="box">Hey i am a box</div>
        <div id="hide">Hey i ama also a box and i can be hidden in the script</div>
        <div hidden>I am hidden</div>
    </div>
    <script>
        console.log("Here i will be learning about adding and removing elements using Dom Manipulaton");
        let a = document.querySelector(".container").innerHTML      //this inner html over here provides the html tags written inside the container tag
        console.log(a);
        let b = document.querySelector(".box").innerText    //this will provide the text written inside the box element and the follwing syntax document.querySelector(".container").innertext will also provide the same output
        console.log(b);
        let c = document.querySelector(".container").outerHTML  //this is similar to inner html but the difference is that it will also return the container element as well
        console.log(c)
        let d = document.querySelector(".container").tagName        //this will return the tag element name used to create container this can also be obtained from using nodeName but the difference is that node will return comment nodes and ext nodes while tag name element will only retuen element 
        console.log(d);
        let e = document.querySelector(".container").textContent        //this will only return text content inside the element minus all the tags and it also shows the whitespaces
        console.log(e);
      document.getElementById("hide").hidden = true         //hides the particular mentioned element (does not display in browser)

        
    //There are still many attributes method ....study notes for them
    let div = document.createElement("div")
    div.innerHTML = "This is darshan <i>and i added this element using js</i>"
    div.setAttribute("class","JSELEMENT")
    document.querySelector(".container").append(div)
    //There are still many ways to append a elment in the container based on position (refer notes)
    let cont = document.querySelector(".container")
    cont.insertAdjacentHTML("afterbegin","<p>Hey hello ive been created</p>")       //This method is used to insert html elmenets with specific position such as afterbegin,beforebegin,beforeebd and afterend and instead of html we can use text or element
    // document.querySelector(".container").remove()        //this will remove the specified elements from html
    document.querySelector(".container").className      //this will return the calss names given to a element
    document.querySelector(".container").classList.add("darshan")       //this will add an extra class name to the element called darsahn
    document.querySelector(".container").classList.add("king") 
    document.querySelector(".container").classList.remove("king")       //this will remove an extra class name from the element called king
    document.querySelector(".container").classList.toggle("yello")      //this will add the class if this doesn't exist in the element but if it exisits it will remove it
    document.querySelector(".container").classList.contains("darshan")      //checks whether the mentioned class is present in the class list
    </script>
</body> 
</html>
```
## Event handling in JS
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Events in js</title>
</head>
<body>
    <div class="container">
        <div class="box">Hey i am Darshan MS</div>
        <div class="boxes">Hey i am also Darshan MS</div>
    </div>
    <button id="btn">Click me</button>
    <script>
        let button = document.getElementById("btn")
        button.addEventListener("click",(e)=>{
          document.querySelector(".box").innerHTML = "<b>Bro i've been clicked</b>"
        })
        function changeColor(){
            const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16)
           document.querySelector(".boxes").style.color = randomColor
        }
        button.addEventListener("click",changeColor)
        //Much more events related to mouse
//         auxclick
// Fired when a non-primary pointing device button (e.g., any mouse button other than the left button) has been pressed and released on an element.

// click
// Fired when a pointing device button (e.g., a mouse's primary button) is pressed and released on a single element.

// contextmenu
// Fired when the user attempts to open a context menu.

// dblclick
// Fired when a pointing device button (e.g., a mouse's primary button) is clicked twice on a single element.

// DOMActivate Deprecated
// Occurs when an element is activated, for instance, through a mouse click or a keypress.

// DOMMouseScroll Deprecated Non-standard
// Occurs when mouse wheel or similar device is operated and the accumulated scroll amount is over 1 line or 1 page since last event.

// mousedown
// Fired when a pointing device button is pressed on an element.

// mouseenter
// Fired when a pointing device (usually a mouse) is moved over the element that has the listener attached.

// mouseleave
// Fired when the pointer of a pointing device (usually a mouse) is moved out of an element that has the listener attached to it.

// mousemove
// Fired when a pointing device (usually a mouse) is moved while over an element.

// mouseout
// Fired when a pointing device (usually a mouse) is moved off the element to which the listener is attached or off one of its children.

// mouseover
// Fired when a pointing device is moved onto the element to which the listener is attached or onto one of its children.

// mouseup
// Fired when a pointing device button is released on an element.

// mousewheel Deprecated Non-standard
// Fired when a mouse wheel or similar device is operated.

// MozMousePixelScroll Deprecated Non-standard
// Fired when a mouse wheel or similar device is operated.

// webkitmouseforcechanged Non-standard
// Fired each time the amount of pressure changes on the trackpadtouchscreen.

// webkitmouseforcedown Non-standard
// Fired after the mousedown event as soon as sufficient pressure has been applied to qualify as a "force click".

// webkitmouseforcewillbegin Non-standard
// Fired before the mousedown event.

// webkitmouseforceup Non-standard
// Fired after the webkitmouseforcedown event as soon as the pressure has been reduced sufficiently to end the "force click".
//Still there is more of it which can be refered in MDN Docs --> https://developer.mozilla.org/en-US/docs/Web/Events
    </script>
</body>
</html>
```
## Event bubbling, setTimeout() and setInterval() in JS
```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Event Bubbling</title>
</head>
<style>
    .child{
        background-color: aqua;
        border: 2px solid black;
        margin: 14px;
        padding: 14px;
        cursor: pointer;
    }
    .childContainer{
        background-color: rgb(9, 6, 232);
        border: 2px solid black;
        margin: 14px;
        padding: 14px;
        cursor: pointer;
    }
    .container{
        background-color: rgb(224, 243, 20);
        border: 2px solid black;
        margin: 14px;
        padding: 14px;
        cursor: pointer;
    }
</style>
<body>
    <div class="container">
        <div class="childContainer">
            <div  class="child">I am aThe youngest</div>      <!--As the child is nested inside childcontainer and container it will also call those associated events(parent of the child(nested)) when the child event is called this is called event bubbling-->  
        </div>
    </div>
    <script>
        document.querySelector(".child").addEventListener("click", (e) => {
            e.stopPropagation()
            alert("The child was tampered")     //this command will stop event bubbling 
        })
        document.querySelector(".childContainer").addEventListener("click", (e) => {
            e.stopPropagation()
            alert("The childContainer was tampered")
        })
        document.querySelector(".container").addEventListener("click", (e) => {
            e.stopPropagation()
            alert("The container was tampered")
        })
        function changeColor(){
            const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16)
           return randomColor
        }
        setInterval(() => {
            document.querySelector(".container").style.background = changeColor()
            document.querySelector(".childContainer").style.background = changeColor()
        },100);     //does the given task iteratively by taking a given cooldown
        setTimeout(() => {
            document.querySelector(".child").style.background = changeColor()
        }, 1000);       //does the task only once by taking the giveen cooldown interval
        // clearInterval(timerId)         this command will terminate the execution for the specified interval and the same goes for clearTimeout(timerID)
    </script>
</body>
</html>
```
## Callbacks and Promises In JS
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CallBack and Promises</title>
</head>
<body>
    <script>
        console.log("Darsahn is a Legend");
        console.log("Darshan's shadow Clone is also a legend");
        setTimeout(() => {          //here js won't wait for this command for 2 secoonds rather than that it's gonna execute next set of statements
            console.log("I am being executed after 2 seconds")
        }, 2000);           //even if the time delay was set to zero it would have executed at the end
        setTimeout(() => {         
            console.log("Hey i am also being executed after 2 seconds")
        }, 2000)
        console.log("Hey i am not gonna wait for Settimeout cuz JS is Asynchronus in nature")
        const callBack = (arg) => {
          console.log(arg)
        }
        loadScript = (src,callBack) =>{
          let script = document.createElement("script")
          script.src = src
          script.onload = callBack("Darshan")
          document.head.append(script)
        }
        loadScript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js",callBack)
        // I didn't understand shit about callback function but for my luck there is smthg else called promises in js , so we gonna learn that
        console.log("Now we gonna learn about promises");
        let prom1 = new Promise((resolve, reject)=>{
            let a = Math.random()
            if(a>0.5){
                reject("The random color was not generated")
            }
            else{
            setTimeout(() => {
                console.log("Yes i am here")
                resolve("Legend")
            }, 3000);
        }
        }) 
        let prom2 = new Promise((resolve, reject)=>{
            let a = Math.random()
            if(a>0.5){
                reject("The random color was not generated 2")
            }
            else{
            setTimeout(() => {
                console.log("Yes i am here 2")
                resolve("Legend 2")
            }, 3000);
        }
        }) 
        prom1.then((a)=>{
                console.log(a)
        }).catch((b)=>{
                console.log(b)
        })
        let p3 = Promise.all([prom1,prom2])     //returns arrays of values when bothnthe promises are true
        p3.then((c)=>{console.log(c);}).catch((d)=>{console.log(d);})
    </script>
</body>
</html>
```
## Loading a JS file using Promises
```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Event Bubbling</title>
</head>
<style>
    .child{
        background-color: aqua;
        border: 2px solid black;
        margin: 14px;
        padding: 14px;
        cursor: pointer;
    }
    .childContainer{
        background-color: rgb(9, 6, 232);
        border: 2px solid black;
        margin: 14px;
        padding: 14px;
        cursor: pointer;
    }
    .container{
        background-color: rgb(224, 243, 20);
        border: 2px solid black;
        margin: 14px;
        padding: 14px;
        cursor: pointer;
    }
</style>
<body>
    <div class="container">
        <div class="childContainer">
            <div  class="child">I am aThe youngest</div>      <!--As the child is nested inside childcontainer and container it will also call those associated events(parent of the child(nested)) when the child event is called this is called event bubbling-->  
        </div>
    </div>
    <script>
       function loadScript(src) {
        return new Promise ((resolve , reject) => {
            const script  = document.createElement('script')
            script.src = src;
            script.onload = () => resolve(`The following script was loaded : ${src}`)
            script.onerror = () => reject(`There was an error in loading this following script : ${src}`)
            document.head.append(script)
        })
       }
       loadScript('EventBubbling.js')
        Promise.then((result) => {
            alert(result)
        }).catch((err) => {
            alert(err)
        });
    </script>
</body>

</html>
```
## Async, Await and Fetching API's in JS
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>API Fetching in JS</title>
</head>
<body>
    <script>
        function getData(){
            //Basically we are making an simulation for getting data from server which usually takes time so we are delaying it by setting a timer
            return new Promise ((resolve , reject)=>{
                setTimeout(() => {
                    resolve(6969)
                }, 3000);
            })
        }
        console.log("Loading DArsahn")
        console.log("Darshan is taking time to load")
        console.log("Darshan has been loaded");
        let data = getData()
        console.log(data)
        // data.then((result) => {
        //     console.log("Hey i am being executed With these promises");
        //     console.log("YEs it took us like 3s to do so")
        //     console.log(result)
        // })       //This method is used to mimic async and await features but instead of this we are gonna use the original ones .....basically it is nthg but to control the asynchronus process of the JS
        console.log("I was executed Before the Promises")
        async function datas() {
            return new Promise ((resolve,reject)=>{
                setTimeout(() => {
                    resolve(969696969)
                }, 4000);
            })
        }
        async function main() {
        console.log("Loading DArsahn2")
        console.log("Darshan2 is taking time to load")
        console.log("Darshan2 has been loaded");
        let data1 = await datas()
        console.log(data1)
        console.log("Hey i am being executed with this Promise guys")
        }
        main()
        async function api(){
        let x =  await fetch('https://jsonplaceholder.typicode.com/todos/1')
        let data2 = await x.json()
        console.log(data2)
        }
        api()
    </script>
</body>
</html>
```
## Try and catch, throw and Error Handling in JS
```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Error Handling In JS</title>
</head>

<body>
    <script>
        let a = prompt("Enter the first number")
        let b = prompt("Enter the second number")
        let sum = parseInt(a) + parseInt(b)     //when a string is given instead of a number it outputs it as NAN, now instead of it we  want js to throw an error so for that we will do this
        if (isNaN(a) || isNaN(b)) {
            throw SyntaxError("Well enter a number Dumbass")
        }
        // console.log("The sum of the number is ",sum * x);   //Here X is not defined so to handle that we weill use try and catch method where we will remove the error thrown by Js and simply pass a message
        try {
            console.log("The sum of the number is ", sum * x);
        } catch (error) {
            console.log("Well Define the X you DUmbAss")
        }
        async function main() {
            try {
                await new Promise((resolve, reject) => {
                    setTimeout(() => {
                        try {
                            console.log("Thesum is", sum * x)
                            resolve()
                        } catch (error) {
                            reject(error)
                        }
                    }, 1000);
                })
            } catch (error) {
                console.log("Well i am of no use here")     //here catch wont work here because the function is executed when the engine has already left the try and catch construct well this can be avided using async and await and that is what i have done here
            }
        }
        main()
        async function main2() {
            let x = 2;
            try {
                await new Promise((resolve, reject) => {
                    setTimeout(() => {
                        try {
                            console.log("Thesum is", sum * x)
                            resolve()
                        } catch (error) {
                            reject(error)
                        }
                    }, 1000);
                })
                return true
            } catch (error) {
                console.log("Well i am of no use here")     //here catch wont work here because the function is executed when the engine has already left the try and catch construct well this can be avided using async and await and that is what i have done here
                return false
            }
            finally{
                console.log("Ok now all the files will close")
            }       // here finally is used because if there is a return key in the try block it wouldn't have loaded further commands if it were true or false ....so finally is used to give a statement after returning a value
        }
        main2()
        // try {
        //     hey;     //Herer the variable is not defined
        // } catch (error) {
        //     alert(error.name)
        //     alert(error.message)
        //     alert(error.stack)
        // }        //well herer the error object is used to retrieve the specified messages
    </script>
</body>
</html>\
```
## Concepts of OOP'S in JS
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Object oriented Programming  </title>
</head>
<body>
    <script>
        let obj = {
            a:1,
            b:"One"
        }
        console.log(obj)
        let rabbit = {
            jumps:true
        }
        let animal = {
            poops:true
        }
        rabbit.__proto__ = animal       //This adds the additional poops property to the rabbit object has an prototype
        //Basically  it sets rabbit.[[Prototype]]=animal
        //Now ignore the above code cuz we have understood the property inheritence and will now learn to how to use it using classes and object
        class kuchbhi{
            constructor(name){
                this.name = name
                console.log("Object will be created")
            }
            eats(){
                console.log("Ae lowda kana ka rha hai")
            }
            nthg(){
                console.log("Isko kuch nhi aata")
            }
        }
        class boss extends kuchbhi{
            constructor(name){
                super(name)     //this is overriding the construcor where i am inheriting the parameters of kuchbhi and using it
                console.log("Object will be created but will be os Shain's")
            }
            eats(){
                super.eats()        //Now the kuchbhi class objects will also be added here
                console.log("Ae lowda kana ka rha hai aur override kr rha hai")
            }   //Here when i create the same eats then the values will not be taken from kuchbhi this is called method overriding
        }        
        let a = new kuchbhi("Darshan")
        console.log(a)
        let b = new boss("Shain")
        console.log(b)
        //Getters and Setters Used in Js
        class User{
            constructor(name){
                this.name = name    //Now this will invke the setter
            }
            get name (){
                return this._name
            }
            set name(value){
                if(value.length < 4){
                console.log("The given name is too short")
                return;
                }
                this._name = value
            }
        }
        let user = new User("Johnnnn")
        console.log(user.name)
    </script>
</body>
</html>
```
## Advanced JS Topics (End of the Begining)
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <script>
        async function main() {
            return new Promise((resolve,reject)=>{
                setTimeout(() => {
                   resolve("Hello")
                }, 2000);
            })
        }
        async function main2(){
            return new Promise((resolve)=>{
                setTimeout(() => {
                    resolve("world")
                }, 2000);
            })
        }
        (async function iife(){
        let a = await main()
        console.log(a)
        let b = await main2()
        console.log(b)  
        })()
        console.log(a1)
        let [x,y,...rest] = [1,2,4,2,3,4,23,43]
        console.log(x,y,rest)
        const obj = {
            q:34,
            w:34,
            e:3
        }
        const {q,w} = obj
        console.log(q,w)
        let arr = [1,34,45]
        function avg(a,b,c){
            let total = (a+b+c)/3
            return total 
        }
        console.log(avg(arr[0],arr[1],arr[2]))      //this is one of the longest method The shorter one is prescribed below
        console.log(avg(...arr))        //gives the same output has above
        var a1 = 23         //JS only hoists the declarations , not the initializations . The variable will be undefined until the line where it is initialized is reached....and function expressions and class expressions of var's aren't hoisted
        function calculateInterest(principal,rate,time) {
            if (principal && rate && time) {
                const interest = (principal * rate * time) / 100;
                console.log(`The Simple Interest is: ₹${interest}`)
            } else {
              console.log("Please fill out all fields.");
            }
        }
        calculateInterest(2332,23,343)
        calculateInterest(2332,23)
    </script>
</body>
</html>
```