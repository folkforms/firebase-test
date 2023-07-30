import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { signInWithPopup, signInWithRedirect, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from "firebase/firestore";

// FIXME The api key is unrestricted: https://console.cloud.google.com/apis/credentials?project=folkforms-1
import firebaseConfig from "../api_keys/firebase-config.json";

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
auth.useDeviceLanguage();

const provider = new GoogleAuthProvider();
provider.addScope('https://www.googleapis.com/auth/contacts.readonly');

const signInWithGoogleRedirect = () => signInWithRedirect(auth, provider);
const signInWithGooglePopup = () => signInWithPopup(auth, provider);

const firestore = getFirestore(app);

export { auth, signInWithGoogleRedirect, signInWithGooglePopup, firestore };
