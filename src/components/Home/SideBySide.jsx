/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import patternSideBySide from '../../assets/pattern-side-by-side.png';

export const SideBySide = ({ image, eyebrown, title, description, ctaLink, ctaText }) => {
  return (
    <div className='flex flex-col justify-center gap-16 m-auto lg:grid lg:grid-cols-2 pt-14 pl-8 pr-[42px] lg:pt-[106px] lg:pb-[106px] lg:pl-[59px] items-center'>
      <div className="w-full relative pb-[30%]">
        <div className='relative  pb-[57%] w-full lg:grid col-span-1 flex flex-col justify-center items-center m-auto'>
           <img className='absolute top-10 left-0 h-full  w-full' src={image} alt="Sneakers" />
        </div>
        <img className="absolute top-0 left-[50%] translate-x-[-50%] h-full w-[95%]" src={patternSideBySide} alt="Pattern" />
      </div>

      <div className='flex flex-col justify-start lg:grid col-span-1 lg:pr-[159px]'>
        <div>
          <p className='text-warning md:text-primary text-sm font-bold text-left tracking-[.75px]'>{eyebrown}</p>
          <h1 className='text-dark-gray-2 font-bold text-[28px] lg:text-5xl leading-9 lg:leading-[50px] pt-2.5 tracking-[2px] lg:tracking-[1px]'>{title}</h1>
          <p className='text-dark-gray-2 font-medium text-sm lg:text-base leading-[22px] md:leading-7 pt-5 pb-7 tracking-[.25px] lg:tracking-[.75px]'>{description}</p>
          <Link className='bg-primary hover:bg-tertiary text-light-gray-3 text-base text-center p-2 font-bold leading-6 block w-[200px] h-10 mb-[50px] rounded-lg tracking-[.75px]' to={ctaLink}>{ctaText}</Link>
        </div>
      </div>
    </div>
  )
}
