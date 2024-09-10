import { useForm } from "react-hook-form";
import { Button } from "../components/Button";
import google from "../assets/google.png";
import facebook from "../assets/facebook.png";
import tenisLeft from "../assets/tenis-left.png";
import tenisRight from "../assets/tenis-right.png";
import { useNavigate } from "react-router-dom";
import { cadastrarUsuario, entrarFacebook, entrarGoogle, verificarEmail } from "../firebase/auth";
import toast from "react-hot-toast";

export const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  function cadastrar(data) {
    cadastrarUsuario(data.nome, data.email, data.password).then(() => {
      verificarEmail()
      toast.success("Usuário cadastrado com sucesso!")
      navigate("/")
    }).catch((error) => {
      toast.error(`Um erro aconteceu: ${error.code}`)
    })
  }

  function handleEntrarGoogle() {
    entrarGoogle().then(() => {
      toast.success("Usuário logado com sucesso!")
      navigate("/")
    })
  }

  function handleEntrarFacebook() {
    entrarFacebook().then(() => {
      toast.success("Usuário logado com sucesso!")
      navigate("/")
    })
  }

  return (
    <section className="bg-secondary px-[30px] pt-16 pb-[82px] flex flex-col items-center lg:flex-row lg:justify-evenly">
      <section className="bg-white p-[30px] rounded w-full sm:w-[583px]">
        <h1 className="font-bold text-[22px] sm:text-[32px] text-center leading-[34px] sm:leading-[36px] tracking-[2px] sm:tracking-[1px] sm:text-left pb-2.5 sm:pb-5">
          Crie sua conta
        </h1>
        <p className="text-center sm:text-left text-sm sm:text-base pb-[30px]">
          Já possui uma conta? Entre{" "}
          <a className="underline" href="/login">
            aqui
          </a>
        </p>
        <form onSubmit={handleSubmit(cadastrar)}>
          <div className="flex flex-col">
            <label htmlFor="password" className="mt-3">
              Nome *
            </label>
            <input
              className="w-full p-4 bg-light-gray-3 rounded-lg mb-[30px]"
              type="text"
              id="nome"
              placeholder="Insira seu nome"
              {...register("nome", {
                required: "Nome obrigatório",
              })}
            />
            {errors.password && (
              <small className="text-red-500">{errors.email.message}</small>
            )}
          </div>
          <div className="flex flex-col">
            <label htmlFor="email">E-mail *</label>
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
            {errors.email && (
              <small className="text-red-500">{errors.email.message}</small>
            )}
          </div>
          <div className="flex flex-col">
            <label htmlFor="password" className="mt-3">
              Senha *
            </label>
            <input
              className="w-full p-4 bg-light-gray-3 rounded-lg"
              type="password"
              id="password"
              placeholder="Insira uma senha"
              {...register("password", {
                required: "Digite uma senha",
                minLength: {
                  value: 8,
                  message: "A password deve ter pelo menos 6 digitos",
                },
              })}
            />
            {errors.password && (
              <small className="text-red-500">{errors.password.message}</small>
            )}
          </div>
          <div className=" mt-[30px]">
            <Button type="submit" title="Criar conta" />
          </div>
          <div className="flex flex-col items-center justify-center lg:flex-row pt-[30px] gap-5">
            <p className="text-center text-sm sm:text-base">Ou faça login com</p>
            <div className="flex justify-center gap-6">
              <button onClick={handleEntrarGoogle}><img src={ google } alt="Ícone do G-Mail" /></button>
              <button onClick={handleEntrarFacebook}><img src={ facebook } alt="Ícone do Facebook" /></button>
            </div>
          </div>
        </form>
      </section>
      <div className="lg:flex w-[500px] h-[600px] justify-between hidden relative">
        <img className="absolute top-0 left-0 w-[300px]" src={ tenisLeft } alt="Imagem de tênis" />
        <img className="absolute bottom-0 right-0 w-[300px]" src={ tenisRight } alt="Imagem de tênis" />
      </div>
    </section>
  );
};
