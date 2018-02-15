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

  firebase.database().ref().set({
    name: 'Cathal'
  });