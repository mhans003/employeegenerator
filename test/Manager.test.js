const Manager = require("../lib/Manager"); 

describe("Manager", () => {
    //Describe object instantiation with existence of properties and methods.
    describe("Initialization", () => {
        it("should create an object with a name, id, and email property", () => {
            const managerObj = new Manager("Michael", 34, "michaeledwardhanson@gmail.com"); 

            expect(managerObj.name).toEqual("Michael"); 
            expect(managerObj.id).toEqual(34); 
            expect(managerObj.email).toEqual("michaeledwardhanson@gmail.com"); 
        }); 

        
    }); 

    //Describe each method. 
}); 