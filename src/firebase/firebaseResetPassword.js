import firebase from "firebase";

export const firebaseResetPassword = (email) => {
    return firebase.auth().sendPasswordResetEmail(email);
};