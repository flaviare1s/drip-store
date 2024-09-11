import { getProdutos } from "../../../firebase/produto.js";
import { ProductCard } from "./ProductCard.jsx";
import { useState, useEffect } from "react";

export const FeaturedProductList = () => {
  const [produtos, setProdutos] = useState(null);

  function carregarProdutos() {
    getProdutos().then(setProdutos);
  }

  useEffect(() => {
    carregarProdutos();
  }, []);

  return (
    <div className="text-Inter px-5 md:px-[100px] bg-light-gray-3 md:bg-purple-50 md:pb-[80px] pb-10">
      <div className="flex justify-between mb-5 items-center">
        <h1 className="font-bold md:text-2xl">Produtos em alta</h1>
        <a
          className="text-primary font-semibold md:font-normal text-sm md:text-lg tracking-[.75px] hover:font-bold"
          href="#"
        >
          Ver todos →
        </a>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 rounded lg:grid-cols-4 bg-light-gray-3 md:bg-purple-50 gap-3 lg:gap-6 lg:gap-y-10">
        {produtos &&
          produtos.map((produto) => (
            <ProductCard key={produto.id} produto={produto} />
          ))}
      </div>
    </div>
  );
};
