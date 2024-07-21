import { useState } from 'react'
import './App.css'
import Header from "../src/components/Header"
import AllRoutes from './routes/AllRoutes'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <AllRoutes />
      <Footer />
    </>
  )
}

export default App
