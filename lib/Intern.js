const Employee = require("./Employee");
//include employee? 

class Intern extends Employee {
    constructor(name, id, email) {
        super(name, id, email); 
    }
}

module.exports = Intern; 