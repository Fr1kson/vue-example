import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyD2b0-RrKgjyOc3BO1FF_oGtA8lrOZAACY",
    authDomain: "euphoric-patrol-285305.firebaseapp.com",
    databaseURL: "https://euphoric-patrol-285305.firebaseio.com",
    projectId: "euphoric-patrol-285305",
    storageBucket: "euphoric-patrol-285305.appspot.com",
    messagingSenderId: "891857576",
    appId: "1:891857576:web:d194ba69b79c7d58a0f09d"
};

firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();
