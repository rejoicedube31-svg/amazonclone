import { Route, Routes } from 'react-router-dom'
import '../styles/App.css'
import Home from './pages/Home.jsx'
import Category from './pages/Category.jsx'
import Checkout from './pages/Cart.jsx'
import { CartProvider} from './Providers.jsx'
import Cart from './pages/Cart.jsx'

function App() {
  return (
    <CartProvider>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category" element={<Category />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>

    </CartProvider>
  )
}

export default App