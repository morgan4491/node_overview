const fs = require('fs');
const inquirer = require('inquirer');

function addName() {
    const studentPromise = inquirer.prompt({
        message: 'Enter new student name',
        name: 'studentName'
    });

    studentPromise.then(function (answerObj) {                 // This function does not run UNTIL studentPromise is complete. When you pass in a function as an argument, it is called a call-back
        fs.appendFile('./names.txt', '\n' + answerObj.studentName, (error) => {
            if (error) {
                return console.log(error);
            }

            console.log('Name addded successfully!\n-----------');

            showMenu();
        });
    });

}

module.exports = addName;