import "./Footer.css"

const Footer = () => {
    return (
        <div className="container mb-5 footer">
            <div className="row mt-5">
                <div className="col-md-4 newsletter">
                    <h1>UNETE A NUESTRA NEWSLETTER</h1>
                    <p>Enterate de todas nuestras novedades y de los modelos nuevos que vamos sacando.</p>
                    <p>¡Forma parte de nuestra comunidad!</p> 
                    
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" placeholder="Escribenos tu email..." aria-label="Example text with button addon" aria-describedby="button-addon1"/>
                        <button className="btn btn-outline-dark w-25" type="button" id="button-addon1">Enviar</button>
                    </div>
                </div>
                <div className="col-md-4 d-flex flex-column align-items-center gap-2">
                    <a href="#">Política de privacidad</a>
                    <a href="#">Terminos y condiciones</a>
                    <a href="#">Metodos de envio</a>
                    <a href="#">Sobre Dobleuve</a>
                    <a href="#">Contactanos</a>
                    <p className="mt-3">Metodos de pago permitidos:</p>

                    <div className="d-flex justify-content-center gap-4 pay">
                        <i className="bi bi-paypal"></i>
                        <i className="bi bi-credit-card-fill"></i>
                        <i className="bi bi-stripe"></i>
                    </div>

                    
                </div>
                <div className="col-md-4 text-center">
                    <p>Página desarrollada con Bootstrap por:
                        <br/>
                        Diego Garcia Rocha
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Footer