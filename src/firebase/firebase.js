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

firebase.database().ref().set({
    name: 'tomas'
});
  