import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Header } from './components/Header/Header.jsx'
import { Home } from './pages/Home.jsx'
import { Footer } from './components/Footer.jsx'
import { Login } from './pages/Login.jsx'
import { Register } from './pages/Register.jsx'
import { Toaster } from 'react-hot-toast'
import { UserContext } from './contexts/UserContext.jsx'
import { useEffect, useState } from 'react'
import { onAuthStateChanged } from 'firebase/auth'
import { Loader } from './components/Loader.jsx'
import { auth } from './firebase/config.js'
import { ResetPassword } from './pages/ResetPassword.jsx'
import { Products } from './pages/Products.jsx'
import { Orders } from './pages/Orders.jsx'
import { Product } from './pages/Product.jsx'
export function App() {
  const [usuarioLogado, setUsuarioLogado] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUsuarioLogado(user)
      setLoading(false)
    })
  }, [])

  if (loading) {
    return <Loader />
  }

  return (
    <>
     <UserContext.Provider value={usuarioLogado}>
       <BrowserRouter>
       <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='reset-password' element={<ResetPassword />} />
          <Route path='products' element={<Products />} />
          <Route path='products/:id' element={<Product />} />
          <Route path='/orders' element={<Orders />} />
        </Routes>
        <Footer />
       </BrowserRouter>
       <Toaster position='top-center'/>
     </UserContext.Provider>
    </>
  )
}
