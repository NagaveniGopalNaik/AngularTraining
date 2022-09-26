//class having 3 different types of methods
//create a person_details class
class Person_details {
    //1. constructor methods
    constructor(person_name) {
        this.person_name = person_name;
        console.log("name is " + this.person_name);
    }
    //2.Static methods using static keyword prefix and access throw directly class
    static staticMethod() {
        return "This is static methods";
    }
    //Prototype methods .* in this method access this method using objects
    display() {
        return "display your name " + this.person_name + " through prototype methods";
    }
}
let pdetails = new Person_details("Nagaveni");
console.log("\n static method");
console.log(Person_details.staticMethod());
console.log("\n prototype method");
console.log(pdetails.display());
//# sourceMappingURL=class_methods.js.map