import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";

export type Product = {
    id: string;
    name: string;
    description: string;
    tags: string[];

}

export const fetchProducts = async (): Promise<Product[]> => {
    const productsRef = collection(db, "products");
    const snapshot = await getDocs(productsRef);
    const products: Product[] = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
    })) as Product[];

    return products;
    
}