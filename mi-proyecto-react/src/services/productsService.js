import {
    collection,
    addDoc,
    getDocs,
    getDoc,
    doc,
    query,
    where,
} from "firebase/firestore";
import { db } from "../firebase/config";

const productsRef = collection(db, "products");

export const getProducts = async (category) => {
    try {
        const snapshot = await getDocs(productsRef);

        const productsFormat = snapshot.docs.map((doc) => {
            return { id: doc.id, ...doc.data() };
        });
        return productsFormat;
        } catch (error) {
            console.error("Error al obtener los productos: ", error);
            return [];
    }
};

export const getProductById = async (id) => {
    try {
        const productsRef = doc(db, "products", id);

        const snapshot = await getDoc(productsRef);

        if (snapshot.exists()) {
            const product = { id: snapshot.id, ...snapshot.data() };
            console.log("Doc: ", product);
            return product;
        } else {
            return null;
        }
    } catch (error) {
        console.error("Error al obtener el producto por id: ", error);
        return null;
    }
};

export const getProductsByCategory = async (category) => {
    try {
        let queryRef = productsRef;

        if (category) {
            queryRef = query(productsRef, where("category", "==", category));
        } else {
            queryRef = productsRef;
        }

        const snapshot = await getDocs(queryRef);

        const productsFormat = snapshot.docs.map((doc) => {
            return { id: doc.id, ...doc.data() };
        });
        return productsFormat;
    } catch (error) {
        console.error("Error al filtrar productos: ", error);
        return [];
    }
};

export const createProduct = async (productData) => {
    try {
        const docRef = await addDoc(productsRef, productData);
        return docRef.id;

    } catch (error) {
        console.error("Error al crear el producto: ", error);
         throw error;
    }
};