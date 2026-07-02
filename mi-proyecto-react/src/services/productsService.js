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

const getFallbackProducts = async () => {
    try {
        const response = await fetch("/data/products.json");
        if (!response.ok) {
            return [];
        }
        return await response.json();
    } catch (error) {
        console.error("Error al cargar productos de respaldo: ", error);
        return [];
    }
};

export const getProducts = async () => {
    try {
        const snapshot = await getDocs(productsRef);
        const products = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));

        if (products.length > 0) {
            return products;
        }
    } catch (error) {
        console.error("Error al obtener los productos: ", error);
    }

    return getFallbackProducts();
};

export const getProductById = async (id) => {
    try {
        const productRef = doc(db, "products", id);
        const snapshot = await getDoc(productRef);

        if (snapshot.exists()) {
            return { id: snapshot.id, ...snapshot.data() };
        }
    } catch (error) {
        console.error("Error al obtener el producto por id: ", error);
    }

    const fallbackProducts = await getFallbackProducts();
    return fallbackProducts.find((product) => product.id?.toString() === id?.toString()) || null;
};

export const getProductsByCategory = async (category) => {
    try {
        const queryRef = category
            ? query(productsRef, where("category", "==", category))
            : productsRef;

        const snapshot = await getDocs(queryRef);
        const products = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));

        if (products.length > 0) {
            return products;
        }
    } catch (error) {
        console.error("Error al filtrar productos: ", error);
    }

    const fallbackProducts = await getFallbackProducts();
    if (!category) {
        return fallbackProducts;
    }

    return fallbackProducts.filter((product) => product.category === category);
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