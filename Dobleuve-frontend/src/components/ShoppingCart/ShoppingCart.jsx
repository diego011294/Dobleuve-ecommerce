import React, { useState, useEffect } from 'react';
import './ShoppingCart.css';

const ShoppingCart = ({ cartItems, removeFromCart }) => {
    return (
        <div className="shopping-cart">
            <h2>Carrito de Compras</h2>
            <ul>
                {cartItems.map((product) => (
                    <li key={product.id}>
                        <div>
                            <h3>{product.nombre}</h3>
                            <p>Precio: {product.precio}</p>
                            <button onClick={() => removeFromCart(product.id)}>Eliminar</button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ShoppingCart;
