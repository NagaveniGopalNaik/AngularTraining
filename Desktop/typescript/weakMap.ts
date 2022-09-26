let weakMap = new WeakMap();
let obj ={};
weakMap.set(obj,"hello world")
console.log(weakMap.get(obj));
obj = null;
console.log(weakMap.has(obj))