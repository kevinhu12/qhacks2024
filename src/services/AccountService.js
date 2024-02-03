import { collection, addDoc } from "firebase/firestore"; 
import { db } from "../firebase";

// 
const AccountService = () => {
    const getAccount = (id) => {
      return id + 1;
    }

    const addAccount = async (id) => {
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
    
    return { getAccount }
}

export default AccountService;
