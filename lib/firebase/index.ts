import { initializeApp } from "firebase/app";
import { Firestore, getFirestore } from "firebase/firestore";
import { User, getAuth } from "firebase/auth";
import { createContext, useState } from "react";
import { FirebaseApp } from "firebase/app";

export const firebase = () => {
  export const GlobalContext =
    createContext<ReturnType<typeof useGlobalViewModel>>(null);
  const useGlobalViewModel = () => {
    const [firebase, setFirebase] = useState<{
      firebase?: FirebaseApp;
      store?: Firestore;
    }>({
      firebase: null,
      store: null,
    });

    const [sessionUser, setSessionUser] = useState<User>(null);
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
      setFirebase({ firebase, store });
    };
  };
};
