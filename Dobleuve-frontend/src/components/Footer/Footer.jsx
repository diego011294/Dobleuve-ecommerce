import "./Footer.css"

const Footer = () => {
    return (
        <div className="container mb-5 footer">
            <div className="row mt-5">
                <div className="col-md-4 newsletter">
                    <h1>ÚNETE A NUESTRA NEWSLETTER</h1>
                    <p>Entérate de todas nuestras novedades y de los modelos nuevos que vamos sacando.</p>
                    <p>¡Forma parte de nuestra comunidad!</p>

                    <div className="input-group mb-3">
                        <input type="text" className="form-control" placeholder="Escríbenos tu email..." aria-label="Example text with button addon" aria-describedby="button-addon1" />
                        <button className="btn btn-outline-dark w-25" type="button" id="button-addon1">Enviar</button>
                    </div>
                </div>
                <div className="col-md-4 d-flex flex-column align-items-center gap-2 legal">
                    <a className="text-decoration-none text-dark fw-bold" href="#">Política de privacidad</a>
                    <a className="text-decoration-none text-dark fw-bold" href="#">Términos y condiciones</a>
                    <a className="text-decoration-none text-dark fw-bold" href="#">Métodos de envío</a>
                    <a className="text-decoration-none text-dark fw-bold" href="#">Sobre Dobleuve</a>
                    <a className="text-decoration-none text-dark fw-bold" href="#">Contáctanos</a>
                    <p className="mt-3">Métodos de pago permitidos:</p>

                    <div className="d-flex justify-content-center gap-4 pay">
                        <i className="bi bi-paypal"></i>
                        <i className="bi bi-credit-card-fill"></i>
                        <i className="bi bi-stripe"></i>
                    </div>


                </div>
                <div className="col-md-4 text-center">
                    <p>Página desarrollada por Diego García Rocha para Dobleuve Artesanía. <br />
                        Todos los derechos reservados &copy; 2024</p>
                    <img className="m-3" style={{ maxWidth: '25px' }} src="/public/img/LogoPequenho.svg" alt="Logo pequeño" />
                    <div>
                        <p>Puedes seguirnos en:</p>
                        <div className="d-flex gap-3 justify-content-center " style={{ fontSize: '20px' }}>
                            <i class="bi bi-instagram"></i>
                            <i class="bi bi-github"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Footer