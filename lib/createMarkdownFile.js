// Turn your funciton in to an 'async' function so you can use await on your inner promises
import {promises as fs} from "fs";  // This {promises as fs} is called aliasing
import inquirer from "inquirer";

async function createMarkdownFile() {
    /*
    Create a chain of prompts that ask the user for some details -
    Their full name, their phoe number, their address and their favorite food category from a list of choices
    
    Use await on the prompt to get the answerObj
    */
    const answerObj = await inquirer.prompt([
        {
            message: 'Please enter your full name',
            name: 'fullName'
        },
        {
            message: 'Please enter your phone number',
            name: 'phoneNumber'
        },
        {
            message: 'Please enter your address',
            name: 'address',
        },
        {
            message: 'Please select your favorite food types',
            name: 'foodChoices',
            type: 'checkbox',
            choices: ['Mexican', 'American', 'Italian', 'Chinese']
        }
    ]);

    
    
    const favFoods = answerObj.foodChoices.map((foodStr) => {
        return `<p> ${foodStr} </p>`
    });
    
    const info = `
    ## Full Name: ${answerObj.fullName}
    - Phone: ${answerObj.phoneNumber}
    - Address: ${answerObj.address}
    - Favorite Foods:
    <details>
    ${favFoods.join('')}
    </details>
    `;
    
    // Using join(), you can 'design' how you would like the string output to look - in the example above, we place a comma, followed by a space, between each iten in the array
    
    await fs.writeFile('details.md', info);
        
    console.log('Markdown File generated successfully!\n----------');

    /*
    Once you have the answerObj, you will use the fs module/package to write a .md file named details.md. The data for that file will be a template string that looks like this:
    
    Full Name: USER_NAME
    Phone: PHONE_NUMBER
    Address: ADDRESS
    Favorite food: FAV_FOOD_THEY_SELECTED
    
    
    With the writeFile method on fs, you pass in the data string as the second argument
    */
}

export default createMarkdownFile;