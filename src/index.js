import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBBP_qHSNl4IaDK227mii2bV-tG4miy2-s",
  authDomain: "lemuria-982d8.firebaseapp.com",
  projectId: "lemuria-982d8",
  storageBucket: "lemuria-982d8.appspot.com",
  messagingSenderId: "946660741760",
  appId: "1:946660741760:web:b5f37533c2a6c7ee644c65"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

