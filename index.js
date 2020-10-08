const inquirer = require("inquirer"); 
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Employee = require("./lib/Employee");
const Intern = require("./lib/Intern"); 

let employees = [];

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
            type: "number",
            message: "What is the employee's ID number?",
            name: "id",
            validate: validateNumber
        },
        {
            type: "input",
            message: "What is the employee's email?",
            name: "email",
            validate: validateEmail
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
            type: "number",
            message: "What is this manager's office number?",
            name: "officeNumber",
            validate: validateNumber
        }
    ])
    .then(answers => {
        const { officeNumber } = answers; 
        askForNewEmployee(new Manager(name, id, email, officeNumber)); 
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
        askForNewEmployee(new Engineer(name, id, email, github)); 
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
        askForNewEmployee(new Intern(name, id, email, school)); 
    });  
}

function inputEmployee(name, id, email) {
    console.log("employee called"); 
    askForNewEmployee(new Employee(name, id, email)); 
}

function askForNewEmployee(newEmployee) {

    employees.push(newEmployee); 

    inquirer.prompt([
        {
            type: "checkbox",
            message: "Do you have another employee to enter?",
            choices: [
                "Yes",
                "No"
            ],
            name: "newEmployee"
        }
    ])
    .then(answer => {
        const { newEmployee } = answer; 
        console.log("User Selected NewEmployee?",newEmployee[0]); 

        if(newEmployee[0] === "Yes") {
            inputNewEmployee(); 
        } else {
            //For now, output every entered user: 
            employees.forEach((employee) => {
                console.log(employee); 
            });
        }
    });
}

function validateNumber(input) {
    //Validate number input. 
    if(isNaN(input)) {
        return "Enter a valid number.";
    }
    return true; 
}

function validateEmail(input) {
    //Validate email using a Regex (source for this Regex: https://www.w3resource.com/javascript/form/email-validation.php). 
    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/; 
    if (!input.match(emailRegex)) {
        return "Enter a valid email address."; 
    } 

    return true; 
}