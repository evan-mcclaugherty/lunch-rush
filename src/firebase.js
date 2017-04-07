import firebase from 'firebase';

var config = {
  apiKey: "AIzaSyBOhhCBUaS0NEDJ5jidhcXKwWunePuvy1U",
  authDomain: "deleteme-a41d6.firebaseapp.com",
  databaseURL: "https://deleteme-a41d6.firebaseio.com",
  projectId: "deleteme-a41d6",
  storageBucket: "deleteme-a41d6.appspot.com",
  messagingSenderId: "448688906716"
};
firebase.initializeApp(config);

export default firebase;

export const database = firebase.database();
export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();