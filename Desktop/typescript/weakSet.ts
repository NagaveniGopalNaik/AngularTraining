//create weakSet
let weakset = new WeakSet();

let key = {};
//add the elements
weakset.add(key);
console.log(weakset);
console.log(weakset.has(key));
key = null;
console.log(weakset.has(key));

let nSet = new Set();
nSet.add(key);
console.log(nSet.has(key));

