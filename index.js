const nums = [10, 3, 100, 70, 8, 55, 88];
const users = [
    {
        name: 'Bob',
        age: 99,
    },
    {
        name: 'Jim',
        age: 25,
    },
    {
        name: 'Sarah',
        age: 40,
    }
];

const students = [
    {
        name: 'Roman',
        average: 99
    },
    {
        name: 'Matt',
        average: 80
    },
    {
        name: 'Izzy',
        average: 95
    },
    {
        name: 'Kandyce',
        average: 90
    }
]


const overallAverage = students.reduce((output, studentObj, index, arr) => {
    // If we are on the last student, return the output divided by the arr length
    if (index === arr.length - 1) {
        return (output + studentObj.average) / arr.length;
    }

    // Otherwise, return output + the studentObj's average
    return output + studentObj.average;
}, 0);

// console.log(overallAverage);

const studentInfo = students.reduce((output, studentObj, index, arr) => {
    output.overallAverage += studentObj.average;
    
    if (index === arr.length - 1) {
        output.overallAverage = output.overallAverage / arr.length;
    }

    output.studentCount = arr.length;

    return output;

}, {
    overallAverage: 0,
    studentCount: 0
});




console.log(studentInfo);





const sum = nums.reduce((output, num) => {
    return output + num;
}, 0);   // the '0' here sets the initial value of output

// console.log(sum);










const evenArray = nums.map((num) => {
    if ((num % 2) === 0) {
        return `${num} is even`
    }   else {
        return `${num} is odd`
    }
    // return num % 2;                         // the '%' symbol gives the remainder of 'num % 2' or the remainder of 'num / 2'
});

// console.log(evenArray);





// nums.forEach((num, index) => {        // forEach is a 'higher order function'
//     console.log(index);
// });

// for (const num of nums) {       // this is still useful when you want to stop looping through an array
//     if(num > 10) {
//         break;
//     }

//     console.log(num);
// };




const filteredNums = nums.filter((num) => {
    if (num > 10) {
        return true;
    }
});

const filteredUsers = users.filter((userObj) => {
    if (userObj.age > 30) {
        return true;
    }
});

// console.log(filteredNums);

// console.log(filteredUsers);





// Algorithm challeng - write a function that orders the array from lowest to highest
const sorted = nums.sort((currentNum, nextNum) => {
    return currentNum - nextNum;
});

// Create a variable that stores the sorted userArray. In your callback function, return the difference between the current object's age and the next object's age

const userArray = users.sort((currentObj, nextObj) => {
    return currentObj.age - nextObj.age;
});

// Create a variable that stores the sorted users array and sorts the objects by name - hint (all letter characters have a number that you can pull with JS)

// console.log(userArray);

// console.log(sorted);