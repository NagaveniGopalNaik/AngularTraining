//create myMap
let myMap = new Map([
    ["first_name","Nagaveni"],
    ["last_name","Naik"]
]);

//map iteration
for(let key of myMap.keys()){
    console.log(key);
}

for(let key1 of myMap.values()){
    console.log(key1);
}

for(let key2 of myMap.entries()){
    console.log(key2);
}

for(let [key ,value] of myMap.entries()){
    console.log(`${key} => ${value}`);
}