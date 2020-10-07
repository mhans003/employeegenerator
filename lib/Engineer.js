const Employee = require("./Employee");
//include employee? 

class Engineer extends Employee {
    constructor(name, id, email) {
        super(name, id, email); 
    }
}

module.exports = Engineer; 