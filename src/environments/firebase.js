import firebase from 'firebase/app'

const firebaseConfig = {
    apiKey: "AIzaSyDZZhA5FVJRuk6T1Cl1CNBV3bqfVG4mUeM",
    authDomain: "the-final-project---theshopapp.firebaseapp.com",
    databaseURL: "https://the-final-project---theshopapp.firebaseio.com",
    projectId: "the-final-project---theshopapp",
    storageBucket: "the-final-project---theshopapp.appspot.com",
    messagingSenderId: "429693850043",
    appId: "1:429693850043:web:26c289f2fc3f254263749e",
    measurementId: "G-R3F18X03CC"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;