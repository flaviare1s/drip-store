import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Header } from './components/Header.jsx'
import { Home } from './pages/Home.jsx'
import { Footer } from './components/Footer.jsx'
export function App() {

  return (
    <>
     <BrowserRouter>
     <Header />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
      <Footer />
     </BrowserRouter>
    </>
  )
}
