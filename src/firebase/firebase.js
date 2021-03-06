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
// FACEBOOK AUTH
const facebookProvider = new firebase.auth.FacebookAuthProvider();

export { firebase, googleProvider, facebookProvider, database as default };
  // Testing below
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

// Rules for firebase database validation
// I removed this though because it was casuing an error I couldn't solve
// and left with read and write only
// {
//   "rules": {
//     ".read": true,
//     ".write": true,
//       "users": {
//         "$user_id": {
//           ".read": "$user_id === auth.uid",
//           ".write": "$user_id === auth.uid",
//             "expenses": {
//               "$expense_id": {
//                 ".validate": "newData.hasChildren(['title', 'amount', 'details', 'createdAt', 'category', 'km'])",
//                   "title": {
//                     ".validate": "newData.isString() && newData.val().length > 0"
//                   },
//                   "amount": {
//                     ".validate": "newData.isNumber()"
//                   },
//                   "details": {
//                     ".validate": "newData.isString()"
//                   },
//                   "createdAt": {
//                     ".validate": "newData.isNumber()"
//                   },
//                   "category": {
//                     ".validate": "newData.isString()"
//                   },
//                   "km": {
//                     ".validate": "newData.isString()"
//                   },
//                   "$other": {
//               			".validate": false
//             			}      
//               }
//             },
//             "$other": {
//               ".validate": false
//             }
//         }
//       }
//   }
// }

