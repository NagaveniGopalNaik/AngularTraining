//create parent class
class Parent {
    constructor() {
        console.log("execute in parent class");
    }
    greet() {
        console.log("hello");
    }
}
//create a child class inherit from the parent class 
class Child extends Parent {
    constructor(name) {
        super(name);
        console.log("execute in child class name is " + name);
    }
    //override greet method 
    greet() {
        console.log("hi , hello, how are you?");
    }
}
let child = new Child("Ram");
child.greet();
//# sourceMappingURL=class_inheritance.js.map