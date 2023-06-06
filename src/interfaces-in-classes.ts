// Interfaces em Classes
interface IVehicle {
  brand: string;
  showBrand(): void;
}

class Car implements IVehicle {
  brand;
  wheels;
  constructor(brand: string, wheels: number) {
    this.brand = brand;
    this.wheels = wheels;
  }
  showBrand(): void {
    console.log(`A marca do carro é ${this.brand}.`);
  }
}

const fusca = new Car("VW", 4);
console.log(fusca);
fusca.showBrand();

// Inheritance => Herança
class SuperCar extends Car {
  engine;
  constructor(brand: string, wheels: number, engine: number) {
    super(brand, wheels);
    this.engine = engine;
  }
}

const a4 = new SuperCar("Audi", 4, 2.0);
console.log(a4);
console.log(a4.engine);
a4.showBrand();
