import { Link } from "react-router-dom"

export const CartIcon = () => {
  return (
    <Link to="/checkout">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M7.42229 19.8203C7.84429 19.8203 8.18729 20.1633 8.18729 20.5853C8.18729 21.0073 7.84429 21.3493 7.42229 21.3493C7.00029 21.3493 6.65829 21.0073 6.65829 20.5853C6.65829 20.1633 7.00029 19.8203 7.42229 19.8203Z" stroke="#C92071" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path fillRule="evenodd" clipRule="evenodd" d="M18.6747 19.8203C19.0967 19.8203 19.4397 20.1633 19.4397 20.5853C19.4397 21.0073 19.0967 21.3493 18.6747 21.3493C18.2527 21.3493 17.9097 21.0073 17.9097 20.5853C17.9097 20.1633 18.2527 19.8203 18.6747 19.8203Z" stroke="#C92071" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M2.74991 3.25L4.82991 3.61L5.79291 15.083C5.87091 16.018 6.65191 16.736 7.58991 16.736H18.5019C19.3979 16.736 20.1579 16.078 20.2869 15.19L21.2359 8.632C21.3529 7.823 20.7259 7.099 19.9089 7.099H5.16391" stroke="#C92071" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M14.1254 10.795H16.8984" stroke="#C92071" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>

    </Link>
  )
}
