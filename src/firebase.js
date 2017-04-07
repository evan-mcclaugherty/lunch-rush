import firebase from 'firebase';

var config = {
  apiKey: "AIzaSyDLlBIYqhdWvlwYZY1sZsIwiBJvqo6A1B0",
  authDomain: "reactfirebase-deb93.firebaseapp.com",
  databaseURL: "https://reactfirebase-deb93.firebaseio.com",
  projectId: "reactfirebase-deb93",
  storageBucket: "reactfirebase-deb93.appspot.com",
  messagingSenderId: "411225362050"
};
firebase.initializeApp(config);

export default firebase;

export const database = firebase.database();
export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
