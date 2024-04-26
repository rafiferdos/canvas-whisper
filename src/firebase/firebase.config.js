import {getAuth} from "firebase/auth"
import { initializeApp } from "firebase/app"

const firebaseConfig = {
  apiKey: "AIzaSyAY7F80W1HoCG8b6gpaqgdNampl0jgAGQc",
  authDomain: "canvas-whisper.firebaseapp.com",
  projectId: "canvas-whisper",
  storageBucket: "canvas-whisper.appspot.com",
  messagingSenderId: "950005159212",
  appId: "1:950005159212:web:58a163e8f065106bf40889"
};


const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
export default auth