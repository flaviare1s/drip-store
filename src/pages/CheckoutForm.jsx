/* eslint-disable react/prop-types */
import { useForm } from "react-hook-form";
import { RadioSVG } from "../components/Products/RadioSVG";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const CheckoutForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setValue,
  } = useForm();
  const cep = watch("cep");
  const [selectedOption, setSelectedOption] = useState("");
  const navigate = useNavigate()

  const onSubmit = async () => {
    navigate("/order-success")
  };

  useEffect(() => {
    const fetchAddress = async () => {
      const cepLimpo = cep?.replace(/\D/g, "");

      if (cepLimpo?.length === 8) {
        try {
          const response = await fetch(`https://viacep.com.br/ws/${cepLimpo}/json/`);
          const data = await response.json();

          if (!data.erro) {
            setValue("endereco", data.logradouro || "");
            setValue("bairro", data.bairro || "");
            setValue("cidade", data.localidade || "");
          }
        } catch (error) {
          console.error("Erro ao buscar o CEP:", error);
        }
      }
    };

    fetchAddress();
  }, [cep, setValue]);
  

  return (
    <section className="flex flex-col justify-between items-start p-[30px] bg-purple-50">
      <h1 className="text-dark-gray text-lg font-bold leading-[34px] tracking-[0.75] md:text-[32px] md:leading-[36px] md:tracking-[1px] md:w-1/2 md:m-auto">
        Finalizar Compra
      </h1>
      <form
        className="bg-purple-50 w-full rounded mt-[10px] md:w-1/2 m-auto"
        onSubmit={handleSubmit(onSubmit)}
      >
        <section className="bg-purple-50 w-full rounded">
          <div className="bg-white p-[30px] w-full rounded mt-[20px]">
            <h2 className="text-sm font-bold text-dark-gray-2 leading-[22px] tracking-[0.75]">
              Informações Pessoais
            </h2>
            <hr className="bg-light-gray-2 my-5 w-full" />
            <div>
              <label
                className="block text-xs font-bold text-dark-gray-2 leading-[22px] tracking-[0.75]"
                htmlFor="nome"
              >
                Nome Completo *
              </label>
              <input
                className="w-full p-4 bg-light-gray-3 rounded-lg mt-[5px]"
                type="text"
                id="nome"
                placeholder="Insira seu nome"
                {...register("nome", { required: "Este campo é obrigatório" })}
              />
              {errors.nome && (
                <small className="text-error mb-5">{errors.nome.message}</small>
              )}
            </div>
            <div className="mt-5">
              <label
                className="block text-xs font-bold text-dark-gray-2 leading-[22px] tracking-[0.75]"
                htmlFor="cpf"
              >
                CPF *
              </label>
              <input
                className="w-full p-4 bg-light-gray-3 rounded-lg mt-[5px]"
                type="text"
                id="cpf"
                placeholder="Insira seu CPF"
                {...register("cpf", {
                  required: "Este campo é obrigatório",
                  pattern: {
                    value:
                      /^(?!.*(\d)(?:-?\1){10})(\d{3})(?:\.?)(\d{3})(?:\.?)(\d{3})(?:-?)(\d{2})$/,
                    message: "CPF inválido",
                  },
                })}
              />
              {errors.cpf && (
                <small className="text-error mb-5">{errors.cpf.message}</small>
              )}
            </div>
            <div className="mt-5">
              <label
                className="block text-xs font-bold text-dark-gray-2 leading-[22px] tracking-[0.75]"
                htmlFor="email"
              >
                E-mail *
              </label>
              <input
                className="w-full p-4 bg-light-gray-3 rounded-lg mt-[5px]"
                type="text"
                id="email"
                placeholder="Insira seu e-mail"
                {...register("email", {
                  required: "Este campo é obrigatório",
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                    message: "E-mail inválido",
                  },
                })}
              />
              {errors.email && (
                <small className="text-error mb-5">
                  {errors.email.message}
                </small>
              )}
            </div>
            <div className="mt-5">
              <label
                className="block text-xs font-bold text-dark-gray-2 leading-[22px] tracking-[0.75]"
                htmlFor="cel"
              >
                Celular *
              </label>
              <input
                className="w-full p-4 bg-light-gray-3 rounded-lg mt-[5px]"
                type="tel"
                id="cel"
                placeholder="Insira seu celular"
                {...register("cel", {
                  required: "Este campo é obrigatório",
                  pattern: {
                    value: /^(?:\+55\s?)?\(?\d{2}\)?\s?\d{4,5}-?\d{4}$|^\d{10,11}$/,
                    message: "Número inválido.",
                  },
                })}
              />
              {errors.cel && (
                <small className="text-error mb-5">{errors.cel.message}</small>
              )}
            </div>
          </div>
        </section>

        <section className="bg-purple-50 w-full rounded mt-[20px]">
          <div className="bg-white p-[30px] w-full rounded mt-[20px]">
            <h2 className="text-sm font-bold text-dark-gray-2 leading-[22px] tracking-[0.75]">
              Informações de Entrega
            </h2>
            <hr className="bg-light-gray-2 my-5 w-full" />
            <div className="mt-5">
              <label
                className="block text-xs font-bold text-dark-gray-2 leading-[22px] tracking-[0.75]"
                htmlFor="cep"
              >
                CEP *
              </label>
              <input
                className="w-full p-4 bg-light-gray-3 rounded-lg mt-[5px]"
                type="tel"
                id="cep"
                placeholder="Insira seu CEP"
                {...register("cep", {
                  required: "Este campo é obrigatório",
                  pattern: {
                    value: /^\d{5}-?\d{3}$/,
                    message: "CEP inválido.",
                  },
                })}
              />
              {errors.cep && (
                <small className="text-error mb-5">{errors.cep.message}</small>
              )}
            </div>
            <div>
              <label
                className="block text-xs font-bold text-dark-gray-2 leading-[22px] tracking-[0.75]"
                htmlFor="endereco"
              >
                Endereço *
              </label>
              <input
                className="w-full p-4 bg-light-gray-3 rounded-lg mt-[5px]"
                type="text"
                id="endereco"
                placeholder="Insira seu endereço"
                {...register("endereco", {
                  required: "Este campo é obrigatório",
                })}
              />
              {errors.endereco && (
                <small className="text-error mb-5">
                  {errors.endereco.message}
                </small>
              )}
            </div>
            <div className="mt-5">
              <label
                className="block text-xs font-bold text-dark-gray-2 leading-[22px] tracking-[0.75]"
                htmlFor="bairro"
              >
                Bairro *
              </label>
              <input
                className="w-full p-4 bg-light-gray-3 rounded-lg mt-[5px]"
                type="text"
                id="bairro"
                placeholder="Insira seu bairro"
                {...register("bairro", {
                  required: "Este campo é obrigatório",
                })}
              />
              {errors.bairro && (
                <small className="text-error mb-5">
                  {errors.bairro.message}
                </small>
              )}
            </div>
            <div className="mt-5">
              <label
                className="block text-xs font-bold text-dark-gray-2 leading-[22px] tracking-[0.75]"
                htmlFor="cidade"
              >
                Cidade *
              </label>
              <input
                className="w-full p-4 bg-light-gray-3 rounded-lg mt-[5px]"
                type="text"
                id="cidade"
                placeholder="Insira sua cidade"
                {...register("cidade", {
                  required: "Este campo é obrigatório"
                })}
              />
              {errors.cidade && (
                <small className="text-error mb-5">
                  {errors.cidade.message}
                </small>
              )}
            </div>
            <div className="mt-5">
              <label
                className="block text-xs font-bold text-dark-gray-2 leading-[22px] tracking-[0.75]"
                htmlFor="complemento"
              >
                Complemento
              </label>
              <input
                className="w-full p-4 bg-light-gray-3 rounded-lg mt-[5px]"
                type="text"
                id="complemento"
                placeholder="Insira complemento"
                {...register("complemento")}
              />
            </div>
          </div>
        </section>

        <section className="bg-purple-50 w-full rounded mt-[20px]">
          <div className="bg-white p-[30px] w-full rounded mt-[20px]">
            <h2 className="text-sm font-bold text-dark-gray-2 leading-[22px] tracking-[0.75]">
              Informações de Pagamento
            </h2>
            <hr className="bg-light-gray-2 my-5 w-full" />

            <div>
              <h3 className="block text-xs font-bold text-dark-gray-2 leading-[22px] tracking-[0.75]">
                Forma de Pagamento
              </h3>
              <label
                htmlFor="credito"
                className="flex items-center mt-4 cursor-pointer text-sm font-medium text-dark-gray-2 leading-[22px] tracking-[0.75]"
              >
                <input
                  type="radio"
                  id="credito"
                  name="pagamento"
                  className="hidden"
                  value="credito"
                  {...register("pagamento", {
                    required: "Este campo é obrigatório",
                    onChange: (e) => setSelectedOption(e.target.value),
                  })}
                />
                <span className="w-[21px] h-[21px] mr-2 flex items-center justify-center border border-dark-gray-2 rounded-full">
                  {selectedOption === "credito" && <RadioSVG />}
                </span>
                Cartão de Crédito
              </label>

              <label
                htmlFor="boleto"
                className="flex items-center mt-4 cursor-pointer text-sm font-medium text-dark-gray-2 leading-[22px] tracking-[0.75]"
              >
                <input
                  type="radio"
                  id="boleto"
                  name="pagamento"
                  className="hidden"
                  value="boleto"
                  {...register("pagamento", {
                    required: "Este campo é obrigatório",
                    onChange: (e) => setSelectedOption(e.target.value),
                  })}
                />
                <span className="w-[21px] h-[21px] mr-2 flex items-center justify-center border border-dark-gray-2 rounded-full">
                  {selectedOption === "boleto" && <RadioSVG />}
                </span>
                Boleto Bancário
              </label>
              {errors.pagamento && (
                <small className="text-error mb-5">
                  {errors.pagamento.message}
                </small>
              )}
            </div>
            <div className="mt-5">
              <label
                className="block text-xs font-bold text-dark-gray-2 leading-[22px] tracking-[0.75]"
                htmlFor="nomeCartao"
              >
                Nome do Cartão *
              </label>
              <input
                className="w-full p-4 bg-light-gray-3 rounded-lg mt-[5px]"
                type="text"
                id="nomeCartao"
                placeholder="Insira o nome do titular do Cartao"
                {...register("nomeCartao", {
                  required: "Este campo é obrigatório",
                })}
              />
              {errors.nomeCartao && (
                <small className="text-error mb-5">
                  {errors.nomeCartao.message}
                </small>
              )}
            </div>
            <div className="mt-5">
              <label
                className="block text-xs font-bold text-dark-gray-2 leading-[22px] tracking-[0.75]"
                htmlFor="numeroCartao"
              >
                Número do Cartão *
              </label>
              <input
                className="w-full p-4 bg-light-gray-3 rounded-lg mt-[5px]"
                type="text"
                id="numeroCartao"
                placeholder="Insira o número do Cartao"
                {...register("numeroCartao", {
                  required: "Este campo é obrigatório",
                })}
              />
              {errors.numeroCartao && (
                <small className="text-error mb-5">
                  {errors.numeroCartao.message}
                </small>
              )}
            </div>
            <div className="mt-5">
              <label
                className="block text-xs font-bold text-dark-gray-2 leading-[22px] tracking-[0.75]"
                htmlFor="dataCartao"
              >
                Data de validade do Cartão *
              </label>
              <input
                className="w-full p-4 bg-light-gray-3 rounded-lg mt-[5px]"
                type="date"
                id="dataCartao"
                placeholder="Insira a validade Cartao"
                {...register("dataCartao", {
                  required: "Este campo é obrigatório",
                })}
              />
              {errors.dataCartao && (
                <small className="text-error mb-5">
                  {errors.dataCartao.message}
                </small>
              )}
            </div>
            <div className="mt-5">
              <label
                className="block text-xs font-bold text-dark-gray-2 leading-[22px] tracking-[0.75]"
                htmlFor="cvv"
              >
                CVV *
              </label>
              <input
                className="w-full p-4 bg-light-gray-3 rounded-lg mt-[5px]"
                type="text"
                id="cvv"
                placeholder="CVV"
                {...register("cvv", {
                  required: "Este campo é obrigatório",
                  pattern: {
                    value: /^[0-9]{3,4}$/,
                  },
                })}
              />
              {errors.cvv && (
                <small className="text-error mb-5">{errors.cvv.message}</small>
              )}
            </div>
          </div>
        </section>
        <section className="mt-[30px] bg-white p-[30px]">
          <button
            type="submit"
            className="block w-full h-10 bg-warning text-light-gray-3 text-center py-2 font-bold leading-6 rounded hover:bg-warning_hover"
          >
            Realizar Pagamento
          </button>
        </section>
      </form>
    </section>
  );
};
