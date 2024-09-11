/* eslint-disable react/prop-types */
import { useContext } from "react"
import { Link, useNavigate } from "react-router-dom"
import { UserContext } from "../../contexts/UserContext"
import { Button } from "../Button"
import { logout } from "../../firebase/auth"

export const NavBar = ({ setIsMenuOpen }) => {
  const user = useContext(UserContext)

  const navigate = useNavigate()
  const handleCloseMenu = () => {
    setIsMenuOpen(false)
  }

  function handleLogout() {
    logout().then(() => {
      navigate("/login")
    })
  }

  return (
    <section className="flex justify-between w-[80vw] lg:w-full relative">
      <nav className='w-full flex flex-col lg:flex-row lg:justify-start items-start lg:items-center gap-4 lg:gap-8 text-dark-gray-2 leading-[28px] tracking-[0.75px] absolute lg:relative top-0 left-[-20px] z-50 bg-white p-[30px] lg:p-0 h-[100vh] lg:h-auto'>
        <Link className='hover:underline hover:text-primary hover:font-bold' to='/'>Home</Link>
        <Link className='hover:underline hover:text-primary hover:font-bold' to='/products'>Produtos</Link>
        <Link className='hover:underline hover:text-primary hover:font-bold' to='/#categories'>Categorias</Link>
        <Link className='hover:underline hover:text-primary hover:font-bold' to='/orders'>Meus pedidos</Link>

        {!user && (
        <div className='lg:hidden flex flex-col flex-grow items-center justify-center w-full mt-[90px]'>
          <hr className="border-1 border-light-gray-2 w-full" />
          <Link to='/login' className='bg-primary h-10 w-[248px] text-white rounded-lg block font-bold text-sm text-center p-2.5 hover:bg-tertiary my-5'
          onClick={handleCloseMenu}>Entrar</Link>
          <Link className='underline whitespace-nowrap hover:text-primary hover:font-bold' to='/register'
          onClick={handleCloseMenu}>Cadastre-se</Link>
        </div>
        )}

        {user && (
          <div className="lg:hidden flex flex-col flex-grow items-center justify-center w-full mt-[90px]">
            <Button title='Logout' onClick={handleLogout} />
          </div>
        )}
      </nav>
    </section>
  )
}
