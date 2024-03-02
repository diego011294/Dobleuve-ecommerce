import React, { useState, useEffect } from 'react';
import './ShoppingCart.css';

const ShoppingCart = ({ cartItems, removeFromCart }) => {
    if (!cartItems || cartItems.length === 0) {
        return <div className='text-center'>No tienes ningún pendiente en el carrito 😞</div>;
    }
    return (
        <div className="shopping-cart">
            <ul className='list-unstyled'>
                {cartItems.map((product) => (
                    <li key={product.id}>
                        <div>
                            <h4>{product.nombre}</h4>
                            <p>Precio: {product.precio}€</p>
                            <button className='btn btn-danger shadow-sm' onClick={() => removeFromCart(product.id)}><i class="bi bi-trash-fill"></i></button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ShoppingCart;
