
import './App.css'
import { BrowserRouter as 
          Router,
          Route,
          Switch
        } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer'
import Store from './components/Store'
import ProductDetail from './components/ProductDetail'
import { CartProvider } from './CartContext';
import Home from './components/Home'


function App() {

  return (
    <Router>
      <CartProvider>
      <Navbar />
      <Switch>
        <Route exact path="/" component={ Home }/>
        <Route exact path="/store" component={ Store }/>
        <Route exact path="/product/:id" component={ ProductDetail }/>
      </Switch>
      <Footer />
      </CartProvider>
    </Router>
  )
}

export default App
