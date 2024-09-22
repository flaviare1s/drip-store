import { Link } from "react-router-dom";

export const CartCheckoutResume = () => {
  return (
    <section className="w-full p-[30px] bg-white rounded">
      <h3 className="text-sm font-bold text-dark-gray-2 leading-[22px]">
        RESUMO
      </h3>
      <hr className="bg-light-gray-2 my-5 w-full" />
      <div>
        <div className="flex justify-between pb-5">
          <p className="text-sm font-semibold text-light-gray leading-[22px]">Subtotal:</p>
          <span className="text-dark-gray text-right">R$ 219,00</span>
        </div>
        <div className="flex justify-between pb-5">
          <p className="text-sm font-semibold text-light-gray leading-[22px]">Frete:</p>
          <span className="text-dark-gray text-right">R$ 219,00</span>
        </div>
        <div className="flex justify-between pb-5">
          <p className="text-sm font-semibold text-light-gray leading-[22px]">Desconto:</p>
          <span className="text-dark-gray text-right">R$ 219,00</span>
        </div>
        <div className="flex justify-between">
          <p className="text-lg font-bold text-dark-gray leading-[34px]">Total:</p>
          <span className="text-error text-lg font-bold leading-[34px]">R$ 219,00</span>
        </div>
        <div className="flex justify-end text-light-gray">
          <small>ou 10x de R$ 21,90 sem juros</small>
        </div>
      </div>
      <Link to="/orders" className="block w-full h-10 bg-warning text-light-gray-3 text-center py-2 font-bold leading-6 rounded hover:bg-warning_hover mt-5">Continuar</Link>
    </section>
  );
};
