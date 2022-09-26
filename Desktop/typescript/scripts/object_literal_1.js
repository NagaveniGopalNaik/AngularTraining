let firstName = "Nagaveni";
let lastName = "Naik";
let Employee = {
    firstName,
    lastName,
    fullname: () => {
        console.log(`${Employee.firstName} ${Employee.lastName}`);
        return `${Employee.firstName} ${Employee.lastName}`;
    },
    isSenior: (age) => {
        if (age > 60) {
            return true;
        }
        return false;
    }
};
console.log(Employee);
console.log(`${Employee.firstName} full name is ${Employee.firstName} ${Employee.lastName}`);
console.log(`${Employee.fullname()}`);
console.log(Employee.isSenior(67));
//# sourceMappingURL=object_literal_1.js.map