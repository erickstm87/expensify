import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyABnxkYXWwYmUEFxhH-CnN_D5hHr1FdpX0",
    authDomain: "expensify-c1a74.firebaseapp.com",
    databaseURL: "https://expensify-c1a74.firebaseio.com",
    projectId: "expensify-c1a74",
    storageBucket: "expensify-c1a74.appspot.com",
    messagingSenderId: "245741626365"
};

firebase.initializeApp(config);
const database = firebase.database();

database.ref().set({
    name: 'tomas',
    age: 30,
    isSingle: false,
    location: {
        city: 'boulder',
        country: 'USA',
        hometomwn: 'milwaukee'
    }
}).then(() => {
    console.log('data is saved');
}).catch((e) => {
    console.log('error message is: ', e);
});

database.ref('age').set(31);
database.ref('location/city').set('denver');

//attributes challenge: store their eye color and hair color

database.ref('attributes').set({
    eye_color: 'blue',
    hair_color: 'brown'
}).then(() => {
    console.log('changed attributes successfully');
}).catch((e) => {
    console.log('error here: ', e);
});