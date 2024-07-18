let random = Math.random()                          //this faulty calculator calculates wrng number only with the probability of 10% (it kind of depends on the number generated from 0.1 to 1.00) using the math function
let a = prompt("Enter the first number")
let b = prompt("Enter the second number")
let c = prompt("Enter the operator")

let obj = {
    "+":"-",
    "*":"+",
    "-":"/",
    "/":"**",

}

if (random > 0.1) {
    alert(`The result is ${eval(`${a} ${c} ${b}`)}`)
} else {
    c=obj[c];
    alert(`The result is ${eval(`${a} ${c} ${b}`)}`)
}