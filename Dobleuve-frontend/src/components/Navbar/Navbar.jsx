import "./Navbar.css";

const Navbar = () => {
    return (
        <div>
        <nav className="navbar navbar-expand-md">
            <div className="iconos">
                    <a href="#" className="btn bg-white text-dark mx-3 shadow-sm">Login</a>
                    <a href="#"><i class="bi bi-bag"></i></a>
                </div>
            <div className="nav-movil container-fluid d-flex flex-column">
                <a className="navbar-brand" href="#"><img src="/public/img/Logo VV.SVG" alt="Logo" /></a>
                    <input className="navbar-toggler text-white" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation" id="checkbox" type="checkbox"/>
                    <label className="toggle mb-2" htmlFor="checkbox">
                        <div id="bar1" className="bars"></div>
                        <div id="bar2" className="bars"></div>
                        <div id="bar3" className="bars"></div>
                    </label>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <a className="nav-link active text-white mx-3" aria-current="page" href="#">INICIO</a>
                        <a className="nav-link text-white mx-3" href="#">SOBRE NOSOTROS</a>
                        <a className="nav-link text-white mx-3 disabled" href="#">GALERÍA</a>
                        <a className="nav-link text-white mx-3" href="#">TIENDA</a>
                        <a className="nav-link text-white mx-3" href="#">CONTACTO</a>
                    </div>
                </div>
            </div>
        </nav>
    </div>
    )
}

export default Navbar