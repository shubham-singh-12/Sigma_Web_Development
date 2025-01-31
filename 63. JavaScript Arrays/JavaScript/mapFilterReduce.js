let arr = [1, 3, 5, 7, 11, 13];

// let newArr = [];
// for (let index = 0; index < arr.length; index++) {
//   const element = arr[index];
//   newArr.push(element**2);
// }
// console.log(newArr);  //Output: [1 9 25 49 121 169]



// Using Map Function in Array
let newArr = arr.map((element) => {
  return element ** 2;
})
console.log(newArr);  //Output: [1 9 25 49 121 169]

// We can use element, index, array together in Map Function
let newarr = arr.map((element, index, array) => {
  return element ** 2;
})
console.log(newarr);  //Output: [1, 9, 25, 49, 121, 169]



// Using Filter function in Array
const greaterThanSeven = (element) => {
  if (element > 7) {
    return true
  }
  return false
}
console.log(newArr.filter(greaterThanSeven));  //Output: [9, 25, 49, 121, 169]



// Reduce Method in Array
let arr2 = [1, 2, 3, 4, 5, 6];

const red = (a, b) => {
  return a * b
}

console.log(arr2.reduce(red))