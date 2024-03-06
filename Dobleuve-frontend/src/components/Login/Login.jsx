import { useAuth, authContext } from "../../AuthContext"
import "./Login.css"
import { useState } from "react"
import { useNavigate } from "react-router-dom";

const Login = () => {

    const [user, setUser] = useState({
        email: "",
        password: "",
    })

    const { login } = useAuth()
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

    return (
        <div className="container">
            <div className="col-sm-12 d-flex flex-column justify-content-center">
                {error && <p>{error}</p>}
                <form className="p-5"  style={{maxWidth: '500px' }} onSubmit={handleSubmit}>
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
                    <button type="submit" class="btn btn-dark">Login</button>
                </form>
                <button className="btn btn-danger" onClick={handleGoogleSignin} >Entra con Google <i class="bi bi-google"></i></button>
            </div>
        </div>
    )
}

export default Login