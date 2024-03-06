
import './App.css'
import {
  BrowserRouter as
    Router,
  Route,
  Routes,
} from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer'
import Store from './components/Store'
import ProductDetail from './components/ProductDetail'
import { CartProvider } from './CartContext'
import { AuthProvider } from './AuthContext'
import Home from './components/Home'
import Login from './components/Login'
import Register from './components/Register'
import UserDetails from './components/UserDetails'
import ProtectedRoute from './ProtectedRoute'




function App() {

  return (
    <AuthProvider>
    <Router>
      <CartProvider>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/store" element={<Store />} />
          <Route exact path="/product/:id" element={<ProductDetail />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/user" element={<UserDetails />} />
        </Routes>
        <Footer />
      </CartProvider>
    </Router>
  </AuthProvider>
  )
}

export default App
