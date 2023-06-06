// Interfaces
interface MathFunctionParams {
  n1: number;
  n2: number;
}

function sumNumbers(num: MathFunctionParams): number {
  return num.n1 + num.n2;
}

console.log(sumNumbers({ n1: 6, n2: 4 }));

function multiplyNumbers(num: MathFunctionParams): number {
  return num.n1 * num.n2;
}

console.log(multiplyNumbers({ n1: 3, n2: 3 }));

const sumNum: MathFunctionParams = {
  n1: 5,
  n2: 5,
};

console.log(sumNumbers(sumNum));
