import firebase from "firebase/app"
import "firebase/auth"

const app = firebase.initializeApp({
    apiKey: "AIzaSyAbH63V5YuU2aDw0L9MX5bvDDYoAjRcSE8",
    authDomain: "hotel-booking-a77ac.firebaseapp.com",
    projectId: "hotel-booking-a77ac",
    storageBucket: "hotel-booking-a77ac.appspot.com",
    messagingSenderId: "1014174177255",
    appId: "1:1014174177255:web:a111c8caf639d67fc4cf42"
})

export const auth = app.auth()
export default app;