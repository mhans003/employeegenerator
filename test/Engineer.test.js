const Engineer = require("../lib/Engineer"); 

describe("Engineer", () => {
    //Describe object instantiation with existence of properties and methods.
    describe("Initialization", () => {
        it("should create an object with a name, id, and email property", () => {
            const engineerObj = new Engineer("Michael", 34, "michaeledwardhanson@gmail.com"); 

            expect(engineerObj.name).toEqual("Michael"); 
            expect(engineerObj.id).toEqual(34); 
            expect(engineerObj.email).toEqual("michaeledwardhanson@gmail.com"); 
        }); 

        
    }); 

    //Describe each method. 
}); 