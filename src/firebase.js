import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyAuDJ43MR4g_fvDKuUQ-Nh_h8bpM36ClsM",
	authDomain: "letschat-2bb5e.firebaseapp.com",
	projectId: "letschat-2bb5e",
	storageBucket: "letschat-2bb5e.appspot.com",
	messagingSenderId: "488555146056",
	appId: "1:488555146056:web:6ba42e86b3c3651335217d",
	measurementId: "G-MZB34LRE7F",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
