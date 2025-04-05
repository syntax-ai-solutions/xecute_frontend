import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth"; // add this

const firebaseConfig = {
  apiKey: "AIzaSyCiZ97K3OykYIS39TDZS1gl14BzY6Xsz3Q",
  authDomain: "post-pilot-syntax.firebaseapp.com",
  projectId: "post-pilot-syntax",
  storageBucket: "post-pilot-syntax.firebasestorage.app",
  messagingSenderId: "234510384462",
  appId: "1:234510384462:web:cc6a3695f45507cb6e721f",
  measurementId: "G-2WFW7E7NV1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider(); // export this
export default app;
