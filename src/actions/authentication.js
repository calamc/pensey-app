import { firebase, googleProvider } from '../firebase/firebase'

export const login = (uid) => ({
    type: 'LOGIN',
    uid
});

// NAMED EXPORT
// NO ARGUEMENTS

export const startLogin = () => {
    // ASYNC ACTION
    return () => {
        return firebase.auth().signInWithPopup(googleProvider);
    };
};

export const logout = () => ({
    type: 'LOGOUT'
});

export const startLogout = () => {
    return () => {
        return firebase.auth().signOut();
    };
};