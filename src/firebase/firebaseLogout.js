import firebase from "firebase";

export const firebaseLogout = () => {
  return firebase.auth().signOut();
};
