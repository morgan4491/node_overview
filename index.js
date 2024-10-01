const data = {
    name: 'JD',
    age: 44,
    address: '555 coding dr',
    phone: '777-777-7777',
    info: {
        location: 'Atlanta',
        county: 'Cobb',
        places: ['Lake Acworth', 'Georgia Aquarium']
    }
};

const {age, address, info: {location}} = data;         // Within the {}, write the properties you want to pull from the object that comes after the '=' sign

console.log(location);




function printData(obj) {
    console.log(obj);
};

printData({
    color: 'blue',
    length: 10
})


const fruits = ['orange', 'apple', 'kiwi'];

const [a, b, thatFruit] = fruits;

console.log(thatFruit);