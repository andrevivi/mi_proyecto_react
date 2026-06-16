import {useCart} from "../Context/CartContext";
import {Item} from "../Item/Item";

export const CartItem = ({item}) => {
    const {removeItem} = useCart();
    return (
        <Item {...item}>
            <p className="cart-quantity">Cantidad: {item.quantity || 1}</p>
            <button
                className="btn bg-delete primary"
                onClick={() => removeItem(item.id)}
            >
                Eliminar
            </button>
        </Item>
    );
};