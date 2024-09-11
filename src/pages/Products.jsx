import { getProdutos } from "../firebase/produto.js";
import { ProductCard } from "../components/Home/FeatureProductList/ProductCard.jsx";
import { useState, useEffect } from "react";

export const Products = () => {
  const [produtos, setProdutos] = useState(null);

  function carregarProdutos() {
    getProdutos().then(setProdutos);
  }

  useEffect(() => {
    carregarProdutos();
  }, []);

  return (
    <div className="text-Inter px-5 md:px-[100px] bg-gray-50 md:bg-purple-50 md:pb-[80px] py-10">
      <div className="grid grid-cols-2 md:grid-cols-3 rounded lg:grid-cols-4 bg-gray-50 md:bg-purple-50 gap-3 lg:gap-6 lg:gap-y-10">
        {produtos &&
          produtos.map((produto) => (
            <ProductCard key={produto.id} produto={produto} />
          ))}
      </div>
    </div>
  );
};
