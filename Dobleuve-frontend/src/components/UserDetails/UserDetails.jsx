import { useNavigate } from "react-router-dom";
import { useAuth } from "../../AuthContext"
import "./UserDetails.css"

const UserDetails = () => {
    const {user, logout, loading} = useAuth()
    const navigate = useNavigate();


    const handleLogout = async () => {
        await logout()
        navigate("/login")
    }

    if (loading) {
        return <div>Loading...</div>
    }

    return (
        <div>
            <h1>Benvenido/a {user.email}</h1>
            <button onClick={handleLogout}>
                Logout
            </button>
        </div>
    )
}

export default UserDetails