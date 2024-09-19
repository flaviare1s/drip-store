import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { buscarProdutos } from "../firebase/produto.js";
import { ProductCard } from "../components/Home/FeatureProductList/ProductCard.jsx";
import { Loader } from "../components/Loader.jsx";

export const SearchResults = () => {
  const { palavraChave } = useParams();
  const [produtos, setProdutos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [mensagem, setMensagem] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProdutos = async () => {
      setLoading(true);
      try {
        const resultados = await buscarProdutos(palavraChave);
        setProdutos(resultados);
        if (resultados.length === 0) {
          setMensagem("Nenhum produto encontrado!");
        }
      } catch (error) {
        console.error("Erro ao buscar produtos:", error);
        setMensagem("Erro ao buscar produtos.");
      } finally {
        setLoading(false);
      }
    };

    fetchProdutos();
  }, [palavraChave]);

  return (
    <section className="px-5 bg-purple-50 lg:px-[100px] lg:pb-[80px] py-10">
      <h2 className="text-lg font-bold mb-5">
        Resultados da busca por: {palavraChave}
      </h2>
      {loading ? (
        <Loader />
      ) : (
        <>
          {produtos.length === 0 ? (
            <p className="text-center md:text-2xl py-24">{mensagem}</p>
          ) : (
            <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {produtos.map((produto) => (
                <ProductCard key={produto.id} produto={produto} />
              ))}
            </div>
          )}
        </>
      )}
      <button
        onClick={() => navigate(-1)}
        className="inline-block py-5 text-primary font-semibold md:font-normal text-sm md:text-lg tracking-[.75px] hover:font-bold"
      >
        ← Voltar
      </button>
    </section>
  );
};
