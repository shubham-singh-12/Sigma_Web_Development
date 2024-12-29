// console.log("Check Console.");

// let age = 45;
let age = 17;


// if Statement + Conditional Statement
if (age == 18) {
  console.log('You can Drive.');
}

// if else statement + Conditional Statement
if (age > 18) {
  console.log('You can Drive.');
}
else {
  console.log('You cannot Drive.');
}

// if-else-if Statement + Conditional Statement
if (age == 18) {
  console.log('You can Drive');
} else if (age >= 18) {
  console.log('You can surely Drive.')
} else {
  console.log('You cannot Drive.')
}

// ternary operator
let drive = age > 16 ? 'You can Drive.' : 'You cannot Drive.';
console.log(drive);