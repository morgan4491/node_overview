const fruits = ['orange', 'apple', 'grape'];
const fruits2 = ['kiwi', 'banana', 'strawberry'];
const fruits3 = ['pear', 'peach', 'watermelon'];

const combinedArray = [...fruits, 'blueberry', ...fruits2, ...fruits3];  // the '...' is the spread operator - similar to concat, but with more ability to manipulate


const data = {
    name: 'JD',
    age: 44
};


const combinedData = {
    ...data,
    address: '555 coding dr',
    phone: '777-777-7777'
};

// console.log(combinedData);



function printNames (...names) {        // in this instance the '...' is a rest operator that takes your arguments from printNames call, and puts them in an array, and the console.log prints out the array
    for (const name of names) {
        console.log(name);
    }
}

printNames('Bob', 'Jane', 'Frank', 'Jill', 'Billy');
printNames('Jake', 'Bill');