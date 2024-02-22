
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

function App() {

  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={ Store }/>
        <Route path="/product/:id" component={ ProductDetail }/>
      </Switch>
      <Footer />
    </Router>
  )
}

export default App
