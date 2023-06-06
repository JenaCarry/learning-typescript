// Literal Type
let immutable: "Valor imutável" | null;
// immutable = "Valor mutável"; => error
immutable = "Valor imutável";
console.log(immutable);

immutable = null;
console.log(immutable);
