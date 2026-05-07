import { Route, Routes } from 'react-router-dom'
import '../styles/app.css'
import Home from './pages/Home.jsx'
import Category from './pages/Category.jsx'
import Checkout from './pages/Checkout.jsx'
import { CartProvider} from './providers.jsx'

function App() {
  return (
    <CartProvider>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category" element={<Category />} />
        <Route path="/Checkout" element={<Checkout />} />
      </Routes>

    </CartProvider>
  )
}

export default App