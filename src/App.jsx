import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Header } from './components/Header/Header.jsx'
import { Home } from './pages/Home.jsx'
import { Footer } from './components/Footer.jsx'
import { Login } from './pages/Login.jsx'
import { Register } from './pages/Register.jsx'
import { Toaster } from 'react-hot-toast'
export function App() {

  return (
    <>
     <BrowserRouter>
     <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Routes>
      <Footer />
     </BrowserRouter>
     <Toaster position='top-center'/>
    </>
  )
}
