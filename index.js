const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require('./lib/Manager.js');
const Engineer = require('./lib/Engineer.js');
const Intern = require('./lib/Intern.js');
const renderTeamHTML = require('./src/renderTeamHTML.js');

// Array to hold team member objects
const teamArr = [];

// User input for Manager role
const confirmManagerQ = [
    {
        type: 'list',
        name: 'confirm',
        message: 'Add manager? ',
        choices: ['Yes', 'No'],
    },
]

const managerQs = [
    {
        type: 'input',
        name: 'name',
        message: 'Name: ',
    },
    {
        type: 'input',
        name: 'id',
        message: 'ID: ',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Email: ',
    },
    {
        type: 'input',
        name: 'officeNumber',
        message: 'Office Number: ',
    },
];

// Prompts for additional team members
const addTeamMemberQ = [
    {
        type: 'list',
        name: 'addTeamMember',
        message: 'Add team member? ',
        choices: ['Yes', 'No'],
    },
]

// Role selection
const roleQ = [
    {
        type: 'list',
        name: 'role',
        message: 'Role: ',
        choices: ['Engineer', 'Intern', 'None'],
    },
]

// User input for Engineer role
const engineerQs = [
    {
        type: 'input',
        name: 'name',
        message: 'Name: ',
    },
    {
        type: 'input',
        name: 'id',
        message: 'ID: ',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Email: ',
    },
    {
        type: 'input',
        name: 'github',
        message: 'GitHub: ',
    },
];

// User input for Intern role
const internQs = [
    {
        type: 'input',
        name: 'name',
        message: 'Name: ',
    },
    {
        type: 'input',
        name: 'id',
        message: 'ID: ',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Email: ',
    },
    {
        type: 'input',
        name: 'school',
        message: 'School: ',
    },
];

// Verify if user is a manager
function askConfirmManagerQ(){
    inquirer
    .prompt(confirmManagerQ)
    .then((confirmManagerA) => {
        if(confirmManagerA.confirm == 'Yes'){
            askManagerQs();
        } else {
            writeToFile();
        }
    })
}

// Secondary user input after confirming Manager role
function askManagerQs(){
    inquirer
    .prompt(managerQs)
    .then((managerAs) => {

        // Initial Manager object instance is created and populated with user input, then pushed to teamArr
        const managerObj = new Manager(managerAs.name, managerAs.id, managerAs.email, managerAs.officeNumber)
        managerObj.role = managerObj.getRole();
        teamArr.push(managerObj);

        console.log('Manager added to team')

        // User is prompted with the option to add another team member
        askAddTeamMemberQ();
    })
}

// Allow user to add new team member objects
function askAddTeamMemberQ(){
    inquirer
    .prompt(addTeamMemberQ)
    .then((addTeamMemberA) => {
        if(addTeamMemberA.addTeamMember == 'Yes'){
            askRoleQ();
        } else {
            writeToFile();
        }
    })
}

// Allow user to select desired role, and executes another set of user input as a result
function askRoleQ(){
    inquirer
    .prompt(roleQ)
    .then((roleA) => {
        if (roleA.role == 'Engineer'){
            askEngineerQs();
        } else if (roleA.role == 'Intern'){
            askInternQs();
        } else {
            writeToFile();
        }
    });
}

// Secondary user input after selecting Engineer role
function askEngineerQs(){
    inquirer
    .prompt(engineerQs)
    .then((engineerAs) => {
        
        // New Engineer object instance is created and populated with user input, then pushed to teamArr
        const engineerObj = new Engineer (engineerAs.name, engineerAs.id, engineerAs.email, engineerAs.github);
        engineerObj.role = engineerObj.getRole();
        teamArr.push(engineerObj);
        
        console.log('Engineer added to team');

        // User is prompted with the option to add another team member
        askAddTeamMemberQ(); 
    });
}

// Secondary user input after selecting Intern role
function askInternQs(){
    inquirer
    .prompt(internQs)
    .then((internAs) => {
        
        // New Intern object instance is created and populated with user input, then pushed to teamArr
        const internObj = new Intern (internAs.name, internAs.id, internAs.email, internAs.school);
        internObj.role = internObj.getRole();
        teamArr.push(internObj);
        
        console.log('Intern added to team');

        // User is prompted with the option to add another team member
        askAddTeamMemberQ(); 
    });
}

// Write file called team.html after capturing user input
function writeToFile() {
    fs.writeFile('./dist/team.html', renderTeamHTML(teamArr), (err) =>
        err ? console.log(`Write to file failed. Error: ${err}`) : console.log('Write to file succeeded!')
    );
}

// Initiate app
function init() {
    askConfirmManagerQ();
}

// App initiates when node command is entered
init();
