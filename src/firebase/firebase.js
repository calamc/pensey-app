import * as firebase from 'firebase';

const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
  };

firebase.initializeApp(config);

const database = firebase.database();

// GOOGLE AUTHENTICATION LOGIN SYSTEM
const googleProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleProvider, database as default };


//   database.ref('isSingle').remove().then(() => {
//     console.log('REMOVED');
//   }).catch((e) => {
//       console.log('DIDNT WORK', e);
//   });

  // database.ref().set({
  //   name: 'Cathal',
  //   age: 24,
  //   isSingle: false,
  //   location: {
  //       city: 'Longford',
  //       country: 'IE'
  //   }
  // }).then(() => {
  //     console.log('Saved data');
  // }).catch((e) => {
  //   console.log('Failed data', e);
  // });

  // database.ref('age').set(28);
  // database.ref('location/city').set('Sligo');

  // // att
  // database.ref('att').set({
  //   height: 88,
  //   weight: 145
  // }).then(() => {
  //     console.log('2nd worked');
  // }).catch((e) => {
  //   console.log('Didnt work for 2nd err');
  // });


  // remove data
//   database.ref('isSingle').set(null);

// database.ref().once('value').then((snapshot) => {
//   const val = snapshot.val();
//   console.log(val);
// }).catch((e) => {
//   console.log('Error', e);
// });



