import "./Home.css"
import React, { useState, useEffect } from 'react';




const Home = () => {
    const [productImage1, setProductImage1] = useState('');
    const [productImage2, setProductImage2] = useState('');
    const [productImage3, setProductImage3] = useState('');

    useEffect(() => {
        const fetchProductImage1 = async () => {
            try {
                const response = await fetch(`http://localhost:8080/api/products/1`);
                const data = await response.json();
                setProductImage1(data.imageUrl);
            } catch (error) {
                console.error('Error fetching product image 1:', error);
            }
        };

        const fetchProductImage2 = async () => {
            try {
                const response = await fetch(`http://localhost:8080/api/products/2`);
                const data = await response.json();
                setProductImage2(data.imageUrl);
            } catch (error) {
                console.error('Error fetching product image 2:', error);
            }
        };

        const fetchProductImage3 = async () => {
            try {
                const response = await fetch(`http://localhost:8080/api/products/4`);
                const data = await response.json();
                setProductImage3(data.imageUrl);
            } catch (error) {
                console.error('Error fetching product image 3:', error);
            }
        };

        fetchProductImage1();
        fetchProductImage2();
        fetchProductImage3();
    }, []);


    return (
        <div className="container-fluid">
            <div className="row linea1">
            <div className=" d-flex align-items-center justify-content-center p-0 descuento gap-3">
                <p className="mt-3 text-white text-center fw-lighter">Obten un 10% de descuento al registrarte<span> | &nbsp; FORMA PARTE DE LA COMUNIDAD</span></p>
                <div className="d-flex gap-3 justify-content-center align-items-center " style={{ fontSize: '15px' }}>
                    <i class="bi bi-instagram text-white opacity-75"></i>
                    <i class="bi bi-github text-white opacity-75"></i>
                </div>
            </div>
                <div className="col-md-6 p-4 imagen1 d-flex flex-column justify-content-center align-items-center">
                    <h1 className="text-center fw-bolder display-4 text-white">
                        DOBLEUVE ARTESANÍA
                    </h1>
                    <h4 className="text-white text-center">
                        Nos dedicamos a trabajar la arcilla polimérica realizando piezas únicas y exclusivas.
                    </h4>
                    <h5 className="text-white mt-5 fw-light">
                        Artesanos desde 2022.
                    </h5>
                </div>
                <div className="d-flex flex-column col-md-3 imagenP">
                    <img src={productImage1} alt="Product 1" className="img-fluid" />
                    <a className="text-decoration-none text-dark detalle mt-2 opacity-75" href={`/product/1`}>Ver detalles &nbsp; <i class="bi bi-arrow-right"></i></a>                  
                </div>
                <div className="col-md-3 imagen2">

                </div>
            </div>
            <div className="row linea2">
                <div className="col-md-3 imagen3">
                    
                </div>
                <div className="col-md-3 d-flex flex-column imagenP">
                    <img src={productImage2} alt="Product 2" className="img-fluid" />
                    <a className="text-decoration-none text-dark detalle mt-2 opacity-75" href={`/product/2`}>Ver detalles &nbsp; <i class="bi bi-arrow-right"></i></a>                  
                </div>
                <div className="col-md-6 imagen4">

                </div>
            </div>
            <div className="row linea3">
                <div className="col-md-4 imagen5">
                    
                </div>
                <div className="col-md-3 d-flex flex-column imagenP">
                    <img src={productImage3} alt="Product 3" className="img-fluid" />
                    <a className="text-decoration-none text-dark detalle mt-2 opacity-75" href={`/product/4`}>Ver detalles &nbsp; <i class="bi bi-arrow-right"></i></a>                  
                </div>
                <div className="col-md-5 p-4 d-flex flex-column justify-content-center align-items-center imagen6">
                <h1 className="text-center fw-bolder display-4 text-dark">
                        NUESTRA TIENDA
                    </h1>
                    <h4 className="text-dark text-center">
                    "Encuentra la belleza en cada detalle. ¡Adelante hacia la elegancia artesanal!"
                    </h4>
                    <a href={"/store"} className="btn shadow-lg btn-dark text-white mt-5 fw-light">
                        Ir a la tienda  &nbsp; <i className="bi bi-basket2-fill"></i>
                    </a>
                </div>
            </div>
        </div>

    )
}

export default Home