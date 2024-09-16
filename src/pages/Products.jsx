import { getProdutos } from "../firebase/produto.js";
import { ProductCard } from "../components/Home/FeatureProductList/ProductCard.jsx";
import { useState, useEffect, useRef } from "react";
import { Loader } from "../components/Loader.jsx";
import { FilterComponent } from "../components/Products/FilterComponent.jsx";
import { FilterIcon } from "../components/Products/FilterIcon.jsx";
import { useNavigate } from "react-router-dom";

export const Products = () => {
  const [produtos, setProdutos] = useState([]);
  const [tipoSelecionado, setTipoSelecionado] = useState("");
  const [selectedBrands, setSelectedBrands] = useState({});
  const [selectedCategorias, setSelectedCategorias] = useState({});
  const [selectedGenero, setSelectedGenero] = useState({});
  const [selectedEstado, setSelectedEstado] = useState({});
  const [loading, setLoading] = useState(true);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [ordenacao, setOrdenacao] = useState("preco");
  const [mensagem, setMensagem] = useState("");
  const filterRef = useRef(null);
  const navigate = useNavigate();

  const toggleFilter = () => setIsFilterOpen((prev) => !prev);

  const handleClickOutside = (event) => {
    if (
      filterRef.current &&
      !filterRef.current.contains(event.target) &&
      !event.target.closest(".filter-button")
    ) {
      setIsFilterOpen(false);
    }
  };

  useEffect(() => {
    const fetchProdutos = async () => {
      setLoading(true);
      try {
        let produtosData = await getProdutos();

        // Filtragem por Tipo
        if (tipoSelecionado) {
          produtosData = produtosData.filter(
            (produto) => produto.tipo === tipoSelecionado
          );
        }

        // Filtragem por Gênero
        if (Object.values(selectedGenero).some(Boolean)) {
          const generosSelecionados = Object.keys(selectedGenero).filter(
            (gen) => selectedGenero[gen]
          );
          produtosData = produtosData.filter((produto) =>
            generosSelecionados.includes(produto.sexo)
          );
        }

        // Filtragem por Categoria
        if (Object.values(selectedCategorias).some(Boolean)) {
          const categoriasSelecionadas = Object.keys(selectedCategorias).filter(
            (categoria) => selectedCategorias[categoria]
          );
          produtosData = produtosData.filter((produto) =>
            categoriasSelecionadas.includes(produto.categoria)
          );
        }

        // Filtragem por Marca
        if (Object.values(selectedBrands).some(Boolean)) {
          const marcasSelecionadas = Object.keys(selectedBrands).filter(
            (brand) => selectedBrands[brand]
          );
          produtosData = produtosData.filter((produto) =>
            marcasSelecionadas.includes(produto.marca)
          );
        }

        // Filtragem por Estado
        if (Object.values(selectedEstado).some(Boolean)) {
          const estadosSelecionados = Object.keys(selectedEstado).filter(
            (estado) => selectedEstado[estado]
          );
          produtosData = produtosData.filter((produto) =>
            estadosSelecionados.includes(produto.estado)
          );
        }

        // Ordenação
        if (ordenacao === "preco") {
          produtosData = produtosData.sort((a, b) => a.preco - b.preco);
        } else if (ordenacao === "desconto") {
          produtosData = produtosData.sort((a, b) => b.desconto - a.desconto);
        }

        setProdutos(produtosData);
        if (produtosData.length === 0) {
          setMensagem(
            "Não foram encontrados produtos com essas especificidades!"
          );
        } else {
          setMensagem("");
        }
      } catch (error) {
        console.error("Erro ao buscar produtos:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProdutos();
  }, [
    tipoSelecionado,
    ordenacao,
    selectedGenero,
    selectedCategorias,
    selectedBrands,
    selectedEstado,
  ]);

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
        <button onClick={toggleFilter} className="cel:hidden filter-button">
          <FilterIcon />
        </button>
        {isFilterOpen && (
          <div className="absolute left-[20px] top-[220px] sm:top-[280px] bg-gray-800 bg-opacity-50 z-50 flex justify-center items-center">
            <div ref={filterRef} className="bg-white shadow-lg p-4 cel:hidden">
              <FilterComponent
                onTipoChange={setTipoSelecionado}
                onBrandsChange={setSelectedBrands}
                onCategoriasChange={setSelectedCategorias}
                onGeneroChange={setSelectedGenero}
                onEstadoChange={setSelectedEstado}
                onClick={toggleFilter}
              />
            </div>
          </div>
        )}
      </div>
      <div className="mb-5 md:absolute md:top-[50px]">
        <p className="font-bold text-sm">
          Resultados para {tipoSelecionado} -{" "}
          <span className="font-normal">{produtos.length} produtos</span>
        </p>
      </div>
      <section className="flex flex-col md:flex-row md:gap-7">
        <div className="hidden cel:block">
          <FilterComponent
            onTipoChange={setTipoSelecionado}
            onBrandsChange={setSelectedBrands}
            onCategoriasChange={setSelectedCategorias}
            onGeneroChange={setSelectedGenero}
            onEstadoChange={setSelectedEstado}
          />
        </div>
        {loading ? (
          <Loader />
        ) : (
          <section className="bg-light-gray-4 w-full">
            <div className="grid grid-cols-2 cel:grid-cols-2 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {produtos.map((produto) => (
                <ProductCard key={produto.id} produto={produto} />
              ))}
            </div>
            {mensagem && <p className="text-red-500 font-bold mt-10 text-center">{mensagem}</p>}
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
