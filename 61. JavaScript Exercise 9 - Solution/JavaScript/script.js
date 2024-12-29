// 1. It takes two number as input from the user
let a = prompt("Enter 1st number: ");
let c = prompt("Enter Operation (i.e., +, -, /, *): ");
let b = prompt("Enter 2nd number: ");


// <!-- It performs wrong operations 10% of the time.
let random = (Math.random())*100;
console.log(random);


let obj = {
  "+": "-",
  "*": "+",
  "-": "/",
  "/": "**"
};


// 2. It perform wrong operations as follows:
/*
  + --> -
  * --> +
  - --> /
  / --> **
*/
if (random > 10) {
  // Perform Correct Calculation
  alert(`The result is ${eval(`${a} ${c} ${b}`)}`);

} else {
  // Perform Wrong Calculation
  c = obj[c];
  alert(`The result is ${eval(`${a} ${c} ${b}`)}`);
}