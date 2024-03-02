import { useState, useEffect, imageRef, useRef } from "react"
import { Link } from "react-router-dom"
import "./ProductDetail.css"


const ProductDetail = ({ match }) => {
    const [product, setProduct] = useState(null)
    const [loading, setLoading] = useState(true)
    const imageRef = useRef(null);

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

    }, [match.params.id]);

    useEffect(() => {
        // Verifica que la referencia exista y la imagen haya sido renderizada
        if (imageRef.current && !loading) {
            const { top } = imageRef.current.getBoundingClientRect();
            const scrollTop = window.scrollY || document.documentElement.scrollTop;
            const offsetTop = top + scrollTop;
            window.scrollTo(0, offsetTop);
        }
    }, [imageRef.current, loading]);

    if (loading) {
        return <div>Loading...</div>
    }

    if (!product) {
        return <div>Error: No se pudo cargar el producto</div>
    }


    return (
        <div className="container p-5 mt-5 detail-card" ref={imageRef}>
            <Link to="/" className="btn btn-dark mb-3"><i class="bi bi-arrow-left-short"></i> Volver a la tienda</Link>
            <div class=" mb-3 p-4">
                <div class="row">
                    <div class="col-md-4">
                        <img src={product.imageUrl} class="img-fluid" alt={product.name} />
                    </div>
                    <div class="col-md-8">
                        <div>
                            <h1 class="card-title">{product.nombre}</h1>
                            <h4 class="card-text">{product.precio}€</h4>
                            <p class="card-text">{product.descripcion}</p>
                        </div>
                        <div className="info d-flex flex-column mt-5">
                            <a class=" d-flex justify-content-between p-2 border-bottom border-top border-black" data-bs-toggle="collapse" href="#envios" role="button" aria-expanded="false" aria-controls="collapseExample">
                                <div className="d-flex gap-3">
                                    <i class="bi bi-truck"></i>
                                    <strong>Envios</strong>
                                </div>
                                <i class="bi bi-arrow-right-short"></i>
                            </a>

                            <div class="collapse" id="envios">
                                <div className="p-3">
                                    El pedido tarda entre 1 y 4 días en procesarse y una vez de camino tardará otras 24-48h en llegar dependiendo de la dirección de envío
                                </div>
                            </div>

                            <a class=" d-flex justify-content-between p-2 border-bottom border-black" data-bs-toggle="collapse" href="#cuidados" role="button" aria-expanded="false" aria-controls="collapseExample">
                                <div className="d-flex gap-3">
                                    <i class="bi bi-exclamation-diamond"></i>
                                    <strong>Cuidados</strong>
                                </div>
                                <i class="bi bi-arrow-right-short"></i>
                            </a>

                            <div class="collapse" id="cuidados">
                                <div className="p-3">
                                    Los pendientes no son frágiles pero si es importante manipularlos con cuidado y guardarlos siempre en cajas o estuches rígidos, sobretodo al viajar.
                                    Para limpiarlos usa acetona pura y un algodón, quedarán como nuevos.
                                </div>
                            </div>

                            <a class=" d-flex justify-content-between p-2 border-bottom border-black" data-bs-toggle="collapse" href="#alergenos" role="button" aria-expanded="false" aria-controls="collapseExample">
                                <div className="d-flex gap-3">
                                    <i class="bi bi-prescription2"></i>
                                    <strong>Alergenos</strong>
                                </div>
                                <i class="bi bi-arrow-right-short"></i>
                            </a>

                            <div class="collapse" id="alergenos">
                                <div className="p-3">
                                    En nuestra colección de pendientes, ofrecemos dos opciones diseñadas específicamente para personas con sensibilidad a los metales.
                                    Por un lado, contamos con pendientes de plata de ley, una opción ideal para aquellos que desean un acabado elegante y duradero sin comprometer la comodidad.
                                    Por otro lado, también ofrecemos pendientes libres de plata, elaborados con materiales alternativos que minimizan el riesgo de irritación cutánea.
                                </div>
                            </div>
                        </div>
                        <div className="buttons text-center mt-5">
                            <button className="btn btn-danger">Añadir a la lista de deseos &nbsp; <i className="bi bi-heart-fill"></i></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductDetail