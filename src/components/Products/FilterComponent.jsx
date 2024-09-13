import { useState } from "react";
import { CheckSVG } from "./CheckSVG.jsx";
import { RadioSVG } from "./RadioSVG.jsx";

const marcas = ["Adidas", "KSwiss", "Mizuno", "Fila", "AllStar"];
const categorias = ["Esporte e Lazer", "Casual", "Utilitário", "Corrida"];
const genero = ["Masculino", "Feminino", "Unissex"];
const estado = ["Novo", "Usado"];

export const FilterComponent = () => {
  const [selectedBrands, setSelectedBrands] = useState({});
  const [selectedCategorias, setSelectedCategorias] = useState({});
  const [selectedGenero, setSelectedGenero] = useState({});
  const [selectedEstado, setSelectedEstado] = useState({});

  const handleCheckboxChange = (item, type) => {
    const updater = {
      marcas: setSelectedBrands,
      categorias: setSelectedCategorias,
      genero: setSelectedGenero,
      estado: setSelectedEstado
    };

    updater[type]((prev) => ({
      ...prev,
      [item]: !prev[item],
    }));
  };

  return (
    <section className="w-[308px] bg-white p-[30px]">
      <h2 className="text-dark-gray-2 pb-5 font-bold">Filtrar por</h2>
      <hr />
      <form className="pt-5">
        <section>
          <h3 className="text-dark-gray-2 font-bold text-sm pb-2.5">Marca</h3>
          {marcas.map((marca) => (
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
                onChange={() => handleCheckboxChange(marca, "marcas")}
              />
              <span className="w-[21px] h-[21px] mr-2 flex items-center justify-center border border-dark-gray-2 rounded-sm">
                {selectedBrands[marca] && <CheckSVG className="w-full h-full" />}
              </span>
              {marca}
            </label>
          ))}
        </section>

        <section className="mt-5">
          <h3 className="text-dark-gray-2 font-bold text-sm pb-2.5">Categoria</h3>
          {categorias.map((categoria) => (
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
                onChange={() => handleCheckboxChange(categoria, "categorias")}
              />
              <span className="w-[21px] h-[21px] mr-2 flex items-center justify-center border border-dark-gray-2 rounded-sm">
                {selectedCategorias[categoria] && <CheckSVG className="w-full h-full" />}
              </span>
              {categoria}
            </label>
          ))}
        </section>

        <section className="mt-5">
          <h3 className="text-dark-gray-2 font-bold text-sm pb-2.5">Gênero</h3>
          {genero.map((item) => (
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
                onChange={() => handleCheckboxChange(item, "genero")}
              />
              <span className="w-[21px] h-[21px] mr-2 flex items-center justify-center border border-dark-gray-2 rounded-sm">
                {selectedGenero[item] && <CheckSVG className="w-full h-full" />}
              </span>
              {item}
            </label>
          ))}
        </section>

        <section className="mt-5">
          <h3 className="text-dark-gray-2 font-bold text-sm pb-2.5">Estado</h3>
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
                onChange={() => handleCheckboxChange(item, "estado")}
              />
              <span className="w-[21px] h-[21px] mr-2 flex items-center justify-center border border-dark-gray-2 rounded-full">
                {selectedEstado[item] && <RadioSVG className="w-full h-full" />}
              </span>
              {item}
            </label>
          ))}
        </section>
      </form>
    </section>
  );
};
