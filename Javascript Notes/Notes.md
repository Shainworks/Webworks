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