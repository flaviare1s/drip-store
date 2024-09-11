/* eslint-disable react/prop-types */

export const ProductCard = ({ produto }) => {
  return (
    <section>
        <div className="font-Inter">
          <div className="flex flex-col bg-white rounded lg:pb-10  pb-8 mb-[10px] lg:mb[18px] ">
            <div className="flex">
              <p className="bg-[#E7FF86] mt-5 ml-5 px-3 rounded-[30px] text-center text-xs font-bold py-2">30% OFF</p>
            </div>

            <img className="bg-white top-0 left-0 h-full" src={produto.imagem} alt={produto.nome} />
          </div>
          <p className="text-light-gray font-bold text-xs leading-6">{produto.tipo}</p>
          <p className="text-dark-gray-2 font-medium md:font-normal text-sm md:text-2xl">{produto.nome}</p>
          <div className="flex">
            <p className="text-dark-gray font-normal mr-3 text-base md:text-2xl line-through opacity-30">${parseInt(produto.preco)}</p>
            <p className="text-dark-gray font-bold text-base md:text-2xl">${(produto.preco / 2).toFixed()}</p>
          </div>
        </div>  
    </section>
  )
}
