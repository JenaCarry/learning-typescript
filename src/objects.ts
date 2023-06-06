// Array
const myNumbers: number[] = [1, 2, 3]; // for arrays
myNumbers.push(4);
console.log(myNumbers);

// Tuplas
let myTuple: [string, number, boolean];
myTuple = ["Jean", 24, true];
// myTuple = [24, false, "Jean"]; => error
console.log(myTuple);

// Object Literals => { key: value }
const user: { name: string; age: number } = {
  name: "Jean",
  age: 24,
};
// user.name = 28; => error
console.log(user.name);
