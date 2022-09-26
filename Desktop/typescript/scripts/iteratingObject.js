let person_1 = {
    fname: "chandler",
    lname: "Bing"
};
person_1[Symbol.iterator] = function () {
    let properties = Object.keys(person_1);
    let count = 0;
    let isDone = false;
    let next = () => {
        if (count >= properties.length) {
            isDone = true;
        }
        return { done: isDone, value: this[properties[count++]] };
    };
    return { next };
};
for (let p of person_1) {
    console.log(p);
}
//# sourceMappingURL=iteratingObject.js.map