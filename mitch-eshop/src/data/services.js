import {
  doc,
  getDoc,
  collection,
  getDocs,
  where,
  query,
} from "firebase/firestore";
import { db } from "../config/firebase";

export const getAllPedals = async () => {
  const querySnapshot = await getDocs(collection(db, "products"));
  const dataToReturn = querySnapshot.docs.map((pedal) => {
    return {
      id: pedal.id,
      ...pedal.data(),
    };
  });
  console.log(dataToReturn);
  return dataToReturn;
};

export const getCertainPedals = async () => {
  const querySnapshot = await getDocs(
    query(collection(db, "products"), where("company", "==", "BOSS"))
  );
  const dataToReturn = querySnapshot.docs.map((pedal) => {
    return {
      id: pedal.id,
      ...pedal.data(),
    };
  });
  return console.log(dataToReturn);
};

export const getPedalById = async (id) => {
  const docRef = doc(db, "products", id);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    return docSnap.data();
  } else {
    return "No such document!";
  }
};

// export const cleanPedalData = (rawData) => {

// }
