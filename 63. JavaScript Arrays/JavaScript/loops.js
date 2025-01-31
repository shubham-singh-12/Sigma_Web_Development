let a = [1, 93, 5, 6, 88];


// for loop in Array
for (let index = 0; index < a.length; index++) {
  const element = a[index];
  console.log(element);
}
// Output: 
// 1
// 93
// 5
// 6
// 88


// for each loop in Array
a.forEach((value, index, arr) => {
  console.log(value, index, arr)
})


// for-in loop in Array
let obj = {
  a: 1,
  b: 2,
  c: 3
};

for (const key in obj) {
  if (Object.prototype.hasOwnProperty.call(obj, key)) {
    const element = obj[key];
    // console.log(element);  //Output: 1 2 3
    console.log(key, element);  //Output: a 1   b 2   c 3
  }
}


// for-of loop in Array
for (const element of a) {
  console.log(element);  //Output: 1 93 5 6 88
}