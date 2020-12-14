interface I1{
    id:number,
    name:string,
    email:string,
    address:string
}

interface project{
    projId:number,
    projname:string
}

interface User extends I1, project{
    Department:string
}

interface Employee1{
    user:User,
    getUser: ()=> string
    
}

var test:Employee1 = {
    user:{
        id: 1,
        name: "Tech",
        email: "ee@gg.com",
        address: "Mumbai",
        projId: 921,
        projname: "Typescript",
        Department: "Techs"
    },
     getUser : ():string=>{
             return "";
     }
    
}
console.log(test.user);
console.log(test.getUser());

