//class constructor

class Employee1{
    public fname:string;
    public lname:string;
    constructor(fname:string,lname:string){
        this.fname = fname;
        this.lname = lname;
    }
};

class Employee2{
    constructor(public fname:string, public lname:string){

    }
}

//Interfaces => use to describe the perticular type in the typescript

interface e_details{
    fname : string;
    lname : string;
    age? : number;
}

let emp_1 : e_details = {
    fname : "Gopal",
    lname : "Naik",
    age : 53
}
console.log(emp_1);

let emp_2 : e_details = {
    fname : "Krishna",
    lname : "Naik"
    
}
console.log(emp_2);


