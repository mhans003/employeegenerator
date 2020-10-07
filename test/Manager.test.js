const Manager = require("../lib/Manager"); 

describe("Manager", () => {
    //Describe object instantiation with existence of properties and methods.
    describe("Initialization", () => {
        it("should create an object with a name, id, and email property", () => {
            const managerObj = new Manager("Michael", 34, "michaeledwardhanson@gmail.com", 20); 

            expect(managerObj.name).toEqual("Michael"); 
            expect(managerObj.id).toEqual(34); 
            expect(managerObj.email).toEqual("michaeledwardhanson@gmail.com"); 
            expect(managerObj.officeNumber).toEqual(20); 
        }); 

        
    }); 

    //Describe each method. 
    describe("getName", () => {
        it("should return the manager's name property", () => {
            const managerObj = new Manager("Michael", 34, "michaeledwardhanson@gmail.com"); 
            const name = managerObj.getName(); 

            expect(name).toEqual("Michael"); 
        }); 
    }); 

    describe("getId", () => {
        it("should return the manager's id property", () => {
            const managerObj = new Manager("Michael", 34, "michaeledwardhanson@gmail.com"); 
            const id = managerObj.getId(); 

            expect(id).toEqual(34); 
        }); 
    }); 

    describe("getEmail", () => {
        it("should return the manager's email property", () => {
            const managerObj = new Manager("Michael", 34, "michaeledwardhanson@gmail.com"); 
            const email = managerObj.getEmail(); 

            expect(email).toEqual("michaeledwardhanson@gmail.com"); 
        }); 
    }); 

    describe("getRole", () => {
        it("should return the manager's role", () => {
            const managerObj = new Manager("Michael", 34, "michaeledwardhanson@gmail.com"); 
            const role = managerObj.getRole(); 

            expect(role).toEqual("Manager"); 
        }); 
    }); 
}); 