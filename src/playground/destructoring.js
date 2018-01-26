// const person = {
//     age: 30,
//     name: 'tom',
//     location: {
//         city: 'boulder',
//         temperature: '14'
//     }
// };

// const {age, name} = person;

// const {city, temperature: temp} = person.location;

// console.log(`${person.name} is ${person.age}`);

// console.log(`${city} is ${temp} degrees right now`);

const location = ['123 brook st.', 'brooklyn', 'ny', '40012'];

const [, , state = 'Pennsylvania', zipCode] = location; // <-- This is used as an ordered list so address doesn't actually match anything it just uses the first element[0] in the array because it was the first variable to get assigned. In this example I just used the last two variables

console.log(`The address is here: ${state} and the zip code is here: ${zipCode}`);

const book = {
    title: 'Deep Work',
    author: 'cal newport',
    publisher: {
       name: 'Penguin',
       anotherAddress: 'a street'
    }
};

const {name: publisherName = 'couldn\'t tell ya', anotherAddress} = book.publisher;

console.log(publisherName, anotherAddress);

const item = ['coffee', '3', '2', '1'];

const [drink, , mediumPrice,] = item;

console.log(`This item of ${drink} is medium sized so costs this much ${mediumPrice}`);