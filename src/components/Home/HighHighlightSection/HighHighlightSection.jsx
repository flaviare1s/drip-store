import { HighHighlightItem } from "./HighHighlightItem.jsx";
import camisa from "../../../assets/camisa.png";
import fone from "../../../assets/fone.png";
import tenis from "../../../assets/tenis.png";

export const HighHighlightSection = () => {
  return (
    <section className="bg-gray-50 lg:bg-purple-50 flex flex-col p-5 lg:px-[100px]">
      <h2 className="font-bold leading-[24px] tracking-[0.75px] sm:text-2xl sm:leading-[38px] py-2.5">
        Coleções em destaque
      </h2>
      <section className="flex flex-col lg:flex-row gap-3 justify-evenly">
        <HighHighlightItem title="Novo drop Supreme" imagem={camisa} />
        <HighHighlightItem title="Coleção Adidas" imagem={tenis} />
        <HighHighlightItem title="Novo Beat Bass" imagem={fone} />
      </section>
    </section>
  );
};
