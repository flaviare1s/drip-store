/* eslint-disable react/prop-types */
import { useForm } from "react-hook-form";

export const CheckoutForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <section className="flex flex-col justify-between items-start p-[30px] bg-purple-50">
      <h1 className="text-dark-gray text-lg font-bold leading-[34px] tracking-[0.75] pb-[6px] md:text-[32px] md:leading-[36px] md:tracking-[1px] md:w-1/2 m-auto">Finalizar Compra</h1>
      <form className="bg-purple-50 w-full rounded mt-[20px] md:w-1/2 m-auto" onSubmit={handleSubmit(onSubmit)}>
        <section className="bg-purple-50 w-full rounded mt-[20px]">
          <div className="bg-white p-[30px] w-full rounded mt-[20px]">
            <h2 className="text-sm font-bold text-dark-gray-2 leading-[22px] tracking-[0.75]">Informações Pessoais</h2>
            <hr className="bg-light-gray-2 my-5 w-full" />
            <div>
              <label className="block text-xs font-bold text-dark-gray-2 leading-[22px] tracking-[0.75]" htmlFor="nome">Nome Completo *</label>
              <input className="w-full p-4 bg-light-gray-3 rounded-lg mt-[5px] mb-5" type="text" id="nome" placeholder="Insira seu nome" {...register("nome", { required: 'Este campo é obrigatório' })} />
              {errors.nome && <small className="text-error">{errors.nome.message}</small>}
            </div>
            <div>
              <label className="block text-xs font-bold text-dark-gray-2 leading-[22px] tracking-[0.75]" htmlFor="cpf">CPF *</label>
              <input className="w-full p-4 bg-light-gray-3 rounded-lg mt-[5px] mb-5" type="text" id="cpf" placeholder="Insira seu CPF" {...register("cpf", {
                required: 'Este campo é obrigatório',
                pattern: {
                  value: /^(?!.*(\d)(?:-?\1){10})(\d{3})(?:\.?)(\d{3})(?:\.?)(\d{3})(?:-?)(\d{2})$/,
                  message: "CPF inválido",
                },
              })} />
              {errors.cpf && <small className="text-error">{errors.cpf.message}</small>}
            </div>
            <div>
              <label className="block text-xs font-bold text-dark-gray-2 leading-[22px] tracking-[0.75]" htmlFor="email">E-mail *</label>
              <input className="w-full p-4 bg-light-gray-3 rounded-lg mt-[5px] mb-5" type="text" id="email" placeholder="Insira seu e-mail" {...register("email", {
                required: 'Este campo é obrigatório',
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  message: "E-mail inválido",
                },
              })} />
              {errors.email && <small className="text-error">{errors.email.message}</small>}
            </div>
            <div>
              <label className="block text-xs font-bold text-dark-gray-2 leading-[22px] tracking-[0.75]" htmlFor="cel">Celular *</label>
              <input className="w-full p-4 bg-light-gray-3 rounded-lg mt-[5px] mb-5" type="tel" id="cel" placeholder="Insira seu celular" {...register("cel", {
                required: 'Este campo é obrigatório',
                pattern: {
                  value: /^\(\d{2}\)\s?\d{5}-?\d{4}$/,
                  message: "Número inválido. Formato: (xx) xxxxx-xxxx",
                },
              })} />
              {errors.cel && <small className="text-error">{errors.cel.message}</small>}
            </div>
          </div>
        </section>
        <section className="mt-[30px] bg-white p-[30px]">
          <button type="submit" className="block w-full h-10 bg-warning text-light-gray-3 text-center py-2 font-bold leading-6 rounded hover:bg-warning_hover">Realizar Pagamento</button>
        </section>
      </form>
    </section>
  );
}
