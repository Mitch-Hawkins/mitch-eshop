import { doc, getDoc } from "firebase/firestore";
import { db } from "../config/firebase";

export const getPedal = async () => {
  const docRef = doc(db, "products", "7QCKomo75XWHa4T2Axtb");
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    console.log("Document data:", docSnap.data());
  } else {
    // docSnap.data() will be undefined in this case
    console.log("No such document!");
  }
};
