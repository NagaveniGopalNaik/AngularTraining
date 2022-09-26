function displays(message, ...elements){
    console.log(message);
    for(let val in elements){
        console.log(elements[val]);
    }
}


let messages = "hello";
let fruits = ["Orange", "Mango", "Apple", "Banana"];
displays(messages, ...fruits);