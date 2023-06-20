import { getApps, initializeApp } from "firebase/app";
import {
  User,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { createContext, useEffect, useState } from "react";
import nookies from "nookies";

export const GlobalContext =
  createContext<ReturnType<typeof useGlobalViewModel>>(null);

const useGlobalViewModel = () => {
  const [sessionUser, setSessionUser] = useState<User | null>(null);
  const firebaseConfig = {
    apiKey: "AIzaSyC1ji6iKlfZEN6gpmLsWOXfwZQ0N5T5DZY",
    authDomain: "postpackcoffee.firebaseapp.com",
    projectId: "postpackcoffee",
    storageBucket: "postpackcoffee.appspot.com",
    messagingSenderId: "773391630646",
    appId: "1:773391630646:web:a6f75f5d49536f3062f397",
    measurementId: "G-Y2K0SEJVP6",
  };

  if (getApps().length === 0) {
    initializeApp(firebaseConfig);
  }
  const db = getFirestore();
  const auth = getAuth();

  const [isLonadingLogin, setIsLoadingLogin] = useState(false);
  const [loginError, setLoginError] = useState<string | null>(null);

  const SignUp = async (email: string, password: string) => {
    auth.languageCode = "ja";
    setIsLoadingLogin(true);
    await createUserWithEmailAndPassword(auth, email, password)
      .then(async (userCredential) => {
        if (userCredential != null && userCredential?.user) {
          setSessionUser(userCredential.user);
          nookies.set(null, "session", await userCredential.user.getIdToken(), {
            maxAge: 30 * 24 * 60 * 60,
          });
        }
        setIsLoadingLogin(false);
      })
      .catch((error) => {
        console.log(error);
        setLoginError(error);
        setIsLoadingLogin(false);
      });
  };

  const SignIn = async (email: string, password: string) => {
    auth.languageCode = "ja";
    setIsLoadingLogin(true);
    await signInWithEmailAndPassword(auth, email, password)
      .then(async (userCredential) => {
        if (userCredential != null && userCredential?.user) {
          setSessionUser(userCredential.user);
          nookies.set(null, "session", await userCredential.user.getIdToken(), {
            maxAge: 30 * 24 * 60 * 60,
          });
        }
        setIsLoadingLogin(false);
      })
      .catch((error) => {
        setLoginError(error);
        setIsLoadingLogin(false);
      });
  };

  const SignOut = async () => {
    await auth.signOut();
    nookies.destroy(null, "session");
    setSessionUser(null);
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setSessionUser(user);
      } else {
        setSessionUser(null);
      }
    });
  }, []);

  return {
    db,
    sessionUser,
    isLonadingLogin,
    loginError,
    SignUp,
    SignIn,
    SignOut,
  };
};

export default useGlobalViewModel;
