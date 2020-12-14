interface I1{
    id:number
}

interface I2 {
    name:string
}

interface I3 {
    email:string
}

interface project{
    projId:number,
    projname:string
}

interface User extends I1,I2, I3, project{
    projectDept:string
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
        projId: 921,
        projname: "Typescript",
        projectDept: "Techno-side",
    },
     getUser : ():string=>{
             return "";
     }
    
}
console.log(test.user);
console.log(test.getUser());

