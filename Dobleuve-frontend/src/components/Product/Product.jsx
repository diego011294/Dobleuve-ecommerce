import { useHistory } from "react-router-dom";
import "./Product.css"

const Product = ({ product }) => {

    const history = useHistory();

    const redirectToDetails = () => {
        //Redirigir a la página de detalles del producto
        history.push(`/product/${product.id}`)
    }

    return (
        <div className="container h-100 p-5 product-card">
            <div>
                <a href={`/product/${product.id}`}>
                    <img src={product.imageUrl} className="card-img-top p-3" alt="pendiente" />
                </a>
                <div className="card-body mt-4 p-3">
                    <div className="d-flex justify-content-between">
                        <h2 className="card-title mb-3">{product.nombre}</h2>
                        <i class="bi bi-heart rounded-circle"></i>
                    </div>
                    <p className="card-text">{product.descripcion}</p>
                    <div className="d-flex justify-content-between align-items-center mt-3">
                        <h5 className="card-text">{product.precio}€</h5>
                        <button className="btn btn-dark">Comprar &nbsp; <i className="bi bi-basket2-fill"></i></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product