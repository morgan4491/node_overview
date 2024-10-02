const inquirer = require('inquirer');

const languages = [
    {
        id: 1,
        name: 'JS'
    },
    {
        id: 2,
        name: 'Python'
    }
];


const promise = inquirer.prompt([
    {
        message: 'Please type your name',
        name: 'userName',
        type: 'input'
    },
    {
        message: 'Please type your age',
        name: 'userAge',
        type:'input',
        validate: function(value) {
            if(isNaN(value)) {
                return 'You must type a number value'
            }
            
            return true;
        }

    },
    {
        message: 'Please choose your favorite programming language',
        name: 'programmingLanguage',
        type: 'list',
        choices: languages.map((languageObj) => {
            return {
                name: languageObj.name,
                value: languageObj.id
            }
        })
    },
    {
        message: 'Please choose your software license',
        name: 'softwareLicense',
        type: 'list',
        choices: [
            {
                name: 'Academic Free License v3.0',
                value: 'AFL-3.0'
            },
            {
                name: 'BSD 3-clause "New" or "Revised" license',
                value: 'BSD-3-Clause'
            },
            {
                name: 'GNU General Public License v2.0',
                value: 'GPL-2.0'
            }
        ]
    },
    {
        message: 'Please select your favorite food categories',
        name: 'foodCategory',
        type: 'checkbox',
        choices: ['American', 'Chinese', 'Mexican', 'Korean', 'Italian']
    }
]);

promise.then((answerObj) => {
    console.log(answerObj);
});