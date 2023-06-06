"use strict";
function doSomething(info) {
    if (typeof info === "number") {
        console.log(`O número é ${info}`);
        return;
    }
    console.log("Não foi passado um número!");
}
doSomething(6);
doSomething(true);
