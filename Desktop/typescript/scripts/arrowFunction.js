let factorial = (num) => {
    if (num == 0) {
        return 1;
    }
    else {
        return num * factorial(num - 1);
    }
};
let value = 5;
console.log(factorial(value));
//# sourceMappingURL=arrowFunction.js.map