// Decorators
function BaseParameters() {
  return <T extends { new (...args: any[]): {} }>(constructor: T) => {
    return class extends constructor {
      id = Math.random();
      createdAt = new Date().toString();
    };
  };
}

@BaseParameters()
class Person {
  name;
  constructor(name: string) {
    this.name = name;
  }
}

const sam = new Person("Sam");
console.log(sam);
