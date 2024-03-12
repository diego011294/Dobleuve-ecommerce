import { useAuth, authContext } from "../../AuthContext"
import "./Register.css"
import { useState } from "react"
import { useNavigate } from "react-router-dom";

const Register = () => {

    const [user, setUser] = useState({
        email: "",
        password: "",
    })

    const { signup } = useAuth()
    const navigate = useNavigate();
    const [error, setError] = useState()

    const handleChange = ({ target: { name, value } }) => {
        setUser({ ...user, [name]: value })
    }

    const handleSubmit = async e => {
        e.preventDefault()
        setError("")
        try {
            await signup(user.email, user.password)
            navigate("/");
        } catch (error) {
            console.log(error.code)
            if (error.code === "auth/internal-error") {
                setError("Correo invalido")
            } else if (error.code === "auth/weak-password") {
                setError("La contraseña tiene que tener al menos 6 carácteres")
            } else if (error.code === "auth/email-already-in-use") {
                setError("Ese correo ya está registrado")
            } else if (error.code === "auth/invalid-email") {
                setError("Correo o contraseña invalidos")
            }
            //setError(error.message)
        }
    }

    return (
        <div className="container-fluid">

        <div className="col-sm-12 d-flex flex-column justify-content-center align-items-center">
            <div>
                {error && <p className="mt-5 bg-danger p-3 rounded text-white"><i class="bi bi-x-circle"></i> &nbsp; {error}</p>}
            </div>
            <div className="d-flex justify-content-center align-items-center flex-wrap">
                <div className="register-fondo d-flex justify-content-center flex-column align-items-center gap-2">
                    <h1 className="login-titulo">Registro</h1>
                    <h5 className="text-center text-white">¡Registrate y obten un codigo de descuento del 10%!</h5>
                    <p className="text-white text-center">Si ya tienes cuenta puedes acceder con tu correo o con la cuenta de Google.</p>
                    <a className="btn bg-white shadow" style={{ maxWidth: '100px' }} href="/login">Login</a>
                </div>
                    
                <div className="d-flex flex-column align-items-center justify-content-center formulario">
                <form className="p-5 login"  style={{maxWidth: '500px' }} onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <label htmlFor="email" class="form-label">Correo electrónico</label>
                                <input type="email" name="email" class="form-control" id="email" aria-describedby="emailHelp" placeholder="tuemail@ejemplo.com"
                                    onChange={handleChange}
                                />
                                <div id="emailHelp" class="form-text">No vamos a compartir tus datos con terceros.</div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="password" class="form-label">Contraseña</label>
                                <input type="password" name="password" class="form-control" id="password" placeholder="******"
                                    onChange={handleChange}
                                />
                                <div id="emailHelp" class="form-text">La contraseña debe de tener al menos 6 carácteres.</div>
                            </div>
                            <button type="submit" class="btn btn-dark">Registrarse</button>
                        </form>
                </div>
            </div>
        </div>
        </div>
    )
}



export default Register