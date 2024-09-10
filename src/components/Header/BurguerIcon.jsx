/* eslint-disable react/prop-types */
export const BurguerIcon = ({ onClick }) => {
  return (
    <div className="lg:hidden cursor-pointer" onClick={onClick}>
      <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M2 12.5H22" stroke="#1F1F1F" strokeWidth="2" strokeLinecap="round" />
      <path d="M2 4.5H22" stroke="#1F1F1F" strokeWidth="2" strokeLinecap="round" />
      <path d="M2 20.5H22" stroke="#1F1F1F" strokeWidth="2" strokeLinecap="round" />
    </svg>
</div>
  )
}
