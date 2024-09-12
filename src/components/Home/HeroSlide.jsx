/* eslint-disable react/prop-types */
import patternMobile from '../../assets/hero-pattern-mobile.png';
import patternDesktop from '../../assets/hero-pattern-desktop.png';
import { Link } from 'react-router-dom';

export const HeroSlide = ({ eyebrown, titulo, descricao, ctaText, ctaLink, imagem }) => {
  return (
    <div className="w-full h-full flex flex-col lg:flex-row-reverse justify-between items-center px-5 lg:pt-[78px] lg:pl-[100px] lg:pr-[37px] bg-light-gray-3">
      <div className="lg:w-[60%] flex justify-center bg">
        <img className="absolute right-0 pt-5 lg:hidden" src={patternMobile} alt="Hero Pattern Mobile" />
        <img className="hidden lg:absolute lg:right-[37px] lg:top-[78px] lg:block" src={patternDesktop} alt="Hero Pattern Mobile" />
        <img className="rotate-4 w-[70%] lg:w-[70%] mr-5 lg:mr-14 mt-3 lg:mb-16" src={imagem} alt="Sneakers" />
      </div>
      <div className="flex flex-col items-center lg:items-start lg:w-[40%] justify-between h-full">
        <div>
          <p className="font-bold text-sm p-5 lg:text-base text-primary lg:text-warning text-center lg:text-left leading-[22px] tracking-[.75px]">
            {eyebrown}
          </p>
          <h1 className="text-[40px] lg:text-[64px] lg:leading-[66px] font-extrabold text-center lg:text-left text-dark-gray leading-[50px] pt-2.5 pb-5 tracking-[1px]">
            {titulo}
          </h1>
          <p className="text-dark-gray-2 text-sm lg:text-lg font-medium leading-[22px] text-center lg:text-left tracking-[.25px] lg:tracking-[.75px]">
            {descricao}
          </p>
        </div>
        <Link to={ctaLink} className="bg-primary hover:bg-tertiary text-light-gray-3 text-base text-center p-3 font-bold leading-6 w-full h-12 lg:w-[220px] rounded-lg tracking-[.75px] mt-10 mb-[18px]">
          {ctaText}
        </Link>
      </div>
    </div>
  );
};
