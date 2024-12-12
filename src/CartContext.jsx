// CartContext.js
import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]); // Manage the cart array globally
    const removeFromCart = (index) => {
        setCart((prevCart) => prevCart.filter((_, i) => i !== index));
    };
    return (
        <CartContext.Provider value={{ cart, setCart ,removeFromCart}}>
            {children}
        </CartContext.Provider>
    );
};
