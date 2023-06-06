// Functions
function sum(a: number, b: number): number {
  return a + b;
}

// console.log(sum("2", "6")); => error
console.log(sum(2, 6));

function sayHelloTo(name: string): string {
  return `Hello ${name}`;
}

console.log(sayHelloTo("Jean"));

// Funções sem retorno
function server(msg: string): void {
  console.log(msg);
}

server("Servidor rodando!");

// "?" Parâmetro opcional
function greeting(name: string, greet?: string): void {
  if (greet) {
    console.log(`${greet} ${name}!`);
    return;
  }
  console.log(name);
}

greeting("Jean");
greeting("Jean", "Hello");
