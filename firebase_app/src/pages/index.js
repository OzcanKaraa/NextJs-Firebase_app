import { db } from "@/firebase";
import { collection, addDoc } from "firebase/firestore"; 
export default function Home() {
  const addData = async ()=>{
try {
  const docRef = await addDoc(collection(db, "users"), {
    first: "Ozcan",
    last: "Kara",
    born: 2000
  });
  console.log("Document written with ID: ", docRef.id);
} catch (e) {
  console.error("Error adding document: ", e);
}
  }
  return (
    <div> 
      <button onClick={addData}>
        Add Data
      </button>
    </div>
  )
}