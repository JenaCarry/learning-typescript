"use strict";
function sum(a, b) {
    return a + b;
}
console.log(sum(2, 6));
function sayHelloTo(name) {
    return `Hello ${name}`;
}
console.log(sayHelloTo("Jean"));
function server(msg) {
    console.log(msg);
}
server("Servidor rodando!");
function greeting(name, greet) {
    if (greet) {
        console.log(`${greet} ${name}!`);
        return;
    }
    console.log(name);
}
greeting("Jean");
greeting("Jean", "Hello");
