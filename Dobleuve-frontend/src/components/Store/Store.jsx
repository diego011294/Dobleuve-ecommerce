import "./Store.css";
import Product from "../Product";
import { useState, useEffect } from "react";
import { useCart } from '../../CartContext';

const Store = () => {
    const { addToCart, removeFromCart: removeFromCartContext } = useCart();
    const [allProducts, setAllProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [cartItems, setCartItems] = useState([]);


    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch('http://localhost:8080/api/products');
                const data = await response.json();
                setAllProducts(data);
                setFilteredProducts(data);
            } catch (error) {
                console.error('Error fetching products:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    const handleSearch = async (searchTerm) => {
        if (searchTerm.trim() === "") {
            setFilteredProducts(allProducts);
        } else {
            try {
                const response = await fetch(
                    `http://localhost:8080/api/products/search?nombre=${searchTerm}`
                );
                const data = await response.json();
                setFilteredProducts(data);
            } catch (error) {
                console.error("Error searching products:", error);
            }
        }
    };

    const handleAddToCart = (product) => {
        addToCart(product);
        setCartItems(prevCartItems => [...prevCartItems, product]);
    };

    const handleRemoveFromCart = (productId) => {
        const updatedCartItems = cartItems.filter(item => item.id !== productId);
        setCartItems(updatedCartItems);
        removeFromCartContext(productId); // Pasar el ID o el objeto del producto según sea necesario por el contexto
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div className="container">
            <div className="d-flex flex-column align-items-center">
            <div className="text-center store">
                <h1>¡Elige tu estilo!</h1>
                <h3>Nuevos modelos disponibles, hechos totalmente a mano.</h3>
                <h5>Tambien puedes personalizarlos a tu gusto.</h5>
            </div>
            <div className="input-group mt-3" style={{ maxWidth: '500px' }}>
                <input
                    type="text"
                    className="form-control"
                    placeholder="Filtra tu busqueda..."
                    aria-label="Example text with button addon"
                    aria-describedby="button-addon1"
                    onChange={(e) => handleSearch(e.target.value)}
                />
                <button className="btn btn-dark" type="button" id="button-addon1">
                    Buscar
                </button>
            </div>
            </div>
            {/* Renderiza los productos */}
            <div className="row lista-products">
                {filteredProducts.map((product) => (
                    <div key={product.id} className="col-lg-4 mb-4">
                        <Product product={product} addToCart={handleAddToCart} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Store;
