import "./Store.css";
import Product from "../Product";
import { useState, useEffect } from "react";
import ShoppingCart from "../ShoppingCart/ShoppingCart";

const Store = () => {
    const [allProducts, setAllProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [cartItems, setCartItems] = useState([]); // Este estado contendrá los productos en el carrito

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

    // Función para agregar un producto al carrito
    const addToCart = (product) => {
        setCartItems(prevCartItems => [...prevCartItems, product]);
    };

    // Función para eliminar un producto del carrito
    const removeFromCart = (productId) => {
        setCartItems(prevCartItems => prevCartItems.filter(item => item.id !== productId));
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div className="container">
            {/* Renderiza los productos */}
            <div className="row lista-products">
                {filteredProducts.map((product) => (
                    <div key={product.id} className="col-lg-4 mb-4">
                        <Product product={product} addToCart={addToCart} />
                    </div>
                ))}
            </div>
            {/* Pasa la lista de productos del carrito al componente ShoppingCart */}
            <ShoppingCart cartItems={cartItems} removeFromCart={removeFromCart} />
        </div>
    );
};

export default Store;
