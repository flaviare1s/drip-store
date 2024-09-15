import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
export const HighHighlightItem = ({ title, imagem, ctaLink }) => {
  return (
    <article className="relative bg-light-blue rounded-lg p-5 flex justify-between flex-grow min-h-[212px] lg:min-h-[250px]">
      <div className="w-1/2">
        <p className="bg-bright_yellow rounded-[30px] text-center text-xs font-bold py-2 w-[90px]">
          30% OFF
        </p>
        <h2 className="text-[28px] font-bold leading-[36px] sm:text-[32px] sm:leading-[36px] py-2.5">
          {title}
        </h2>
        <Link to={ctaLink} className="bg-white text-primary font-bold py-2 px-4 rounded-lg w-[145px] h-12 hover:bg-primary hover:text-white">
          Comprar
        </Link>
      </div>
      <div className="w-1/2">
        <img
          className="absolute right-0 bottom-0 lg:w-[242px]"
          src={imagem}
          alt="Camisa"
        />
      </div>
    </article>
  );
};
