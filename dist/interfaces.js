"use strict";
function sumNumbers(num) {
    return num.n1 + num.n2;
}
console.log(sumNumbers({ n1: 6, n2: 4 }));
function multiplyNumbers(num) {
    return num.n1 * num.n2;
}
console.log(multiplyNumbers({ n1: 3, n2: 3 }));
const sumNum = {
    n1: 5,
    n2: 5,
};
console.log(sumNumbers(sumNum));
