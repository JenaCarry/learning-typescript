"use strict";
function showArrayItems(arr) {
    arr.forEach((item) => {
        console.log(`Item: ${item}`);
    });
}
const num = [1, 2, 3];
showArrayItems(num);
const names = ["Jean", "Lucas", "Pedro"];
showArrayItems(names);
