

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import axios from 'axios';
import {  FacebookAuthProvider, GoogleAuthProvider, getAuth } from "firebase/auth";            
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
  apiKey: "AIzaSyD5oOxSddv_21l9DIt-V7_ncBGGP8Htv7Q",
  authDomain: "lonelyplanet-88073.firebaseapp.com",
  databaseURL: "https://lonelyplanet-88073-default-rtdb.firebaseio.com",
  projectId: "lonelyplanet-88073",
  storageBucket: "lonelyplanet-88073.appspot.com",
  messagingSenderId: "475760343086",
  appId: "1:475760343086:web:fdf1b38a454c8fb706c7bf",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const analytics = getAnalytics(app);
export const provider = new GoogleAuthProvider();
export const fprovider = new FacebookAuthProvider();


// Import Axios


// Function to fetch image data from Firebase storage and log it to the console
const fetchAndLogImageData = async (imageUrl) => {
    try {
      // Make a GET request using Axios
      const response = await axios.get(imageUrl, {
        responseType: 'arraybuffer' // Specify response type as arraybuffer to handle binary data
      });
  
      // Log the response data to the console
      console.log(response.data);
    } catch (error) {
      // Handle any errors
      console.error('Error fetching image data:', error);
    }
  };
  
  // Example Firebase storage image URL
  const imageUrl = '';
  
  // Call the function to fetch and log image data
  fetchAndLogImageData(imageUrl);