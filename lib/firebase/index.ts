import { initializeApp } from "firebase/app";
import { Firestore, getFirestore } from "firebase/firestore";
import {
  User,
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
} from "firebase/auth";
import { createContext, useState } from "react";
import { FirebaseApp } from "firebase/app";

export const GlobalContext =
  createContext<ReturnType<typeof GlobalViewModel>>(null);

export const GlobalViewModel = () => {
  const [firebaseState, setFirebaseState] = useState<{
    firebase?: FirebaseApp;
    firestore?: Firestore;
  }>({
    firebase: null,
    firestore: null,
  });
  const [sessionUser, setSessionUser] = useState<User | null>(null);
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

    const store = getFirestore(firebase);
    setFirebaseState({
      firebase,
      store,
    });
  };
  const [isLoadingLogin, setIsLoadingLogin] = useState(false);
  const [isLoadingResetPassword, setIsLoadingResetPassword] = useState(false);
  const [loginError, setLoginError] = useState(false);
  const [resetPasswordError, setResetPasswordError] = useState(false);

  const signup = async (email: string, password: string) => {
    setIsLoadingLogin(true);
    const auth = getAuth();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      setIsLoadingLogin(false);
    } catch (error) {
      setIsLoadingLogin(false);
      setLoginError(true);
    }
  };

  const login = async (email: string, password: string) => {
    setIsLoadingLogin(true);
    const auth = getAuth();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      setIsLoadingLogin(false);
    } catch (error) {
      setIsLoadingLogin(false);
      setLoginError(true);
    }
  };

  const logout = async () => {
    const auth = getAuth();
    await auth.signOut();
  };

  const resetPassword = async (email: string) => {
    setIsLoadingResetPassword(true);
    const auth = getAuth();
    try {
      await sendPasswordResetEmail(auth, email);
      setIsLoadingResetPassword(false);
    } catch (error) {
      setIsLoadingResetPassword(false);
      setResetPasswordError(true);
    }
  };

  return {
    ...firebaseState,
    initialize,
    sessionUser,
    setSessionUser,
    signup,
    login,
    logout,
    resetPassword,
    isLoadingLogin,
    isLoadingResetPassword,
    loginError,
    resetPasswordError,
  };
};

export default GlobalViewModel;
