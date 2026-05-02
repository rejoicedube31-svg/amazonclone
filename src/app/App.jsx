import { Route, Routes } from 'react-router-dom'
import '../styles/app.css'
import Home from './pages/Home.jsx'
import Category from './pages/Category.jsx'

function App() {
  

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="Category" element={<Category />} />
    </Routes>
  )
}

export default App
