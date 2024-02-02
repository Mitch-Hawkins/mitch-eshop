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
  // console.log(dataToReturn);
  return dataToReturn;
};

export const getCertainPedals = async () => {
  //aint working yet
  const querySnapshot = await getDocs(
    query(collection(db, "products"), where("id", "==", id))
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
    console.log(docSnap.data());
    return docSnap.data(); //doesnt return the pedals id {id: id, ...docSnap.data()};
  } else {
    return "No such document!";
  }
};

// export const cleanPedalData = (rawData) => {

// }
