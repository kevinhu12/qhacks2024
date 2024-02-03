// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { collection, addDoc, getDocs } from "firebase/firestore"; 
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAKCKFWsdsB-BRhsEm1SQ1u4vrhgs7CrGg",
  authDomain: "qhacks2024.firebaseapp.com",
  projectId: "qhacks2024",
  storageBucket: "qhacks2024.appspot.com",
  messagingSenderId: "153024393987",
  appId: "1:153024393987:web:70fd0018fcb5bd6bc9ef36",
  measurementId: "G-HJKR0HKSXQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);

// Add a landlord into the database
async function addLandlord() {
  try {
    const docRef = await addDoc(collection(db, "landlord"), {
      first: "Ada",
      last: "Lovelace",
      born: 1815
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }  
}

// Get the next tenant
async function getTenant() {
  let retval;
  try {
    const querySnapshot = await getDocs(collection(db, "tenants"));
    
    if (!querySnapshot.empty) {
      retval = querySnapshot.docs[0].data();
      console.log("Document data: ", retval);
    }
  } catch (e) {
    console.error("Error getting document: ", e);
  }
  return retval;
}

export { addLandlord, getTenant };