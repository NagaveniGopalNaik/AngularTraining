let employee = {
    id : 123,
    name : "sharan",

    display : function (){
        setTimeout(() => console.log(`enmployee name is ${this.name} and with id is ${this.id}`))
    }
}

employee.display();