// Variables


// var a = 5;
// var b = 5;
// var c = "Shubham";

// console.log(a + b);
// console.log(a + b + 8);
// console.log(typeof a, typeof b, typeof c);



// Global Scope
let a = 5;
let b = 5;
let c = "Shubham";

// Block Scope
{
  let a = 55;

  console.log(a);  // Output is 55, because a is in Block scope.  
}

console.log(a); // Output is 5, because a is in Global scope



// Data Types in JavaScript
// let x = 12;
// let y = null;
// let z = true;
// let p = 3.55;
// let q = "Shubham";
// let r = undefined;

// console.log(x, y, z, p, q, r);
// console.log(typeof x, typeof y, typeof z, typeof p, typeof q, typeof r);




// Objects in JavaScript
let details = {
  // Key: "Value"

  "name": "Shubham",
  "Job Role": 5600
}

console.log(details);
console.log(typeof details);