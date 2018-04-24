import { firebase, googleProvider } from '../firebase/firebase'

// export const login = (uid, photoURL, displayName, email) => ({
//     type: 'LOGIN',
//     uid, photoURL, displayName, email
// });

export const login = user => ({
    type: 'LOGIN',
    user
});

// NAMED EXPORT
// NO ARGUEMENTS

export const startLogin = () => {
    // ASYNC ACTION
    return () => {
        return firebase.auth().signInWithPopup(googleProvider);
    };
};

// export const startLogin = () => {
//     return firebase.auth().onAuthStateChanged((user) => {
//         if (user != null) {
//             user.providerData.forEach((profile) => {
//                 console.log("Sign in: " + profile.providerId);
//             })
//         } else {
//             return firebase.auth().signInWithPopup(googleProvider);
//         }
//     })
// }

export const logout = () => ({
    type: 'LOGOUT'
});

export const startLogout = () => {
    return () => {
        return firebase.auth().signOut();
    };
};