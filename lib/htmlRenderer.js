const path = require("path");
const fs = require("fs");
const { listenerCount } = require("process");

//Get the directory name for the templates. 
const templatesDir = path.resolve(__dirname, "../templates");

//Render the employee data into the HTML file. 
const render = employees => {

    //Create the array that will hold the HTML. 
    const html = [];

    //From the employee array, filter out the appropriate roles, then using the results,
    //call the appropriate template to render the HTML for that particular type of employee.
    html.push(employees
        .filter(employee => employee.getRole() === "Manager")
        .map(manager => renderManager(manager))
    );
    html.push(employees
        .filter(employee => employee.getRole() === "Engineer")
        .map(engineer => renderEngineer(engineer))
    );
    html.push(employees
        .filter(employee => employee.getRole() === "Intern")
        .map(intern => renderIntern(intern))
    );
    html.push(employees
        .filter(employee => employee.getRole() === "Employee")
        .map(employee => renderEmployee(employee))
    );

    return renderMain(html.join(""));

};

const renderManager = manager => {
    //Access the manager html template file and replace the place holders with the data from this manager object.
    let template = fs.readFileSync(path.resolve(templatesDir, "manager.html"), "utf8");
    template = replacePlaceholders(template, "name", manager.getName());
    template = replacePlaceholders(template, "role", manager.getRole());
    template = replacePlaceholders(template, "email", manager.getEmail());
    template = replacePlaceholders(template, "id", manager.getId());
    template = replacePlaceholders(template, "officeNumber", manager.getOfficeNumber());
    //Return back the newly formed manager html template to be put into the main HTML document.
    return template;
};

const renderEngineer = engineer => {
    //Access the engineer html template file and replace the place holders with the data from this engineer object.
    let template = fs.readFileSync(path.resolve(templatesDir, "engineer.html"), "utf8");
    template = replacePlaceholders(template, "name", engineer.getName());
    template = replacePlaceholders(template, "role", engineer.getRole());
    template = replacePlaceholders(template, "email", engineer.getEmail());
    template = replacePlaceholders(template, "id", engineer.getId());
    template = replacePlaceholders(template, "github", engineer.getGithub());
    //Return back the newly formed engineer html template to be put into the main HTML document.
    return template;
};

const renderIntern = intern => {
    //Access the intern html template file and replace the place holders with the data from this intern object.
    let template = fs.readFileSync(path.resolve(templatesDir, "intern.html"), "utf8");
    template = replacePlaceholders(template, "name", intern.getName());
    template = replacePlaceholders(template, "role", intern.getRole());
    template = replacePlaceholders(template, "email", intern.getEmail());
    template = replacePlaceholders(template, "id", intern.getId());
    template = replacePlaceholders(template, "school", intern.getSchool());
    //Return back the newly formed intern html template to be put into the main HTML document.
    return template;
};

const renderEmployee = employee => {
    //Access the employee html template file and replace the place holders with the data from this employee object.
    let template = fs.readFileSync(path.resolve(templatesDir, "employee.html"), "utf8");
    template = replacePlaceholders(template, "name", employee.getName());
    template = replacePlaceholders(template, "role", employee.getRole());
    template = replacePlaceholders(template, "email", employee.getEmail());
    template = replacePlaceholders(template, "id", employee.getId());
    //Return back the newly formed employee html template to be put into the main HTML document.
    return template;
};

//Render the main HTML document. 
const renderMain = html => {
    const template = fs.readFileSync(path.resolve(templatesDir, "main.html"), "utf8");
    //Replace the template content in the main file and return it back as a completed HTML file.
    return replacePlaceholders(template, "team", html);
};

const replacePlaceholders = (template, placeholder, value) => {
    const pattern = new RegExp("{{ " + placeholder + " }}", "gm");
    //Using the regex patern, replace each pattern with the value with the passed in HTML array items.
    return template.replace(pattern, value);
};

module.exports = render;
