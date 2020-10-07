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
}); 