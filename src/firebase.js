import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth/cordova";
import { addDoc, collection, getFirestore } from "firebase/firestore/lite";
import { toast } from "react-toastify";


const firebaseConfig = {
    apiKey: "AIzaSyAhAxg8eZ6mq6gJW13h7jKxCaNfYwJVHt4",
    authDomain: "netflix-clone-7b6f6.firebaseapp.com",
    projectId: "netflix-clone-7b6f6",
    storageBucket: "netflix-clone-7b6f6.firebasestorage.app",
    messagingSenderId: "720162910733",
    appId: "1:720162910733:web:bf3be6563bd146bcae5b44"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const signUp = async (name, email, password) => {
    try {
        const res = await createUserWithEmailAndPassword(auth, email, password);
        const user = res.user;
        await addDoc(collection(db, "user"), {
            uid: user.uid,
            name,
            authprovider: "local",
            email,
        });
    } catch (error) {
        console.log(error);
        toast.error(error.code.split('/')[1].split('-').join(" "));
    }
}

const login = async (email, password) => {
    try {
        await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
        console.log(error);
        toast.error(error.code.split('/')[1].split('-').join(" "));
    }
}

const logout = () => {
    signOut(auth);
}

export { auth, db, login, signUp, logout };