import { getProdutos } from "../firebase/produto.js";
import { ProductCard } from "../components/Home/FeatureProductList/ProductCard.jsx";
import { useState, useEffect } from "react";
import { Loader } from "../components/Loader.jsx";

export const Products = () => {
  const [produtos, setProdutos] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getProdutos().then((data) => {
      setProdutos(data);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <section className="text-Inter px-5 bg-purple-50 md:px-[100px] md:pb-[80px] py-10">
      <div className="grid grid-cols-2 md:grid-cols-3 rounded lg:grid-cols-4 0 gap-3 lg:gap-6 lg:gap-y-10">
        {produtos &&
          produtos.map((produto) => (
            <ProductCard key={produto.id} produto={produto} />
          ))}
      </div>
    </section>
  );
};
