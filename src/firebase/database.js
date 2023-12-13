
    import { initializeApp } from "firebase/app";
    import { getFirestore } from "firebase/firestore"


    const firebaseConfig = {
    apiKey: "AIzaSyDhCHwt-7NLbSM4ZroAEThyd1zD5wkNt_U",
    authDomain: "proyectoborrador-46252.firebaseapp.com",
    projectId: "proyectoborrador-46252",
    storageBucket: "proyectoborrador-46252.appspot.com",
    messagingSenderId: "470338618496",
    appId: "1:470338618496:web:682452ca6a84a3b8b69265",
    measurementId: "G-MLPYX6FDG9"
    };

    
    const app = initializeApp(firebaseConfig);
    export const db = getFirestore(app);