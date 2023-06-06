"use strict";
var Size;
(function (Size) {
    Size["P"] = "Pequeno";
    Size["M"] = "M\u00E9dio";
    Size["G"] = "Grande";
})(Size || (Size = {}));
const camiseta = {
    name: "Camiseta gola V",
    size: Size.P,
};
console.log(camiseta.name, camiseta.size);
