import { getProdutosTipo } from "../firebase/produto.js";
import { ProductCard } from "../components/Home/FeatureProductList/ProductCard.jsx";
import { useState, useEffect } from "react";
import { Loader } from "../components/Loader.jsx";
import { FilterComponent } from "../components/Products/FilterComponent.jsx";

export const Products = () => {
  const [produtos, setProdutos] = useState([]);
  const [tipoSelecionado, setTipoSelecionado] = useState("Tênis");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProdutos = async () => {
      try {
        const produtosData = await getProdutosTipo(tipoSelecionado);
        setProdutos(produtosData);
      } catch (error) {
        console.error("Erro ao buscar produtos:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProdutos();
  }, [tipoSelecionado]);

  return (
    <section className="text-Inter px-5 bg-purple-50 lg:px-[100px] lg:pb-[80px] py-10 flex flex-col md:flex-row md:gap-7">
      <FilterComponent onTipoChange={setTipoSelecionado} />
      {loading ? (
        <Loader />
      ) : (
        <section className="bg-light-gray-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {produtos.map((produto) => (
              <ProductCard key={produto.id} produto={produto} />
            ))}
          </div>
        </section>
      )}
    </section>
  );
};
