const fs = require('fs');
const command = process.argv[2];
const studentName = process.argv[3];




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

function welcomeMessage() {
    console.log(`
        -------------
        Welcome to the Random Name Wheel!

        To use this app, type in one of the options:
        - spin -- This will spin the wheel
        - add -- This adds a name to the list

        -------------
    `)
}


switch(command) {
    case 'add':
        addName();
        break;
    case 'spin':
        spinWheel();
}



// if (command === 'add') {
//     addName();
// } else if (command === 'spin') {
//     spinWheel();
// }