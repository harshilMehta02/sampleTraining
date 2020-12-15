class Project{

    pid:number
    pname:string

    constructor(pid:number, pname:string){
        this.pid = pid;
        this.pname = pname;
    }

    getProjectDetails():object{
        return {
            pid: this.pid,
            pname: this.pname
        }
    }

}


class Users extends Project { 

    name:string
    id:number
    experience:number

    constructor(id:number, name:string, experience:number, pid:number, pname:string){
        super(pid, pname);
        this.id = id;
        this.name = name;
        this.experience = experience;
    }

    getDetails():object {
        return {
            id: this.id,
            name: this.name,
            experience: this.experience,
            ProjectDetails: this.getProjectDetails()
        };
    }

    getExperience():any{
        if (this.experience > 7)
            return {
                EmployeeDetails: this.getDetails()
            }
        else return ""    
    }
}

const user = new Users(1, "HM", 10, 1234, "Techno");
const user1 = new Users(1, "HM", 5, 1234, "Techno");
const user2 = new Users(1, "HM", 8, 2234, "SCi-FI");
const user3 = new Users(1, "HM", 7, 2234, "SCi-FI");
const user4 = new Users(1, "HM", 4, 2234, "SCi-FI");
const user5 = new Users(1, "HM", 9, 2234, "SCi-FI");
//console.log(user.getDetails());
//console.log(user.experience);
console.log(user.getExperience());
console.log(user1.getExperience());
console.log(user2.getExperience());
console.log(user3.getExperience());
console.log(user4.getExperience());
console.log(user5.getExperience());
