function display(message, ...contents) {
    console.log(message);
    console.log(arguments.length);
    for (let i in contents) {
        console.log(contents[i]);
    }
}
// function display(){
//     for(let i in arguments){
//         console.log(arguments[i]);
//     }
// }
let message = "hello ,this is your argument message";
display(message, "red");
display(message, "red", "green");
display(message, "red", "green", "blue");
display(message, "red", "green", "blue", "black");
//# sourceMappingURL=restOperator.js.map