const mathTools = {
    num1: 15,
    num2: 10,
    sum: function() {
        // return the sum of num1 and num2
        return this.num1 + this.num2;
    },
    sum() {                             // This sum() is the same as writing out sum: function()
        return this.num1 + this.num2;
    },
    difference: function() {
        // return the difference of num1 and num2
        return this.num1 - this.num2;
    }
};

const sum = mathTools.sum();
const diff = mathTools.difference();

console.log('sum', sum);
console.log('diff', diff);






function testOne() {
    console.log('test one');
}

// testOne();

const testTwo = num => console.log(num);

testTwo(30);



function printName (userName) {
    // const capitalize = str => {
    //     return str.toUpperCase();
    // }

    // const capitalize = str => str.toUpperCase();    // Similar to the original const of 'capitalize', when using the arrow function, the return is automatically implied if you don't use the {}

    const capitalize = str => str[0].toUpperCase() + str.slice(1);

    const capName = capitalize(userName);

    console.log(capName);
}

printName('bob');

// To show results of these, type 'node index.js' into the terminal