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
                <div className="col-md-6 p-4 imagen1 d-flex flex-column justify-content-center align-items-center">
                    <h1 className="text-center fw-bolder display-4 text-white">
                        DOBLEUVE ARTESANÍA
                    </h1>
                    <h4 className="text-white text-center">
                        Nos dedicamos a trabajar la arcilla polimérica realizando piezas unicas y exclusivas.
                    </h4>
                    <h5 className="text-white mt-5 fw-light">
                        Artesanos desde 2022.
                    </h5>
                </div>
                <div className="col-md-3 imagenP">
                    <img src={productImage1} alt="Product 1" className="img-fluid" />
                </div>
                <div className="col-md-3 imagen2">

                </div>
            </div>
            <div className="row linea2">
                <div className="col-md-3 imagen3">
                    
                </div>
                <div className="col-md-3 imagenP">
                    <img src={productImage2} alt="Product 2" className="img-fluid" />
                </div>
                <div className="col-md-6 imagen4">

                </div>
            </div>
            <div className="row linea3">
                <div className="col-md-4 imagen5">
                    
                </div>
                <div className="col-md-3 imagenP">
                    <img src={productImage3} alt="Product 3" className="img-fluid" />
                </div>
                <div className="col-md-5 imagen6">

                </div>
            </div>
        </div>
    )
}

export default Home