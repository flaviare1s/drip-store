/* eslint-disable react/prop-types */
export const SearchIcon = ({ hover = true, cursor = true, onClick, hiddenOnLg }) => {
  return (
    <div className={`${cursor ? 'cursor-pointer' : ''} ${hover ? 'group' : ''} ${hiddenOnLg ? 'lg:hidden' : ''}`} onClick={onClick}>
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="9.80547" cy="9.80553" r="7.49047" stroke="#CCCCCC" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="group-hover:stroke-primary" />
        <path d="M15.0153 15.4043L17.9519 18.3334" stroke="#CCCCCC" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="group-hover:stroke-primary"/>
      </svg>

    </div>
  )
}
