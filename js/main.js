import { initializeApp } from "https://www.gstatic.com/firebasejs/9.5.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.5.0/firebase-analytics.js";
import { getAuth, onAuthStateChanged, signOut} from "https://www.gstatic.com/firebasejs/9.5.0/firebase-auth.js";
const firebaseConfig = {
    apiKey: "AIzaSyBSKg0Qu-gfbQTA0aZ-JmRtM1fEqQDLhXs",
    authDomain: "test-authentic-de3e6.firebaseapp.com",
    databaseURL: "https://test-authentic-de3e6-default-rtdb.firebaseio.com",
    projectId: "test-authentic-de3e6",
    storageBucket: "test-authentic-de3e6.appspot.com",
    messagingSenderId: "289952078847",
    appId: "1:289952078847:web:35c2bddbd711fecf4a25ca",
    measurementId: "G-QJMRZX59D8"
};
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();
const button = document.querySelector('#logout');

// Get user 
  onAuthStateChanged(auth, (user) => {
    if (user) {
    
    } else {
      
    }
  });

// log out
button.addEventListener('click', (e) => {
    e.preventDefault();
      signOut(auth)
        .then(() => {
          window.location = "login.html"
        }).catch((error) => {
          alert(error.message)
        });
  
})
