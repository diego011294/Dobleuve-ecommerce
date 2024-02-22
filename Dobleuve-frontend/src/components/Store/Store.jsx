import "./Store.css";
import Product from "../Product";
import { useState, useEffect } from "react";


const Store = () => {
    const [allproducts, setAllProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [textColor, setTextColor] = useState('#000');
    

    const generateRandomColor = () =>{
        return '#' + Math.floor(Math.random() * 16777215).toString(16);
    }

    const changeTextColor = () =>{
        const randomColor = generateRandomColor();
        setTextColor(randomColor);
    }
    

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
        changeTextColor();

        const intervalId = setInterval(changeTextColor, 500)
        return () => clearInterval(intervalId);

    }, []);

    const handleSearch = async (searchTerm) => {
        if (searchTerm.trim() === '') {
            setFilteredProducts(allproducts)
        } else {
            try {
                const response = await fetch(`http://localhost:8080/api/products/search?nombre=${searchTerm}`)
                const data = await response.json()
                setFilteredProducts(data)
            } catch (error) {
                console.log("Error de busqueda de productos: ", error)
            }
        }
    }

    if (loading) {
        return <div>Loading...</div>;
    }
    
    
    

    return (
        <div className="container">
            <div className="text-center p-5 mb-3 store border-bottom border-dark">
                <h1>Dale <span style={{ color: textColor }}>COLOR</span> a tu vida</h1>
                <h3>Nuevos modelos disponibles, 100% artesania gallega</h3>
            </div>
            <div className="input-group mt-5 ms-auto w-50">
                        <input type="text" 
                                className="form-control" 
                                placeholder="Filtra tu busqueda..." 
                                aria-label="Example text with button addon" 
                                aria-describedby="button-addon1"
                                onChange={(e) => handleSearch(e.target.value)}
                                />
                        <button className="btn btn-dark" type="button" id="button-addon1">Buscar</button>
            </div>
            <div className="row lista-products">
                {filteredProducts.map((product) => (
                    <div key={product.id} className="col-lg-4 mb-4">
                        <Product product={product} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Store;
