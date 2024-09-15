import {
  getProdutosComDesconto,
  getProdutosOrdenadosPorPreco,
  getProdutosTipo,
} from "../firebase/produto.js";
import { ProductCard } from "../components/Home/FeatureProductList/ProductCard.jsx";
import { useState, useEffect, useRef } from "react";
import { Loader } from "../components/Loader.jsx";
import { FilterComponent } from "../components/Products/FilterComponent.jsx";
import { FilterIcon } from "../components/Products/FilterIcon.jsx";
import { useNavigate } from "react-router-dom";

export const Products = () => {
  const [produtos, setProdutos] = useState([]);
  const [tipoSelecionado, setTipoSelecionado] = useState("Tênis");
  const [loading, setLoading] = useState(true);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [ordenacao, setOrdenacao] = useState("preco");
  const filterRef = useRef(null);
  const navigate = useNavigate()

  const toggleFilter = () => setIsFilterOpen((prev) => !prev);

  const handleClickOutside = (event) => {
    if (filterRef.current && !filterRef.current.contains(event.target)) {
      setIsFilterOpen(false);
    }
  };

  useEffect(() => {
    const fetchProdutos = async () => {
      try {
        let produtosData = [];
        if (ordenacao === "preco") {
          produtosData = await getProdutosOrdenadosPorPreco("asc", tipoSelecionado);
        } else if (ordenacao === "desconto") {
          produtosData = await getProdutosComDesconto(tipoSelecionado);
        } else {
          produtosData = await getProdutosTipo(tipoSelecionado);
        }
        setProdutos(produtosData);
      } catch (error) {
        console.error("Erro ao buscar produtos:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProdutos();
  }, [tipoSelecionado, ordenacao]);

  useEffect(() => {
    if (isFilterOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isFilterOpen]);

  const handleOrdenacaoChange = (event) => {
    setOrdenacao(event.target.value);
  };

  return (
    <section className="px-5 bg-purple-50 lg:px-[100px] lg:pb-[80px] py-10 md:relative">
      <div className="flex gap-2.5 justify-center items-center cel:justify-end w-full mb-5">
        <select
          name="relevancia"
          id="relevancia"
          className="h-[60px] bg-purple-50 border border-dark-gray-2 rounded p-2 w-full cel:w-[332px]"
          onChange={handleOrdenacaoChange}
        >
          <option value="preco">Ordenar por: preço </option>
          <option value="desconto">Ordenar por: mais relevantes</option>
        </select>
        <button onClick={toggleFilter} className="cel:hidden">
          <FilterIcon />
        </button>
        {isFilterOpen && (
          <div className="fixed left-[20px] top-[220px] sm:top-[280px] bg-gray-800 bg-opacity-50 z-50 flex justify-center items-center">
            <div ref={filterRef} className="bg-white shadow-lg p-4 cel:hidden">
              <FilterComponent
                onTipoChange={setTipoSelecionado}
                onClick={toggleFilter}
              />
            </div>
          </div>
        )}
      </div>
      <div className="mb-5 md:absolute md:top-[50px]">
        <p className="font-bold text-sm">Resultados para {tipoSelecionado} - <span className="font-normal">{produtos.length} produtos</span></p>
      </div>
      <section className="flex flex-col md:flex-row md:gap-7">
        <div className="hidden cel:block">
          <FilterComponent onTipoChange={setTipoSelecionado} />
        </div>
        {loading ? (
          <Loader />
        ) : (
          <section className="bg-light-gray-4">
            <div className="grid grid-cols-2 cel:grid-cols-2 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {produtos.map((produto) => (
                <ProductCard key={produto.id} produto={produto} />
              ))}
            </div>
          </section>
        )}
      </section>
      <button onClick={() => navigate(-1)} className="inline-block py-5 text-primary font-semibold md:font-normal text-sm md:text-lg tracking-[.75px] hover:font-bold">← Voltar</button>
    </section>
  );
};
