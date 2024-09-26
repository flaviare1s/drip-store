import { Link } from "react-router-dom";

export const OrderSuccess = () => {
  return (
    <section className="flex flex-col justify-center items-center p-[30px] bg-purple-50">
      <div className="bg-white p-[30px] w-full rounded mt-[20px] md:w-1/2 m-auto">
        <p className="w-full text-[48px] text-center">🎉</p>
        <h1 className=" text-dark-gray text-[24px] text-center font-bold leading-[34px] tracking-[0.75] md:text-[32px] md:leading-[36px] md:tracking-[1px] md:w-1/2 md:m-auto">Compra Realizada com Sucesso!</h1>
      </div>

      <Link
        to="/"
        className="mt-10 block w-full h-10 bg-warning text-light-gray-3 text-center py-2 font-bold leading-6 rounded hover:bg-warning_hover md:w-1/2 m-auto"
      >
        Voltar para Home
      </Link>
    </section>
  );
};
