const fs = require('fs');

fs.readFile('./names.txt', 'utf8', (error, data) => {
    if(error) {
        return console.log(error);
    }

    console.log(data);
});