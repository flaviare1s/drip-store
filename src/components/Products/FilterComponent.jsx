/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { CheckSVG } from "./CheckSVG.jsx";
import { RadioSVG } from "./RadioSVG.jsx";

const tipos = ["Tênis", "Camisa", "Calça", "Fone"];
const marcasDefault = {
  Camisa: ["Adidas", "Nike"],
  Calça: ["Pool", "Taco"],
  Tênis: ["Adidas", "K-Swiss", "Nike", "Mizuno", "Fila"],
  Fone: ["Sony", "JBL"],
};
const categoriasDefault = {
  Camisa: ["Esporte e Lazer", "Casual"],
  Calça: ["Esporte e Lazer", "Casual"],
  Tênis: ["Esporte e Lazer", "Casual", "Utilitário", "Corrida"],
  Fone: ["Headset", "Headphone", "Earphone"],
};
const sexo = ["Masculino", "Feminino", "Unissex"];
const estado = ["Novo", "Usado"];

export const FilterComponent = ({
  onTipoChange,
  onBrandsChange,
  onCategoriasChange,
  onGeneroChange,
  onEstadoChange,
  onClick,
}) => {
  const [selectedTipo, setSelectedTipo] = useState("");
  const [selectedBrands, setSelectedBrands] = useState({});
  const [selectedCategorias, setSelectedCategorias] = useState({});
  const [selectedGenero, setSelectedGenero] = useState({});
  const [selectedEstado, setSelectedEstado] = useState({});

  useEffect(() => {
    if (selectedTipo) {
      setSelectedBrands(
        marcasDefault[selectedTipo]?.reduce((acc, marca) => {
          acc[marca] = false;
          return acc;
        }, {})
      );
      setSelectedCategorias(
        categoriasDefault[selectedTipo]?.reduce((acc, categoria) => {
          acc[categoria] = false;
          return acc;
        }, {})
      );
    } else {
      setSelectedBrands(
        marcasDefault["Tênis"]?.reduce((acc, marca) => {
          acc[marca] = false;
          return acc;
        }, {})
      );
      setSelectedCategorias(
        categoriasDefault["Tênis"]?.reduce((acc, categoria) => {
          acc[categoria] = false;
          return acc;
        }, {})
      );
    }

    setSelectedGenero(
      sexo.reduce((acc, item) => {
        acc[item] = false;
        return acc;
      }, {})
    );
    setSelectedEstado(
      estado.reduce((acc, item) => {
        acc[item] = false;
        return acc;
      }, {})
    );
  }, [selectedTipo]);

  const handleTipoChange = (tipo) => {
    setSelectedTipo(tipo);
    onTipoChange(tipo);
    console.log(tipo);
  };

  const handleBrandsChange = (brand) => {
    const newBrands = { ...selectedBrands };
    newBrands[brand] = !newBrands[brand];
    setSelectedBrands(newBrands);
    onBrandsChange(newBrands);
    console.log(newBrands);
  };

  const handleCategoriasChange = (categoria) => {
    const newCategorias = { ...selectedCategorias };
    newCategorias[categoria] = !newCategorias[categoria];
    setSelectedCategorias(newCategorias);
    onCategoriasChange(newCategorias);
  };

  const handleGeneroChange = (sexo) => {
    const newGenero = { ...selectedGenero };
    newGenero[sexo] = !newGenero[sexo];
    setSelectedGenero(newGenero);
    onGeneroChange(newGenero);
  };

  const handleEstadoChange = (estado) => {
    const newEstado = { ...selectedEstado };
    newEstado[estado] = !newEstado[estado];
    setSelectedEstado(newEstado);
    onEstadoChange(newEstado);
  };

  return (
    <section className="w-[308px] bg-white p-[30px] relative">
      <button
        onClick={onClick}
        className="absolute right-[-30px] top-[-30px] p-[30px] font-bold text-primary text-lg cel:hidden"
      >
        X
      </button>
      <h2 className="text-dark-gray-2 pb-5 font-bold">Filtrar por</h2>
      <hr />
      <form className="pt-5">
        <section>
          <h3 className="text-dark-gray-2 font-bold text-sm pb-2.5">Tipo</h3>
          <div className="flex gap-2 ml-[-15px]">
            {tipos.map((tipo) => (
              <label
                key={tipo}
                htmlFor={tipo}
                className="text-dark-gray-2 text-xs font-medium flex items-center cursor-pointer mb-2.5"
              >
                <input
                  type="radio"
                  id={tipo}
                  name="tipo"
                  className="hidden peer"
                  checked={selectedTipo === tipo}
                  onChange={() => handleTipoChange(tipo)}
                />
                <span
                  className={`w-[21px] h-[21px] mr-2 flex items-center justify-center border border-dark-gray-2 rounded-full ${
                    selectedTipo === tipo ? "bg-primary" : ""
                  }`}
                >
                  {selectedTipo === tipo && (
                    <RadioSVG className="w-full h-full text-white" />
                  )}
                </span>
                {tipo}
              </label>
            ))}
          </div>
        </section>

        <section>
          <h3 className="text-dark-gray-2 font-bold text-sm pb-2.5">Marca</h3>
          {Object.keys(selectedBrands).map((marca) => (
            <label
              key={marca}
              htmlFor={marca}
              className="text-dark-gray-2 text-sm font-medium flex items-center cursor-pointer mb-2.5"
            >
              <input
                type="checkbox"
                id={marca}
                className="hidden peer"
                checked={!!selectedBrands[marca]}
                onChange={() => handleBrandsChange(marca)}
              />
              <span className="w-[21px] h-[21px] mr-2 flex items-center justify-center border border-dark-gray-2 rounded-sm">
                {selectedBrands[marca] && (
                  <CheckSVG className="w-full h-full" />
                )}
              </span>
              {marca}
            </label>
          ))}
        </section>

        <section className="mt-5">
          <h3 className="text-dark-gray-2 font-bold text-sm pb-2.5">
            Categoria
          </h3>
          {Object.keys(selectedCategorias).map((categoria) => (
            <label
              key={categoria}
              htmlFor={categoria}
              className="text-dark-gray-2 text-sm font-medium flex items-center cursor-pointer mb-2.5"
            >
              <input
                type="checkbox"
                id={categoria}
                className="hidden peer"
                checked={!!selectedCategorias[categoria]}
                onChange={() => handleCategoriasChange(categoria)}
              />
              <span className="w-[21px] h-[21px] mr-2 flex items-center justify-center border border-dark-gray-2 rounded-sm">
                {selectedCategorias[categoria] && (
                  <CheckSVG className="w-full h-full" />
                )}
              </span>
              {categoria}
            </label>
          ))}
        </section>

        {selectedTipo !== "Fone" && (
          <section className="mt-5">
            <h3 className="text-dark-gray-2 font-bold text-sm pb-2.5">
              Gênero
            </h3>
            {sexo.map((item) => (
              <label
                key={item}
                htmlFor={item}
                className="text-dark-gray-2 text-sm font-medium flex items-center cursor-pointer mb-2.5"
              >
                <input
                  type="checkbox"
                  id={item}
                  className="hidden peer"
                  checked={!!selectedGenero[item]}
                  onChange={() => handleGeneroChange(item)}
                />
                <span className="w-[21px] h-[21px] mr-2 flex items-center justify-center border border-dark-gray-2 rounded-sm">
                  {selectedGenero[item] && (
                    <CheckSVG className="w-full h-full" />
                  )}
                </span>
                {item}
              </label>
            ))}
          </section>
        )}

        {selectedTipo !== "Fone" && (
          <section className="mt-5">
            <h3 className="text-dark-gray-2 font-bold text-sm pb-2.5">
              Estado
            </h3>
            {estado.map((item) => (
              <label
                key={item}
                htmlFor={item}
                className="text-dark-gray-2 text-sm font-medium flex items-center cursor-pointer mb-2.5"
              >
                <input
                  type="checkbox"
                  id={item}
                  className="hidden peer"
                  checked={!!selectedEstado[item]}
                  onChange={() => handleEstadoChange(item)}
                />
                <span className="w-[21px] h-[21px] mr-2 flex items-center justify-center border border-dark-gray-2 rounded-sm">
                  {selectedEstado[item] && (
                    <CheckSVG className="w-full h-full" />
                  )}
                </span>
                {item}
              </label>
            ))}
          </section>
        )}
      </form>
    </section>
  );
};
