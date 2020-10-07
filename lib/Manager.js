const Employee = require("./Employee");
//include employee? 

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email); 
        this.officeNumber = officeNumber; 
        this.getRole = function() {
            return "Manager"; 
        }
    }
}

module.exports = Manager; 