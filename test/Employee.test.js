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
    }); 

    //Describe each method. 
    describe("getName", () => {
        it("should return the employee's name property", () => {
            const employeeObj = new Employee("Michael", 34, "michaeledwardhanson@gmail.com"); 
            const name = employeeObj.getName(); 

            expect(name).toEqual("Michael"); 
        }); 
    }); 

    describe("getId", () => {
        it("should return the employee's id property", () => {
            const employeeObj = new Employee("Michael", 34, "michaeledwardhanson@gmail.com"); 
            const id = employeeObj.getId(); 

            expect(id).toEqual(34); 
        }); 
    }); 

    describe("getEmail", () => {
        it("should return the employee's email property", () => {
            const employeeObj = new Employee("Michael", 34, "michaeledwardhanson@gmail.com"); 
            const email = employeeObj.getEmail(); 

            expect(email).toEqual("michaeledwardhanson@gmail.com"); 
        }); 
    }); 

    describe("getRole", () => {
        it("should return the employee's role", () => {
            const employeeObj = new Employee("Michael", 34, "michaeledwardhanson@gmail.com"); 
            const role = employeeObj.getRole(); 

            expect(role).toEqual("Employee"); 
        }); 
    }); 
}); 