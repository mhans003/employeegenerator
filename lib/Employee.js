class Employee {
    constructor(name, id, email) {
        this.name = name; 
        this.id = id; 
        this.email = email; 
        this.getName = function() {
            return this.name; 
        }
        this.getId = function() {
            return this.id; 
        }
    }
}

module.exports = Employee; 