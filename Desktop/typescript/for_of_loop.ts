let languages = ["java", "Python", "JavaScript", "c"];
console.log("Using for in loop");

//using for in loop
for(let index in languages){
    console.log(languages[index]);
    
}

console.log("\nUsing for of loop");

//using for of loop
for(let language of languages){
    console.log(language);
    
}
