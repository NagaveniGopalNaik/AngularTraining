let s = Symbol();
console.log(typeof s);
//check two symbol
// let s2 = Symbol();
// let s3 = Symbol();
// console.log(s2 === s3);
let s2 = Symbol("test");
let s3 = Symbol("test");
console.log(s2 === s3);
//using Symbol.for() method
let s4 = Symbol.for("Hello");
let s5 = Symbol.for("Hello");
console.log(s4 === s5);
//using Symbol.keyFor() method to get key of the symbol
console.log(Symbol.keyFor(s4));
//work through the objects
let f_name = Symbol();
let person = {
    [f_name]: "kushal",
    "l_name": "Gadag"
};
console.log(Object.getOwnPropertyNames(person));
console.log(Object.getOwnPropertySymbols(person));
//# sourceMappingURL=symbol.js.map