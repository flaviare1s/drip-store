// pages/ProductsType.jsx

import { useNavigate } from "react-router-dom";
import { ProductCard } from "../components/Home/FeatureProductList/ProductCard";
import { Loader } from "../components/Loader";
import { useEffect, useState } from "react";
import { getProdutosTipo } from "../firebase/produto";

export const Shirts = () => {
  const [produtos, setProdutos] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedProdutos = await getProdutosTipo("Camisa");
        setProdutos(fetchedProdutos);
      } catch (error) {
        console.error("Erro ao buscar produtos:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <section className="px-5 bg-purple-50 lg:px-[100px] lg:pb-[80px] py-10 md:relative">
      <div className="mb-5">
        <p className="font-bold text-lg">
          Camisetas -{" "}
          <span className="font-normal text-sm">
            {produtos.length} produtos
          </span>
        </p>
      </div>
      <section className="flex flex-col md:flex-row md:gap-7">
        {loading ? (
          <Loader />
        ) : (
          <section className="bg-light-gray-4 w-full">
            <div className="grid grid-cols-2 cel:grid-cols-2 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {produtos.map((produto) => (
                <ProductCard key={produto.id} produto={produto} />
              ))}
            </div>
          </section>
        )}
      </section>
      <button
        onClick={() => navigate(-1)}
        className="inline-block py-5 text-primary font-semibold md:font-normal text-sm md:text-lg tracking-[.75px] hover:font-bold"
      >
        ← Voltar
      </button>
    </section>
  );
};
