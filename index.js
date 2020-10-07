const inquirer = require("inquirer"); 
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Employee = require("./lib/Employee");
const Intern = require("./lib/Intern"); 

//Get the responses from the user. 
inputNewEmployee(); 

function inputNewEmployee() {
    inquirer.prompt([
        {
            type: "checkbox",
            message: "What kind of employee is this?",
            choices: [
                "Employee",
                "Manager",
                "Engineer",
                "Intern"
            ],
            name: "employeeType"
        },
        {
            type: "input",
            message: "What is the employee's name?",
            name: "name"
        },
        {
            type: "input",
            message: "What is the employee's ID number?",
            name: "id"
        },
        {
            type: "input",
            message: "What is the employee's email?",
            name: "email"
        }
    ])
    .then(answers => {
        
        const { employeeType, name, id, email } = answers; 
        //let employeeObj; 

        switch(employeeType[0]) {
            case "Manager": 
                inputManager(name, id, email); 
                break; 
            case "Engineer":
                inputEngineer(name, id, email); 
                break; 
            case "Intern": 
                inputIntern(name, id, email); 
                break; 
            case "Employee": 
                inputEmployee(name, id, email); 
        }

    }); 
}

function inputManager(name, id, email) {

    console.log("manager called"); 
    
    inquirer.prompt([
        {
            type: "input",
            message: "What is this manager's office number?",
            name: "officeNumber"
        }
    ])
    .then(answers => {
        const { officeNumber } = answers; 
        console.log(new Manager(name, id, email, officeNumber)); 
    }); 
}

function inputEngineer(name, id, email) {

    console.log("engineer called"); 
    
    inquirer.prompt([
        {
            type: "input",
            message: "What is this engineer's github username?",
            name: "github"
        }
    ])
    .then(answers => {
        const { github } = answers;
        console.log(new Engineer(name, id, email, github)); 
    });  
}

function inputIntern(name, id, email) {

    console.log("intern called"); 
    
    inquirer.prompt([
        {
            type: "input",
            message: "What is this intern's school?",
            name: "school"
        }
    ])
    .then(answers => {
        const { school } = answers;
        console.log(new Intern(name, id, email, school)); 
    });  
}

function inputEmployee(name, id, email) {
    console.log("employee called"); 
    console.log(new Employee(name, id, email)); 
}