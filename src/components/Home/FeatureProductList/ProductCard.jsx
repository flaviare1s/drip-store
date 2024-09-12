/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

export const ProductCard = ({ produto }) => {
  const preco = parseFloat(produto.preco)
  const desconto = parseFloat(produto.desconto)

  const precoComDesconto = preco * (1 - desconto)

  return (
    <Link to={`/products/${produto.id}`}>
      <div className="font-Inter flex flex-col justify-center items-center p-2.5">
        <div className="flex flex-col bg-white rounded lg:pb-10 pb-8 mb-[10px] lg:mb[18px] h-[160px] lg:h-[321px] w-full">
          {produto.desconto && produto.desconto > 0 && (
            <div className="flex">
              <p className="bg-bright_yellow mt-5 ml-5 px-3 rounded-[30px] text-center text-xs font-bold py-2">
                {produto.desconto * 100}% OFF
              </p>
            </div>
          )}
          <img
            className="bg-white flex flex-col justify-center items-center w-full h-full object-contain p-2.5"
            src={produto.imagem}
            alt={produto.nome}
          />
        </div>
        <div className="flex w-full justify-start">
          <p className="text-light-gray font-bold text-xs leading-6">
            {produto.tipo}
          </p>
        </div>
        <p className="text-dark-gray-2 font-medium md:font-normal text-sm md:text-2xl">
          {produto.marca} {produto.nome} - {produto.sexo}
        </p>
        <div className="flex items-start justify-start w-full">
          {produto.desconto && produto.desconto > 0 && (
            <div className="flex">
              <p className="text-dark-gray font-normal mr-3 text-base md:text-2xl line-through opacity-30">
              ${preco.toFixed(2)}
                        </p>
                        <p className="text-dark-gray font-bold text-base md:text-2xl">
              ${precoComDesconto.toFixed(2)}
                        </p>
            </div>
          )}
          {!produto.desconto && (
            <p className="text-dark-gray font-bold text-base md:text-2xl">
              ${preco.toFixed(2)}
            </p>
          )}
        </div>
      </div>
    </Link>
  );
};
