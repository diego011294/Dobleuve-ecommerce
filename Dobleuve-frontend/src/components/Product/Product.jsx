import "./Product.css";
import { Link } from "react-router-dom";
import Modal from 'react-bootstrap/Modal';
import React, { useState, useEffect } from 'react';
import { useAuth } from "../../AuthContext";



const Product = ({ product, addToCart }) => {
    const [showConfirmationModal, setShowConfirmationModal] = useState(false);
    const { user } = useAuth() 

    useEffect(() => {
        if (showConfirmationModal) {
            const timer = setTimeout(() => {
                setShowConfirmationModal(false);
            }, 1000); // Cierra el modal después de 1 segundo (1000 ms)

            return () => clearTimeout(timer); // Limpia el timer al desmontar el componente
        }
    }, [showConfirmationModal]);

    const handleAddToCart = (product) => {
        addToCart(product);
        setShowConfirmationModal(true);
    };

    const handleCloseModal = () => {
        setShowConfirmationModal(false);
    };

    return (
        <div className="container h-100 p-5 product-card">
            <div>
                <Link to={`/product/${product.id}`}>
                    <img src={product.imageUrl} style={{ maxWidth: '470px' }} className="card-img-top p-3" alt="pendiente" />
                </Link>
                <div className="card-body mt-4 p-3">
                    <div className="d-flex justify-content-between">
                        <h2 className="card-title mb-3 titulo-pendiente fs-1">{product.nombre}</h2>
                        <i class="bi bi-heart rounded-circle"></i>
                    </div>
                    <div>
                        <p className="card-text">{product.descripcion}</p>
                    </div>
                    <div className="d-flex justify-content-between align-items-center mt-5 precio-compra">
                        <h5 className="card-text">{product.precio}€</h5>
                        {user ? (
                        <button onClick={() => handleAddToCart(product)} className="btn btn-dark">Comprar &nbsp; <i className="bi bi-basket2-fill"></i></button>
                        ) : (
                            <a href="/login" className="btn btn-dark">Comprar &nbsp; <i className="bi bi-basket2-fill"></i></a>
                        )}
                    </div>
                </div>
            </div>
            {/* Modal de confirmación */}
            <Modal show={showConfirmationModal} onHide={handleCloseModal}>
                <Modal.Header closeButton>
                    <Modal.Title>{product.nombre}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p className="p-3">El producto ha sido añadido al carrito con éxito.</p>
                </Modal.Body>
            </Modal>
        </div>
    );
};

export default Product;
