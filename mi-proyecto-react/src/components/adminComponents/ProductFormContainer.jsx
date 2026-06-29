import { useNavigate } from "react-router-dom";
import "./ProductFormContainer.css";
import { useState } from "react";
import { ProductFormUI } from "./ProductFormUI";
import { validateProduct } from "../../utils/validateProducts";
import { uploadImage } from "../../services/uploadImage";
import { createProduct } from "../../services/productsService";

export const ProductFormContainer = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState({});
    const [file, setFile] = useState(null);
    const [product, setProduct] = useState({
        name: "",
        description: "",
        price: "",
        category: "",
    });

    const hadleChange = (e) => {
        const {name, value} = e.target;
        setProduct({...product, [name]: value});
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0] || null;
        setFile(file);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        setErrors({});
        setLoading(true);

        const newErrors = validateProduct({... product, file});
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            setLoading(false);
            return;
        }
        try {
            const imageUrl = await uploadImage(file);

            const productData = {
                ...product,
                price: parseFloat(product.price),
                image:imageUrl,
            };
            const id = await createProduct(productData);

            setProduct({name: "", price: "", category: "", description: ""});
            setFile(null);
            navigate(`/success/${id}`,{replace:true}); 
        } catch (error) {
            setError({general: error.message});
        } finally {
            setLoading(false);
        }
    };

    return (
        <ProductFormUI
        product={product}
        errors={errors}
        loading={loading}
        onChange={handlechange}
        onFileChange={hsndleFileChange}
        onSubmit={handleSubmit}
        />
    );
};
       
