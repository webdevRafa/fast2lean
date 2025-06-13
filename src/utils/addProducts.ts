import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";

import products from "../../products.json";

export const uploadProducts = async () => {
    try {
        const colRef = collection(db, "products");
        for (const product of products) {
            await addDoc(colRef, product);
        }
        console.log("Products Uploaded!");
    } catch (error) {
        console.error("Upload error:", error);
    }
};