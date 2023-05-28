import { initializeApp, FirebaseApp } from "firebase/app";
import { Firestore, getFirestore } from "firebase/firestore";
import {
  User,
  createUserWithEmailAndPassword,
  getAuth,
  initializeAuth,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useRouter } from "next/router";
import { createContext, useState } from "react";
import { set } from "react-hook-form";
import nookies from "nookies";

export const GlobalContext =
  createContext<ReturnType<typeof useGlobalViewModel>>(null);

export const useGlobalViewModel = () => {
  const [firebase, setFirebase] = useState<{
    firebase?: FirebaseApp;
    firestore?: Firestore;
  }>({
    firebase: null,
    firestore: null,
  });

  const [settionUser, useSessionUser] = useState<User>(null);
  const initialize = () => {
    const firebase = initializeApp({
      apiKey: "AIzaSyC1ji6iKlfZEN6gpmLsWOXfwZQ0N5T5DZY",
      authDomain: "postpackcoffee.firebaseapp.com",
      projectId: "postpackcoffee",
      storageBucket: "postpackcoffee.appspot.com",
      messagingSenderId: "773391630646",
      appId: "1:773391630646:web:a6f75f5d49536f3062f397",
      measurementId: "G-Y2K0SEJVP6",
    });

    const db = getFirestore(firebase);
    setFirebase({
      firebase,
      firestore: db,
    });
  };

  const [LoadingLogin, setLoadingLogin] = useState(false);
  const [Error, setError] = useState(false);

  const SignUp = async (email: string, password: string) => {
    setLoadingLogin(true);
    if (!firebase.firebase) return;
    const auth = getAuth();
    auth.languageCode = "ja";
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        if (userCredential != null && userCredential?.user) {
          useSessionUser(userCredential.user);
          nookies.set(null, "token", userCredential.user.refreshToken, {
            maxAge: 30 * 24 * 60 * 60,
            path: "/",
          });
        }
        setLoadingLogin(false);
      })
      .catch((error) => {
        setError(error);
        setLoadingLogin(false);
      });
  };

  const SignIn = async (email: string, password: string) => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      return user;
    } catch (error) {
      console.log(error);
    }
  };

  const SignOut = async () => {
    try {
      await auth.signOut();
    } catch (error) {
      console.log(error);
    }
  };
  return {
    ...GlobalViewModel,
  };
};
