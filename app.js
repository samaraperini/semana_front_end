
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-analytics.js";

  const firebaseConfig = {
    apiKey: "AIzaSyA0crxty7p1MWCs6t5KLNZhJBj95MWz6KE",
    authDomain: "semana-front-end-8dccb.firebaseapp.com",
    projectId: "semana-front-end-8dccb",
    storageBucket: "semana-front-end-8dccb.appspot.com",
    messagingSenderId: "874880248845",
    appId: "1:874880248845:web:a8ac1af756ffb72b8f7944",
    measurementId: "G-TD7KRHSSP6"
  };

  const app = initializeApp(firebaseConfig)
  const analytics = getAnalytics(app);
  export default firebaseConfig
