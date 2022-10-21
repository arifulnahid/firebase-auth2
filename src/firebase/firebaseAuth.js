import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { app } from './firebase.init';

export const auth = getAuth(app)
const provider = new GoogleAuthProvider();

export const googleSignIn = () => {
    return signInWithPopup(auth, provider);
}