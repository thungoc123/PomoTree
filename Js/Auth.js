    import { initializeApp } from "https://www.gstatic.com/firebasejs/9.5.0/firebase-app.js";
    import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.5.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
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

  // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);
    const SignupForm = document.querySelector("#Sign-up");
    const announce = document.querySelector('#announce');
    import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.5.0/firebase-auth.js";





    SignupForm.addEventListener("submit", (e) =>{
    e.preventDefault();
    const email = SignupForm['email'].value;
    const password = SignupForm['password'].value;
    // const lenght = SignupForm['password'].value.length;
   
    const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // sau khi đã đăng nhập được thì xử lý trong đây
            const user = userCredential.user;
            window.location = "index.html"
            // in ra innerHTML bạn đã đăng nhập thành công
            
        })
        .catch((error) => {
            announce.innerHTML = "<p class = 'text-danger'>Địa chỉ email của bạn đã tồn tại</p>"
        });
})

