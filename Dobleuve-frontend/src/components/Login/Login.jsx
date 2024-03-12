import { useAuth, authContext } from "../../AuthContext"
import "./Login.css"
import { useState } from "react"
import { useNavigate } from "react-router-dom";

const Login = () => {

    const [user, setUser] = useState({
        email: "",
        password: "",
    })

    const { login, loginWithGoogle } = useAuth()
    const navigate = useNavigate();
    const [error, setError] = useState()

    const handleChange = ({ target: { name, value } }) => {
        setUser({ ...user, [name]: value })
    }

    const handleSubmit = async e => {
        e.preventDefault()
        setError("")
        try {
            await login(user.email, user.password)
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
            } if (error.code === "auth/invalid-credential") {
                setError("Email o contraseña incorrectos")
            }
            //setError(error.message)
        }
    }

    const handleGoogleSignin = async () => {
        await loginWithGoogle()
        navigate("/");
    }

    return (
        <div className="container-fluid">

            <div className="col-sm-12 d-flex flex-column justify-content-center align-items-center">
                <div>
                    {error && <p className="mt-5 bg-danger p-3 rounded text-white"><i class="bi bi-x-circle"></i> &nbsp; {error}</p>}
                </div>
                <div className="d-flex justify-content-center align-items-center flex-wrap">
                    <div className="login-fondo d-flex justify-content-center flex-column align-items-center gap-2">
                        <h1 className="login-titulo">Login</h1>
                        <h5 className="text-center text-white">¡Entra para empezar a hacer tus compras!</h5>
                        <p className="text-white text-center">Si aún no estas registrado puedes hacerlo usando tu cuenta de google, o con tu correo electrónico</p>
                        <a className="btn bg-white shadow" style={{ maxWidth: '100px' }} href="/register">Registro</a>
                    </div>
                        
                    <div className="d-flex flex-column align-items-center justify-content-center formulario">
                        <form className=" login p-5" style={{ maxWidth: '500px' }} onSubmit={handleSubmit}>
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
                            <div className="d-flex flex-column gap-4 mt-4">
                                <button type="submit" class="btn btn-dark">Login</button>
                                <button className="btn btn-outline-primary" onClick={handleGoogleSignin}>Entra con Google <i class="bi bi-google"></i></button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login