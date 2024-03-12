import "./Navbar.css";
import { useCart } from '../../CartContext';
import Modal from 'react-bootstrap/Modal';
import ShoppingCart from "../ShoppingCart/ShoppingCart";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../AuthContext";

const Navbar = () => {
    const { cartItems, removeFromCart, showCartModal, setShowCartModal } = useCart();
    const location = useLocation();
    const { user, logout } = useAuth()
    const navigate = useNavigate();

    const handleOpenCartModal = () => setShowCartModal(true);

    const handleLogout = async () => {
        await logout()
        navigate("/login")
    }


    return (
        <div>
            <nav className="navbar navbar-expand-md">
                <div className="iconos">
                    {user ? (
                            <div className="d-flex">
                                <div>
                                    <p className="p-2 fs-6 text-white saludo mx-4">👋 ¡{user.displayName || user.email}!</p>
                                </div>
                                <div>
                                    <a onClick={handleLogout} href="/login" className="btn bg-white text-dark mx-3 shadow-sm">Logout</a>
                                    <button className="bolsa-compra" onClick={() => setShowCartModal(true)}>
                                        <i className="bi bi-bag"></i>
                                        {cartItems.length > 0 && <span className="badge bg-dark rounded-circle ms-1">{cartItems.length}</span>}
                                    </button>
                                </div>
                            </div>
                    ) : (
                        <div>
                            <a href="/login" className="btn bg-white text-dark mx-3 shadow-sm">Login</a>
                            <button className="bolsa-compra" onClick={() => setShowCartModal(true)}>
                                <i className="bi bi-bag"></i>
                                {cartItems.length > 0 && <span className="badge bg-dark rounded-circle ms-1">{cartItems.length}</span>}
                            </button>
                        </div>
                    )}
                </div>
                <div className="nav-movil container-fluid d-flex flex-column">
                    <a className="navbar-brand" href="#"><img src="/public/img/Logo VV.SVG" alt="Logo" /></a>
                    <input className="navbar-toggler text-white" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation" id="checkbox" type="checkbox" />
                    <label className="toggle mb-2" htmlFor="checkbox">
                        <div id="bar1" className="bars"></div>
                        <div id="bar2" className="bars"></div>
                        <div id="bar3" className="bars"></div>
                    </label>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <a className={`nav-link text-white mx-3 fw-bold ${location.pathname === '/' ? 'active' : ''}`} href={"/"}>INICIO</a>
                            <a className="nav-link text-white mx-3 disabled" href="#">SOBRE NOSOTROS</a>
                            <a className="nav-link text-white mx-3 disabled" href="#">GALERÍA</a>
                            <a className={`nav-link text-white mx-3 fw-bold ${location.pathname === '/store' ? 'active' : ''}`} href={"/store"}>STORE</a>
                            <a className="nav-link text-white mx-3 disabled" href="#">CONTACTO</a>
                        </div>
                    </div>
                </div>
            </nav>
            <Modal show={showCartModal} onHide={() => setShowCartModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Carrito de Compras</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <ShoppingCart cartItems={cartItems} removeFromCart={removeFromCart} />
                </Modal.Body>
            </Modal>
        </div>
    );
}

export default Navbar;
