const fs = require('fs');

function spinWheel(showMenu) {
    fs.readFile('./names.txt', 'utf8', (error, data) => {
        if (error) {
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
            } else {
                console.log(ranName);
            }

        }, 75);
    });
}

module.exports = spinWheel;