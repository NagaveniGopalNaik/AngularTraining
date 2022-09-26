
console.log("Hello")
import {name} from "./moduleB.js";
import {fname, lname} from "./moduleB.js";
import {student} from "./moduleB.js";
// import value from "./moduleB.js";
import {default as s} from "./moduleB.js";
console.log(name);

console.log("import 2 variable");
console.log(fname,lname);

console.log("display object");
student.fname = "Radhika";
console.log(student);

console.log(s);
