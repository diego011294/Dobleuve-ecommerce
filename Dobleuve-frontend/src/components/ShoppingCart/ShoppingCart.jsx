import React, { useState, useEffect } from 'react';
import './ShoppingCart.css';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

const ShoppingCart = ({ cartItems, removeFromCart }) => {
    //Función para calcular el precio total de los productos.
    const calculateTotalPrice = () => {
        let totalPrice = 0;
        cartItems.forEach(prodruct => {
            totalPrice += prodruct.precio;
        })
        return totalPrice;
    }

    if (!cartItems || cartItems.length === 0) {
        return <div className='text-center p-3'>No tienes ningún pendiente en el carrito 😞</div>;
    }
    return (
        <div className="shopping-cart">
            <ul className='list-unstyled'>
                {cartItems.map((product) => (
                    <li key={product.id} className='p-3 border-bottom border-black '>
                        <div className=' d-flex justify-content-between gap-3'>
                            <img src={product.imageUrl} style={{ maxWidth: '70px' }} alt={product.name} />
                            <div className='d-flex flex-column'>
                                <h4>{product.nombre}</h4>
                                <div className='d-flex gap-2'>
                                    <p className='unico'>Unique</p>
                                    <p>{product.precio}€</p>
                                </div>
                            </div>
                            <div className='d-flex align-items-center'>
                                <div>
                                    <button className='btn' onClick={() => removeFromCart(product.id)}><i class="bi bi-trash-fill"></i></button>
                                </div>
                                <Link to={`/product/${product.id}`}>
                                    <button className='btn'><i class="bi bi-eye"></i></button>
                                </Link>
                            </div>

                        </div>
                    </li>
                ))}
            </ul>
            <div className='w-100 p-3 pasarela'>

                <p>Total a pagar: <span>{calculateTotalPrice()}€</span></p>
                <p>Descuento aplicado: <strong>0€</strong></p>
                <button className='mt-4 btn btn-dark w-100'>Continuar con el pago</button>

                <div className='border-top border-dark mt-4 p-3'>
                    <h4 className='text-center mb-3'>¿Tienes un cupon de descuento?</h4>
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" placeholder="Escribe tu codigo..." aria-label="Example text with button addon" aria-describedby="button-addon1" />
                        <button className="btn btn-outline-dark w-25" type="button" id="button-addon1">Enviar</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShoppingCart;
