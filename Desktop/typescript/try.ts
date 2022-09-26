class TestClass {
    constructor(name: string, private address: string, public city) { }
  
    testMethod() {
      console.log(this.name) // Compiler error: Property 'name' does not exist on type 'TestClass'.
      console.log(this.address);
      console.log(this.city);
    }
  }
  
  const testClass = new TestClass('Jane Doe', '123 Main St.', 'Cityville');
  
  testClass.testMethod();
  
  console.log(testClass.name);    // Compiler error: Property 'name' does not exist on type 'TestClass'.
  console.log(testClass.address); // Compiler error: 'address' is private and only accessible within class 'TestClass'.
  console.log(testClass.city);