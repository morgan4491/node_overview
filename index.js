const fs = require('fs');
const inquirer = require('inquirer');


function spinWheel() {
    fs.readFile('./names.txt', 'utf8', (error, data) => {
        if(error) {
            return console.log(error);
        }
        const names = data.split('\n');
        let cycleAmount = 30;

        const cycle = setInterval(() => {
            const ranNum = Math.random();
            const index = Math.floor(ranNum * names.length);
            const ranName = names[index];

            console.clear();

            cycleAmount--;

            if (cycleAmount === 0) {
                clearInterval(cycle);

                console.log(`------------\n${ranName}, you are the lucky contestant!\n------------`);

                showMenu();
            }   else {
                console.log(ranName);
            }

        }, 75);
    });
}


function addName() {
    fs.appendFile('./names.txt', '\n' + studentName, (error) => {
        if (error) {
            return console.log(error);
        }

        console.log('Name addded successfully');
    });
}

function showMenu() {
    console.log(`
        -------------
        Welcome to the Random Name Wheel!
        -------------

    `);

    const menuPromise = inquirer.prompt({
        message: 'Please choose an option.',
        name: 'menuChoice',  // This determines the answerObj's property that this answer will be stored ot
        type: 'list',
        choices: ['Spin the wheel', 'Add a student']
    });

    menuPromise.then((answerObj) => {
        switch(answerObj.menuChoice) {
            case 'Add a student':
                addName();
                break;
            case 'Spin the wheel':
                spinWheel();
        }

    })

}


showMenu();