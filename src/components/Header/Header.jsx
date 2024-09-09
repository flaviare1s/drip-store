import { useState } from 'react'
import { BurguerIcon } from '../Header/BurguerIcon.jsx'
import { DigitalLogo } from '../Header/DigitalLogo.jsx'
import { CartIcon } from './CartIcon.jsx'
import { SearchIcon } from './SearchIcon.jsx'
import { SearchComponent } from './SearchComponent.jsx'
import { Link } from 'react-router-dom'

export const Header = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false)

  const toggleSearch = () => setIsSearchOpen(!isSearchOpen)

  return (
    <header className='p-5 sm:pt-10 lg:pt-12 sm:pb-[25px] lg:pb-[30px] lg:px-[105px]'>
      <section className='flex justify-between items-center pb-5 sm:pb-[42px] gap-10'>
        <BurguerIcon />
        <DigitalLogo />
        <div className='hidden lg:block w-full'>
          <SearchComponent />
        </div>
        <div className='hidden lg:flex gap-3 items-center justify-center gap-7'>
          <Link className='underline whitespace-nowrap' to='/register'>Cadastre-se</Link>
          <Link to='/login' className='bg-primary h-10 w-[114px] text-white rounded-lg block font-bold text-sm text-center p-2.5 hover:bg-tertiary'>Entrar</Link>
        </div>
        <div className='flex gap-3'>
          <SearchIcon hover={true} cursor={true} onClick={toggleSearch} hiddenOnMd={true} />
          <CartIcon />
        </div>
      </section>
        {isSearchOpen && <SearchComponent hiddenOnMd={false} />}
      <nav className='lg:flex justify-start items-center gap-8 hidden text-dark-gray-2 leading-[28px] tracking-[0.75px]'>
        <Link className='hover:underline hover:text-primary hover:font-bold' to='/'>Home</Link>
        <Link className='hover:underline hover:text-primary hover:font-bold' to='/products'>Produtos</Link>
        <Link className='hover:underline hover:text-primary hover:font-bold' to='/categories'>Categorias</Link>
        <Link className='hover:underline hover:text-primary hover:font-bold' to='/orders'>Meus pedidos</Link>
      </nav>
    </header>
  )
}
