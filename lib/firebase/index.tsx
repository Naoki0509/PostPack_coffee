import { useState } from "react";
import { initializeApp, FirebaseApp } from "firebase/app";


export const GolobalViewModel = () => {
  const Inithalize = () => {
    const firebase = initializeApp({
      apiKey: "AIzaSyC1ji6iKlfZEN6gpmLsWOXfwZQ0N5T5DZY",
      authDomain: "postpackcoffee.firebaseapp.com",
      projectId: "postpackcoffee",
      storageBucket: "postpackcoffee.appspot.com",
      messagingSenderId: "773391630646",
      appId: "1:773391630646:web:a6f75f5d49536f3062f397",
      measurementId: "G-Y2K0SEJVP6",
    });
  };
};
