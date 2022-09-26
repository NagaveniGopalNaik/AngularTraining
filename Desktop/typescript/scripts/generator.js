function* createGenerator() {
    yield 1;
    console.log("after 1st yield");
    yield 2;
}
// person[Symbol.iterator] = function *(){
//     let properties = Object.keys(person);
//     for(let t of properties){
//         yield this[t];
//     }
// };
// for(let p of person){
//     console.log(p);
// }
let myGen = createGenerator();
console.log(myGen.next());
console.log(myGen.next());
console.log(myGen.next());
//# sourceMappingURL=generator.js.map