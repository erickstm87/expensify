import * as firebase from 'firebase';

const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGINGS_SENDER_ID
};

firebase.initializeApp(config);
const database = firebase.database();

export { firebase, database as default };

// database.ref('expenses')
//     .once('value')
//     .then((snapshot) => {
//         let newArray = [];
//         snapshot.forEach((childSnapshot) => {
//             newArray.push({
//                 id: childSnapshot.key,
//                 ...childSnapshot.val()
//             });
//             console.log(newArray);
//         });
//     })
//     .catch((e) => {
//         console.log('error was created: ', e)
//     })  


// database.ref('expenses').on('child_removed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// database.ref('expenses').on('child_changed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// database.ref('expenses').on('child_added', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// // database.ref('expenses').push({
// //     description: 'rent',
// //     note: 'movin out to the big city!',
// //     amount: 11,
// //     createdAt: '0'
// // });

// // database.ref().on('value', (snapshot) => {
// //     console.log(snapshot.val());
// // });

// // database.ref().on('value', (snapshot) => {
// //     const val = snapshot.val();
// //     console.log(`${val.name} is a ${val.job} and is this many years old, ${val.age}`);
// // }, (e) => {
// //     console.log('error: ', e)
// // })

// // database.ref('expenses').on('value', (snapshot) => {
// //     let newArray = [];
// //     snapshot.forEach((childSnapshot) => {
// //         newArray.push({
// //             id: childSnapshot.key,
// //             ...childSnapshot.val()
// //         });
// //         console.log(newArray);
// //     });
// // });

// // database.ref().once('value')
// //         .then((snapshot) => {
// //             const val = snapshot.val();
// //             console.log(val);
// //         })
// //         .catch((e) => {
// //             console.log('error: ', e);
// //         })

// // database.ref().set({
// //     name: 'tomas',
// //     age: 30,
// //     isSingle: false,
// //     location: {
// //         city: 'boulder',
// //         country: 'USA',
// //         hometown: 'milwaukee'
// //     }
// // }).then(() => {
// //     console.log('data is saved');
// // }).catch((e) => {
// //     console.log('error message is: ', e);
// // });

// // database.ref('age').set(31);
// // database.ref('location/city').set('denver');

// //attributes challenge: store their eye color and hair color

// // database.ref('attributes').set({
// //     eye_color: 'blue',
// //     hair_color: 'brown'
// // }).then(() => {
// //     console.log('changed attributes successfully');
// // }).catch((e) => {
// //     console.log('error here: ', e);
// // });

// // database.ref('isSingle').remove();
// // // database.ref('isSingle').set(null); <-- This is an alternative way to remove data
// // database.ref().update({
// //     name: 'Felipe',
// //     age: 45,
// //     'location/country': 'world',
// //     'job': 'software man'

// // });