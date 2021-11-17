import firebase from "firebase";

export const firebaseSignup = (email, password) => {
  return firebase.auth().createUserWithEmailAndPassword(email, password);
};
