import React from 'react';
import CartContext from './cart-context';

const CartProvider = ({ children }) => {
    return <CartContext.Provider >{children}</CartContext.Provider>;
};

export default CartProvider;
