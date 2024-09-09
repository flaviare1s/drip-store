import { useState } from 'react'
import { BurguerIcon } from '../Header/BurguerIcon.jsx'
import { DigitalLogo } from '../Header/DigitalLogo.jsx'
import { CartIcon } from './CartIcon.jsx'
import { SearchIcon } from './SearchIcon.jsx'
import { SearchComponent } from './SearchComponent.jsx'

export const Header = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false)

  const toggleSearch = () => setIsSearchOpen(!isSearchOpen)

  return (
    <header className='p-5'>
      <section className='flex justify-between items-center pb-5'>
        <BurguerIcon />
        <DigitalLogo />
        <div className='flex gap-3'>
          <SearchIcon hover={true} cursor={true} onClick={toggleSearch} />
          <CartIcon />
        </div>
      </section>
        {isSearchOpen && <SearchComponent />}
    </header>
  )
}
