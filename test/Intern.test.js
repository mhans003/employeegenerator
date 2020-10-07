const Intern = require("../lib/Intern"); 

describe("Intern", () => {
    //Describe object instantiation with existence of properties and methods.
    describe("Initialization", () => {
        it("should create an object with a name, id, and email property", () => {
            const internObj = new Intern("Michael", 34, "michaeledwardhanson@gmail.com"); 

            expect(internObj.name).toEqual("Michael"); 
            expect(internObj.id).toEqual(34); 
            expect(internObj.email).toEqual("michaeledwardhanson@gmail.com"); 
        }); 

        
    }); 

    //Describe each method. 
    describe("getName", () => {
        it("should return the intern's name property", () => {
            const internObj = new Intern("Michael", 34, "michaeledwardhanson@gmail.com"); 
            const name = internObj.getName(); 

            expect(name).toEqual("Michael"); 
        }); 
    }); 

    describe("getId", () => {
        it("should return the intern's id property", () => {
            const internObj = new Intern("Michael", 34, "michaeledwardhanson@gmail.com"); 
            const id = internObj.getId(); 

            expect(id).toEqual(34); 
        }); 
    }); 

    describe("getEmail", () => {
        it("should return the intern's email property", () => {
            const internObj = new Intern("Michael", 34, "michaeledwardhanson@gmail.com"); 
            const email = internObj.getEmail(); 

            expect(email).toEqual("michaeledwardhanson@gmail.com"); 
        }); 
    }); 

    describe("getRole", () => {
        it("should return the intern's role", () => {
            const internObj = new Intern("Michael", 34, "michaeledwardhanson@gmail.com"); 
            const role = internObj.getRole(); 

            expect(role).toEqual("Intern"); 
        }); 
    }); 
}); 