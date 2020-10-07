const Employee = require("./Employee");
//include employee? 

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email); 
        this.school = school; 
        this.getRole = function() {
            return "Intern"; 
        }
        this.getSchool = function() {
            return this.school; 
        }
    }
}

module.exports = Intern; 