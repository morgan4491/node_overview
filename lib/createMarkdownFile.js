// Turn your funciton in to an 'async' function so you can use await on your inner promises

function createMarkdownFile() {
/*
Create a chain of prompts that ask the user for some details -
Their full name, their phoe number, their address and their favorite food category from a list of choices

Use await on the phommot to get the answerObj

Once you have the answerObj, you will use the fs module/package to write a .md file named details.md. The data for that file will be a template string that looks like this:

Full Name: USER_NAME
Phone: PHONE_NUMBER
Address: ADDRESS
Favorite food: FAV_FOOD_THEY_SELECTED


With the writeFile method on fs, you pass in the data string as the second argument
*/
    console.log('mark down');
}

export default createMarkdownFile;