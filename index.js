// Had to use 'import' instead of 'require' due to ESM error for Inquirer package version 
import inquirer from 'inquirer';
import fs from 'fs';
import Manager from './lib/Manager.js';
import Engineer from './lib/Engineer.js';
import Intern from './lib/Intern.js';
import renderTeamHTML from './src/renderTeamHTML.js';

const teamArr = [];

const addTeamMemberQ = [
    {
        type: 'list',
        name: 'addTeamMember',
        message: 'Add team member? ',
        choices: ['No', 'Yes'],
    },
]

const roleQ = [
    {
        type: 'list',
        name: 'role',
        message: 'Role: ',
        choices: ['Manager', 'Engineer', 'Intern', 'None'],
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

function askRoleQ(){
    inquirer
    .prompt(roleQ)
    .then((roleA) => {
        console.log(roleA, 'roleA console log')
        if(roleA.role == 'Manager'){
            askManagerQs();
        } else if (roleA.role == 'Engineer'){
            askEngineerQs();
        } else if (roleA.role == 'Intern'){
            askInternQs();
        } else {
            writeToFile();
        }
    });
}

function askManagerQs(){
    inquirer
    .prompt(managerQs)
    .then((managerAs) => {
        
        const managerObj = new Manager (managerAs.name, managerAs.id, managerAs.email, managerAs.officeNumber);
        managerObj.role = managerObj.getRole();
        teamArr.push(managerObj);
        
        console.log('Manager added to team');
        askAddTeamMemberQ(); 
    });
}

function askEngineerQs(){
    inquirer
    .prompt(engineerQs)
    .then((engineerAs) => {
        
        const engineerObj = new Engineer (engineerAs.name, engineerAs.id, engineerAs.email, engineerAs.github);
        engineerObj.role = engineerObj.getRole();
        teamArr.push(engineerObj);
        
        console.log('Engineer added to team');
        askAddTeamMemberQ(); 
    });
}

function askInternQs(){
    inquirer
    .prompt(internQs)
    .then((internAs) => {
        
        const internObj = new Intern (internAs.name, internAs.id, internAs.email, internAs.school);
        internObj.role = internObj.getRole();
        teamArr.push(internObj);
        
        console.log('Intern added to team');
        askAddTeamMemberQ(); 
    });
}

function writeToFile() {
    // Replace specific lines in a file: https://stackoverflow.com/questions/30711184/how-can-i-change-a-specific-line-in-a-file-with-node-js
    console.log('before write', teamArr);
    fs.writeFile('./dist/team.html', renderTeamHTML(teamArr), (err) =>
        err ? console.log(err) : console.log('Writing HTML', teamArr)
    );
}

function init() {
    askAddTeamMemberQ();
}

init();
