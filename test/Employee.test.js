const Employee = require("../lib/Employee"); 

describe("Employee", () => {
    //Describe object instantiation with existence of properties and methods.
    describe("Initialization", () => {
        it("should create an object with a name, id, and email property", () => {
            const employeeObj = new Employee("Michael", 34, "michaeledwardhanson@gmail.com"); 

            expect(employeeObj.name).toEqual("Michael"); 
            expect(employeeObj.id).toEqual(34); 
            expect(employeeObj.email).toEqual("michaeledwardhanson@gmail.com"); 
        }); 

        //it("should create an object with the methods getname(), getId(), getEmail(), and getRole()", () => {

        //}); 
    }); 

    //Describe each method. 
}); 