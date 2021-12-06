import { initializeApp } from "https://www.gstatic.com/firebasejs/9.5.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.5.0/firebase-analytics.js";
import { getAuth, signInWithEmailAndPassword, sendPasswordResetEmail} from "https://www.gstatic.com/firebasejs/9.5.0/firebase-auth.js";

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
const errorinner = document.querySelector("#error");
const LoginForm = document.querySelector("#Login");
const forgot = document.querySelector(".forgot");
const popup = document.querySelector("#mail-verify");
const close = document.querySelector(".close");
const body = document.querySelector(".body");
const signIn = document.querySelector(".sign-in");
/// login form 
const FormMail = document.querySelector("#mail");
const decor = document.querySelectorAll(".decor");

FormMail.addEventListener("submit", (e) => {
    e.preventDefault();
        const email = FormMail['email'].value
        // console.log(email)
        const auth = getAuth();
            sendPasswordResetEmail(auth, email)
                .then(() => {
                    window.location = "login.html"
                })
                .catch((error) => {
                // some error 
                });
})
LoginForm.addEventListener('submit', (e) => {
  e.preventDefault();
    const email = LoginForm['email'].value;
    const password = LoginForm['password'].value;
    const auth = getAuth();
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          window.location = "index.html";
          
        })
        .catch((error) => {
          errorinner.innerHTML = " <p class='text-light'>Bạn đã nhập sai email hoặc mật khẩu</p>"
        });
})

// popup verify email 

forgot.addEventListener("click", (e) => {
  e.preventDefault();
  popup.style.display = "block";
  signIn.style.display = "none";
  body.classList.add("bodyStyle");
  for(let i = 0; i <= decor.length; i++){
      decor[i].src = "img/rabbit.png";
  }
  console.log(decor)
})
close.onclick = function(){
  popup.style.display = "none" ;
  signIn.style.display = "block";
  body.classList.remove("bodyStyle");
  for(let i = 0; i <= decor.length; i++){
    decor[i].src = "img/favorite.png";
}
}
window.onclick = function(event) {
  if (event.target == popup) {
    popup.style.display = "none";
    signIn.style.display = "block";
    body.classList.remove("bodyStyle");
    for(let i = 0; i <= decor.length; i++){
      decor[i].src = "img/favorite.png";
  }
  }
}