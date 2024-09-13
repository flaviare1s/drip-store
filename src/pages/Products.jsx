import { getProdutos } from "../firebase/produto.js";
import { ProductCard } from "../components/Home/FeatureProductList/ProductCard.jsx";
import { useState, useEffect } from "react";
import { Loader } from "../components/Loader.jsx";
import { FilterComponent } from "../components/Products/FilterComponent.jsx";

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
    <section className="text-Inter px-5 bg-purple-50 lg:px-[100px] lg:pb-[80px] py-10 flex flex-col md:flex-row md:gap-7">
      <div className="hidden md:block">
        <FilterComponent />
      </div>
      <div className="grid grid-cols-2 md:grid-cols-2 rounded xl:grid-cols-3 0 gap-3 lg:gap-6 lg:gap-y-10">
        {produtos &&
          produtos.map((produto) => (
            <ProductCard key={produto.id} produto={produto} />
          ))}
      </div>
    </section>
  );
};
