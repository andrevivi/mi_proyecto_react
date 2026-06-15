import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const CartContext = createContext();

export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error("useCart debe usarse dentro de un CartProvider");
    }
    return context;
};

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const navigate = useNavigate();

    const isInCart = (item) => cart.some((element) => element.id === item.id);

    const addItem = (item) => {
        if (isInCart(item)) {
            alert("El producto ya existe en el carrito");
            return;
        }

        setCart([...cart, item]);
        alert("Producto agregado al carrito");
    };

    const removeItem = (id) => {
        const updatedCart = cart.filter((element) => element.id !== id);
        setCart(updatedCart);
        alert("Producto eliminado del carrito");
    };

   const clearCart = () => {
    setCart([]);
};

const getTotalItems = () => {
    return cart.length;
};
const getCartTotal = () => {
    return cart.reduce((acc, element) => acc + element.price, 0);
};
const checkout = () => {
    alert("Compra realizada con éxito");
    clearCart();
    navigate("/");
};
const values = {
    cart,
    addItem,
    removeItem,
    getTotalItems,
    getCartTotal,
    clearCart,
    checkout,
};
return <CartContext.Provider value={values}>{children}</CartContext.Provider>;

};
