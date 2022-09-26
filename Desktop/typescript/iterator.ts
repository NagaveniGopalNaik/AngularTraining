let iterable = [1,2,3];

function creatIterator(array){
    let c = 0;
    return {
        next: function(){
            return c < array.length ? 
            {value : array[c++],done : false} :
            {value : undefined,done : true};
        }
    }
}

let myIterator = creatIterator(iterable);
console.log(myIterator.next());
console.log(myIterator.next());
console.log(myIterator.next());
console.log(myIterator.next());
