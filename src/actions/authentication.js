import { firebase, googleProvider, facebookProvider } from '../firebase/firebase'

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

export const startFacebookLogin = () => {
    // ASYNC ACTION
    return () => {
        return firebase.auth().signInWithPopup(facebookProvider);
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