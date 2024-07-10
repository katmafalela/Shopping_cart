import React, { useContext } from 'react';
import CartContext from './CartContext';

const Cart = () => {
    const { items, removeItem, clearCart } = useContext(CartContext);

    return (
        <div>
            <h1>My cart</h1>
            <ul>
                {items.map((item) => (
                    <li key={item.id}>
                        {item.name} - ${item.price} x {item.quantity}
                        <button onClick={() => removeItem(item.id)}>Remove</button>
                    </li>
                ))}
            </ul>
            <button onClick={clearCart}>Clear Cart</button>
        </div>
    );
};

export default Cart;
