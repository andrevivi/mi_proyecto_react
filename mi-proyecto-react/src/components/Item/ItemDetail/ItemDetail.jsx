import {Item} from '../Item';
import {useCart} from '../../Context/CartContext';

export const ItemDetail = ({ item }) => {
    const {addItem} = useCart();
    return (
        <Item {...item}>
            <button className="btn btn-primary" onClick={() => addItem(item)}>
                Agregar al carrito
            </button>
        </Item>
    );
};