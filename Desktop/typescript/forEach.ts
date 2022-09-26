// var numbers = [2,4,6,8];
// numbers.forEach(arrayFunction)

// function arrayFunction(element,index,array){
//     console.log("arr[" + index + "]=" +element);
    
// };

//using map

// let newMap = new Map([
//     ["fname", "Gopal"],
//     ["lname","naik"]
// ]);
// newMap.forEach(mapFunction);

// function mapFunction(value, key, callingMap){
//     console.log(key +" "+value);
//     console.log(newMap === callingMap);
    
    
// }


// using sets
let mySet = new Set([1, 2, 3]);
mySet.forEach(setFunction);

function setFunction(value,key,callingSet){
    console.log(key +" "+ value);
    console.log(mySet === callingSet);
    
    
}
