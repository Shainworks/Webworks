console.log("Here i will be calculating the factorial of a number")

let a = 5;

function factorial(number) {        //This is finding factorial using the reduce method
    let arr = Array.from(Array(number+1).keys())
    let c = arr.slice(1,).reduce((a,b)=>a*b)
    return c
}

console.log(factorial(a))

function facfor(number) {
    let fac = 1
    for (let index = 1; index <= number; index++) {
        const element = number;
        fac = fac*index
    }
    return fac
}

console.log(facfor(a))