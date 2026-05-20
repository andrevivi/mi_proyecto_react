import {Item} from '../Item';

export const ItemDetail = ({ Item }) => {
    return (
        <Item {...Item}>
            <button className="btn btn-primary">Agregar al carrito</button>
        </Item>
    );
};