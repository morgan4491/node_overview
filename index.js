const num1 = parseInt(process.argv[2]); // parseInt pulls the number '5' out of the string entered ('5' was entered into the terminal as an argument)
const num2 = +process.argv[3];

// const num1 = +process.argv[2]; // the +process is a shorthand for the parseInt above

function sum(a, b) {
    console.log(a + b);
}

sum(num1, num2);