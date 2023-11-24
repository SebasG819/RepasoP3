
import { initializeApp } from "firebase/app";

import firebaseConfig from "../firebaseConfig";
import { memory } from "../types/memorys";
import { getFirestore, collection, addDoc } from "firebase/firestore";

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const SaveMemoryInData = async (memory: memory) => {

    try {
         await addDoc(collection(db, "memorys"), memory);
        
      } catch (e) {
        console.error("Error adding document: ", e);
     
      }
}



export default { SaveMemoryInData }