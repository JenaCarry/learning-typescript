// Any => evitar o uso
let anyType: any = 0;
anyType = "Hello";
anyType = true;
anyType = null;
anyType = undefined;
anyType = [];

// Union Type
let id: string | number = "Hello"; // string | boolean | number
id = 10;

// Type Alias
type myIdType = number | string; // string | boolean | number
let userId: myIdType = 10;
let productId: myIdType = "00123";
