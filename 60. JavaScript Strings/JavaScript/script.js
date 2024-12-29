// console.log("Check Console...");

let a = "Shubham";
// console.log(a);

// Access Particular character from a String
console.log(a[0]);  // Output: S
console.log(a[1]);  // Output: h
console.log(a[2]);  // Output: u
console.log(a[3]);  // Output: b
console.log(a[4]);  // Output: h
console.log(a[5]);  // Output: a
console.log(a[6]);  // Output: m
console.log(a[7]);  // Output: undefined


// Find String length
console.log(a.length);  // Output: 7


// Template Literals
let name = "Shubham";
let friend = "xyz";

// Without template literals
console.log("His name is " + name + " and his friends name is " + friend);  // Output: His name is Shubham and his friend name is xyz

// With template literals
console.log(`His name is ${name} and his friends name is ${friend}.`);  // Output: His name is Shubham and his friends name is xyz.


// Convert to UpperCase
let b = "Shivam";
console.log(b.toUpperCase());  // Output: SHIVAM


// Convert to lowerCase
console.log(b.toLowerCase());  // Output: shivam


// Slice method
console.log(b.slice(2, 4));  // Output: iv
console.log(b.slice(1, 5));  // Output: hiva
console.log(b.slice(1));  // Output: hivam


// Replace Method
console.log(b.replace("Sh", "77"));  // Output: 77ivam


// Concat Strings
console.log(b.concat(a));  // Output: ShivamShubham
console.log(b.concat(a, "Shiva"));  // Output: ShivamShubhamShiva
console.log(b.concat(a, "Shiva", "Rahul", "Priya"));  // Output: ShivamShubhamShivaRahulPriya