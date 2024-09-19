/* eslint-disable react/prop-types */
import { SearchIcon } from '../Header/SearchIcon.jsx'

export const SearchComponent = ({ onKeyDown }) => {
  return (
    <div className='relative'>
      <label htmlFor="search">
        <input
          className='font-Inter placeholder:font-Inter bg-light-gray-3 p-4 rounded-lg w-full'
          type="search"
          name="search"
          id="search"
          placeholder="Pesquisar produto..."
          onKeyDown={onKeyDown}
        />
      </label>
      <div className='absolute top-[18px] right-[18px]'>
        <SearchIcon cursor={false} hover={false} />
      </div>
    </div>
  )
}
