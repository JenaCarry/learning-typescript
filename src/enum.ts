// Enum
enum Size {
  P = "Pequeno",
  M = "Médio",
  G = "Grande",
}

const camiseta = {
  name: "Camiseta gola V",
  size: Size.P,
};

console.log(camiseta.name, camiseta.size);
