const Engineer = require("../lib/Engineer"); 

describe("Engineer", () => {
    //Describe object instantiation with existence of properties and methods.
    describe("Initialization", () => {
        it("should create an object with a name, id, and email property", () => {
            const engineerObj = new Engineer("Michael", 34, "michaeledwardhanson@gmail.com", "mhans003"); 

            expect(engineerObj.name).toEqual("Michael"); 
            expect(engineerObj.id).toEqual(34); 
            expect(engineerObj.email).toEqual("michaeledwardhanson@gmail.com"); 
            expect(engineerObj.github).toEqual("mhans003"); 
        }); 

        
    }); 

    //Describe each method. 
    describe("getName", () => {
        it("should return the engineer's name property", () => {
            const engineerObj = new Engineer("Michael", 34, "michaeledwardhanson@gmail.com"); 
            const name = engineerObj.getName(); 

            expect(name).toEqual("Michael"); 
        }); 
    }); 

    describe("getId", () => {
        it("should return the engineer's id property", () => {
            const engineerObj = new Engineer("Michael", 34, "michaeledwardhanson@gmail.com"); 
            const id = engineerObj.getId(); 

            expect(id).toEqual(34); 
        }); 
    }); 

    describe("getEmail", () => {
        it("should return the engineer's email property", () => {
            const engineerObj = new Engineer("Michael", 34, "michaeledwardhanson@gmail.com"); 
            const email = engineerObj.getEmail(); 

            expect(email).toEqual("michaeledwardhanson@gmail.com"); 
        }); 
    }); 

    describe("getRole", () => {
        it("should return the engineer's role", () => {
            const engineerObj = new Engineer("Michael", 34, "michaeledwardhanson@gmail.com"); 
            const role = engineerObj.getRole(); 

            expect(role).toEqual("Engineer"); 
        }); 
    }); 

    describe("getGithub", () => {
        it("should return the engineer's github username", () => {
            const engineerObj = new Engineer("Michael", 34, "michaeledwardhanson@gmail.com", "mhans003"); 
            const github = engineerObj.getGithub(); 

            expect(github).toEqual("mhans003"); 
        }); 
    }); 
}); 