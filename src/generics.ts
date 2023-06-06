// Generics
function showArrayItems<T>(arr: T[]): void {
  arr.forEach((item) => {
    console.log(`Item: ${item}`);
  });
}

const num: number[] = [1, 2, 3];
showArrayItems(num);

const names: string[] = ["Jean", "Lucas", "Pedro"];
showArrayItems(names);
