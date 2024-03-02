import "./Navbar.css";
import { useCart } from '../../CartContext';
import Modal from 'react-bootstrap/Modal';
import ShoppingCart from "../ShoppingCart/ShoppingCart";

const Navbar = () => {
    const { cartItems, removeFromCart, showCartModal, setShowCartModal } = useCart();

    const handleOpenCartModal = () => setShowCartModal(true);

    return (
        <div>
                <nav className="navbar navbar-expand-md">
            <div className="iconos">
                    <a href="#" className="btn bg-white text-dark mx-3 shadow-sm">Login</a>
                    <button className="bolsa-compra"  onClick={() => setShowCartModal(true)}>
                        <i className="bi bi-bag"></i>
                        {cartItems.length > 0 && <span className="badge bg-danger rounded-circle">{cartItems.length}</span>}
                    </button>
                </div>
            <div className="nav-movil container-fluid d-flex flex-column">
                <a className="navbar-brand" href="#"><img src="/public/img/Logo VV.SVG" alt="Logo" /></a>
                    <input className="navbar-toggler text-white" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation" id="checkbox" type="checkbox"/>
                    <label className="toggle mb-2" htmlFor="checkbox">
                        <div id="bar1" className="bars"></div>
                        <div id="bar2" className="bars"></div>
                        <div id="bar3" className="bars"></div>
                    </label>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <a className="nav-link active text-white mx-3" aria-current="page" href="#">INICIO</a>
                        <a className="nav-link text-white mx-3" href="#">SOBRE NOSOTROS</a>
                        <a className="nav-link text-white mx-3 disabled" href="#">GALERÍA</a>
                        <a className="nav-link text-white mx-3" href="#">TIENDA</a>
                        <a className="nav-link text-white mx-3" href="#">CONTACTO</a>
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
