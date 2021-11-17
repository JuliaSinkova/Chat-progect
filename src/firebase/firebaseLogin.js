import firebase from "firebase";
import firebaseConfig from './firebaseConfig';

firebase.initializeApp(firebaseConfig);
export const firebaseLogin = (email, password) => {
    return firebase.auth().signInWithEmailAndPassword(email, password);
};