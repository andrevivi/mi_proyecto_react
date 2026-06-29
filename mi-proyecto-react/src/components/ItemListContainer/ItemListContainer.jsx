import { useEffect, useState} from "react";
import { ItemList } from "../ItemList/ItemList";
import { getProductsByCategory, getProducts } from "../../services/productsService.js";
import { useParams } from "react-router-dom";

export const ItemListContainer = () => {
    const { category } = useParams();
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);

       
        getProductsByCategory(category)
            
            .then((data) => setProducts(data))
            .catch((error) => console.log("Hubo un error: ", error))
            .finally(() => setLoading(false));
    }, [category]);

    if (loading) return <p>Cargando...</p>;

    return (
        <section>
            <ItemList products={products} />
        </section>
    );
};

