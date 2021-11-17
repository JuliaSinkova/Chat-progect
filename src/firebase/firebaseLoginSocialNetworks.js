import firebase from "firebase";

export const providerGoogle = new firebase.auth.GoogleAuthProvider();
export const providerFacebook = new firebase.auth.FacebookAuthProvider();

export const firebaseLoginSocialNetworks = (provider) => {

    return firebase.auth().signInWithPopup(provider);
};