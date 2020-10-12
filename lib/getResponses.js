//Require modules needed for user input. 
const inquirer = require("inquirer"); 
const path = require("path"); 
const fs = require("fs"); 

//Include the employee classes. 
const Manager = require("./Manager");
const Engineer = require("./Engineer");
const Employee = require("./Employee");
const Intern = require("./Intern"); 

//Prepare the output directory for the resulting HTML page. 
const OUTPUT_DIR = path.resolve(__dirname, "../output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

//Require the function(s) that produce the HTML output. 
const render = require("./htmlRenderer");

//Store the employee objects created. 
let employees = [];

//Functions to retrieve user input. 
const inputNewEmployee = () => {
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

        //See which employee type was selected. Construct object appropriately based on employee type.
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

const inputManager = (name, id, email) => {
    //Construct a manager object, and receive the office number. 
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

const inputEngineer = (name, id, email) => {
    //Construct an engineer object, and receive the GitHub username property. 
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

const inputIntern = (name, id, email) => {
    //Construct an intern object, and receive the school name. 
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

const inputEmployee = (name, id, email) => {
    //By default, construct an ordinary employee if it is not one of the unique classes of employee.
    askForNewEmployee(new Employee(name, id, email)); 
}

const askForNewEmployee = newEmployee => {
    //See if the user wants to enter another employee.
    //First, put the newly created employee into the array. 
    employees.push(newEmployee); 

    //Ask the user for the next employee. 
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
            //Receive the next employee until the user is finished. 
            inputNewEmployee(); 
        } else {
            //Ask user for the company/team name.
            getCompanyName(); 
        }
    });
}

const validateNumber = input => {
    //Validate number input. 
    if(isNaN(input)) {
        return "Enter a valid number.";
    }
    return true; 
}

const validateEmail = input => {
    //Validate email using a Regex (source for this Regex: https://www.w3resource.com/javascript/form/email-validation.php). 
    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/; 
    if (!input.match(emailRegex)) {
        return "Enter a valid email address."; 
    } 

    return true; 
}

const printEmployee = employeeObj => {
    //Print out the employee data into the console for reference. 
    console.log(`${employeeObj.getRole()}: ${employeeObj.getName()} (ID: ${employeeObj.getId()})`); 
    console.log(`--> Email: ${employeeObj.getEmail()}`); 
    if(employeeObj.getRole() === "Manager") {
        console.log(`--> Office Number: ${employeeObj.getOfficeNumber()}`); 
    } else if(employeeObj.getRole() === "Intern") {
        console.log(`--> School: ${employeeObj.getSchool()}`); 
    } else if(employeeObj.getRole() === "Engineer") {
        console.log(`--> GitHub Account: ${employeeObj.getGithub()}`); 
    }
    console.log("--------");  
}

const getCompanyName = () => {
    inquirer.prompt([
        {
            type: "input",
            message: "What is your company or team name?",
            name: "companyName"
        }
    ])
    .then(answers => {
        const { companyName } = answers; 

        //Output every entered user in the console for reference: 
        employees.forEach((employee) => {
            printEmployee(employee); 
        });

        console.log("This employee information is being used to generate the HTML page. See team.html in the output folder."); 

        //Render the employee data into the HTML template, and write it to an HTML file to be stored in the output folder. 
        fs.writeFileSync(outputPath, render(employees, companyName)); 
    }); 
}

module.exports = inputNewEmployee; 