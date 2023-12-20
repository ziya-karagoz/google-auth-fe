import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

export const firebaseApp =
  getApps().length > 0
    ? getApp()
    : initializeApp({
        apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
        authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
      });

export const auth = getAuth(firebaseApp);
export const googleAuthProvider = new GoogleAuthProvider();

export function signinWithGoogle(): ReturnType<typeof signInWithPopup> {
  return signInWithPopup(auth, googleAuthProvider);
}
