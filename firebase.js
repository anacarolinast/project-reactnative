import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyABDKOOPvRKEJpq0YWUIF57tQuhls70KR4",
  authDomain: "project-reactnative-98744.firebaseapp.com",
  projectId: "project-reactnative-98744",
  storageBucket: "project-reactnative-98744.appspot.com",
  messagingSenderId: "114832028222",
  appId: "1:114832028222:web:74e955d81a1e8821cb976f",
  measurementId: "G-BQ0VCYXW1C"
};

const app = initializeApp(firebaseConfig);

export default app;