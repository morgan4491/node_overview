// const inquirer = require('inquirer');  // this is the old syntax

import inquirer from 'inquirer';  // this is the new syntax

import createMarkdownFile from './createMarkdownFile.js';

// Show an aoption to create a markdown file
// function mainMenu() {
//     const menuPromise = inquirer.prompt({
//         message: 'Please select an option',
//         name: 'menuChoice',
//         type: 'list',
//         choices: ['Create Markdown File', 'Exit']
//     });

//     menuPromise.then((answerObj) => {

//     });

//     // Show an option to exit the application
// }




// ****************************************************

// Using the async syntax

// Show an aoption to create a markdown file
async function mainMenu() {     // 'async' tells JavaScript you are going to be handling a promise
    const answerObj = await inquirer.prompt({
        message: 'Please select an option',
        name: 'menuChoice',
        type: 'list',
        choices: ['Create Markdown File', 'Exit']
    });
    
    switch(answerObj.menuChoice) {
        case 'Create Markdown File':
            createMarkdownFile();
            break;
        default:
            console.log('\nThanks for using the markdown generator!');
    };
}

// Show an option to exit the application



export default mainMenu;  // this is an export default in 'module' JS

// module.exports = mainMenu;  this is an export default in 'commonJS'