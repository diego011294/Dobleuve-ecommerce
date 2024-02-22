import "./Product.css"

const Product = ({ product }) => {
    return (
        <div className="container h-100 p-5 product-card">
            <div>
                <img src={product.imageUrl} class="card-img-top p-3" alt="..."/>
                    <div className="card-body mt-4 p-3">
                        <h2 className="card-title mb-3">{product.nombre}</h2>
                        <p className="card-text">{product.descripcion}</p>
                        <div className="d-flex justify-content-between align-items-center mt-3">
                            <h5 className="card-text">Pecio: {product.precio}€</h5>
                            <a href="#" class="btn btn-dark">Comprar &nbsp; <i class="bi bi-basket2-fill"></i></a>
                        </div>
                    </div>
            </div>
        </div>
    );
};

export default Product