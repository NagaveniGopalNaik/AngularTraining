
//create a set
let newSet = new Set();

//Add the element to the newSet
newSet.add("Hello");
newSet.add("Hi");

console.log(newSet);

//find the set size or length
console.log(newSet.size);

//delete set elements
newSet.delete("Hello");

console.log(newSet);

//set chaining
let set = new Set().add("A").add("B").add("C");
console.log(set);

