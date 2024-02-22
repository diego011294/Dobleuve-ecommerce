import { useState, useEffect } from "react"
import "./ProductDetail.css"


const ProductDetail = ({ match }) => {
    const [product, setProduct] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchProductDetail = async () => {
            try {
                const response = await fetch(`http://localhost:8080/api/products/${match.params.id}`)
                const data = await response.json()
                setProduct(data)
            } catch (error) {
                console.error('Error fetching product detail:', error);
            } finally {
                setLoading(false)
            }
        }

        fetchProductDetail();

    }, [match.params.productId]);

    if (loading) {
        return <div>Loading...</div>
    }

    if (!product) {
        return <div>Error: No se pudo cargar el producto</div>
    }

    return (
        <div className="container">
            <div class="card mb-3">
                <div class="row">
                    <div class="col-md-4">
                        <img src={product.imageUrl} class="img-fluid" alt="Product" />
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h1 class="card-title">{product.nombre}</h1>
                            <h4 class="card-text">{product.precio}€</h4>
                            <p class="card-text">{product.descripcion}</p>
                        </div>
                        <div className="info d-flex flex-column">
                                <a class="p-2 border-bottom border-top border-black" data-bs-toggle="collapse" href="#envios" role="button" aria-expanded="false" aria-controls="collapseExample">
                                    Envios
                                </a>
                            <div class="collapse" id="envios">
                                <div class="card card-body">
                                    Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.
                                </div>
                            </div>
                        </div>
                        <div className="buttons d-flex justify-content-evenly">
                            <button className="btn btn-dark text">Comprar &nbsp; <i className="bi bi-basket2-fill"></i></button>
                            <button className="btn btn-danger">¡Lo quiero! &nbsp; <i className="bi bi-heart-fill"></i></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductDetail