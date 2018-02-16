import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyD6bUDRjIc0RhjtOAfGrQVuMb-hFPrQilA",
    authDomain: "pensey-production.firebaseapp.com",
    databaseURL: "https://pensey-production.firebaseio.com",
    projectId: "pensey-production",
    storageBucket: "pensey-production.appspot.com",
    messagingSenderId: "836727340713"
  };

  firebase.initializeApp(config);

  const database = firebase.database();

//   database.ref('isSingle').remove().then(() => {
//     console.log('REMOVED');
//   }).catch((e) => {
//       console.log('DIDNT WORK', e);
//   });

  database.ref().set({
    name: 'Cathal',
    age: 24,
    isSingle: false,
    location: {
        city: 'Longford',
        country: 'IE'
    }
  }).then(() => {
      console.log('Saved data');
  }).catch((e) => {
    console.log('Failed data', e);
  });

  database.ref('age').set(28);
  database.ref('location/city').set('Sligo');

  // att
  database.ref('att').set({
    height: 88,
    weight: 145
  }).then(() => {
      console.log('2nd worked');
  }).catch((e) => {
    console.log('Didnt work for 2nd err');
  });


  // remove data
//   database.ref('isSingle').set(null);



