//Create an array
let employee_details = ["Kiran", "Raj", "Male"];
//dustruction employee_details array to new values
let [fName, lName, gender] = employee_details;
console.log(`${fName}'s full name is ${fName} ${lName} \n gender is ${gender}`);
//empty value 
let [, , eGender] = employee_details;
console.log(eGender);
//default value
let [name_1, ...ele] = employee_details;
console.log(name_1);
console.log(ele);
//# sourceMappingURL=distructuring_array.js.map