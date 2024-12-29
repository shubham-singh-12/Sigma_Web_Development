// console.log('Check Working.');


// for loop
// let i;
// for (i = 1; i <= 100; i++) {
//   console.log(i);
// };


// for-in loop
let details = {
  name: 'Shubham',
  role: 'Programmer',
  company: 'React Developer'
};

for (let key in details) {

  // console.log(key);

  let value = details[key];
  console.log(key + ': ' + value);
};


// for-of loop
for (let character of 'SHUBHAM') {
  console.log(character)
}


// while loop
let i = 1;
while (i <= 6) {
  console.log(i);
  i++;
};


// do-while loop
let a = 0;
do {
  console.log(a)
  a++;
} while (a <= 6);