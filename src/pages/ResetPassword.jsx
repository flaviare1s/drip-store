import { useForm } from "react-hook-form";
import { Button } from "../components/Button";
import tenisLeft from "../assets/tenis-left.png";
import tenisRight from "../assets/tenis-right.png";
import { resetarSenha } from "../firebase/auth";

export const ResetPassword = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    resetarSenha(data.email);
  };

  return (
    <section className="bg-secondary px-[30px] pt-16 pb-[82px] flex flex-col items-center lg:flex-row lg:justify-evenly">
      <section className="bg-white p-[30px] rounded w-full sm:w-[583px]">
        <h1 className="font-bold text-[22px] sm:text-[32px] text-center leading-[34px] sm:leading-[36px] tracking-[2px] sm:tracking-[1px] sm:text-left pb-2.5 sm:pb-5">
          Acesse sua conta
        </h1>
        <p className="text-center sm:text-left text-sm sm:text-base pb-[30px]">
          Novo cliente? Então registre-se{" "}
          <a className="underline" href="/register">
            aqui
          </a>
        </p>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col">
            <label className="mt-3 font-bold" htmlFor="email">
              E-mail *
            </label>
            <input
              className="w-full p-4 bg-light-gray-3 rounded-lg"
              type="email"
              id="email"
              placeholder="Insira seu e-mail"
              {...register("email", {
                required: "E-mail obrigatório",
                pattern: {
                  value: /[\w.-]+@[\w-]+\.[\w-.]+/gi,
                  message: "Invalid e-mail",
                },
              })}
            />
          </div>
          <div className=" mt-[30px]">
            <Button type="submit" title="Redefinir senha" />
          </div>
        </form>
      </section>
      <div className="lg:flex w-[500px] h-[600px] justify-between hidden relative">
        <img
          className="absolute top-0 left-0 w-[300px]"
          src={tenisLeft}
          alt="Imagem de tênis"
        />
        <img
          className="absolute bottom-0 right-0 w-[300px]"
          src={tenisRight}
          alt="Imagem de tênis"
        />
      </div>
    </section>
  );
};
