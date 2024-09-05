import logo from '../assets/logo.png'
export function Footer() {
  return (
    <footer className="bg-dark-gray font-Inter text-white">
      <div className="m-auto px-5 lg:px-[100px] pt-[50px] pb-[46px] lg:pb-[22px] grid grid-cols-2 lg:grid-cols-5">
        <div className="col-span-2 font-medium text-sm md:font-normal lg:text-base leading-[22px] lg:leading-[26px] tracking-[.25px] pb-10">
          <img
            className="pb-5 md:pb-10 w-[170px] lg:w-[253px]"
            src={logo}
            alt="Logo da Digital College"
          />
          <p className="lg:pr-48">
            A Drip Store é a sua loja de confiança para encontrar os melhores materiais esportivos. Oferecemos uma ampla variedade de tênis, roupas e acessórios das marcas mais renomadas, garantindo qualidade, estilo e desempenho para todos os amantes de esportes.
          </p>
          <div className="flex items-center gap-6 pt-5 lg:pt-10">
            <a className="hover:opacity-50" href="#">
              <i className="fa-brands fa-facebook-f fa-fw text-white text-lga-fw"></i>
            </a>
            <a className="hover:opacity-50" href="#">
              <i className="fa-brands fa-instagram fa-fw text-white text-lg"></i>
            </a>
            <a className="hover:opacity-50" href="#">
              <i className="fa-brands fa-twitter fa-fw text-white text-lg"></i>
            </a>
          </div>
        </div>

        <div className="col-span-1 pb-10 mr-10 lg:mr-0">
          <h2 className="text-lg font-semibold leading-[22px] pb-2.5">
            Informação
          </h2>
          <ul className="flex flex-col leading-[31px] lg:leading-[38px]">
            <a className="hover:opacity-50" href="#">
              Sobre Drip Store
            </a>
            <a className="hover:opacity-50" href="#">
              Segurança
            </a>
            <a className="hover:opacity-50" href="#">
              Wishlist
            </a>
            <a className="hover:opacity-50" href="#">
              Blog
            </a>
            <a className="hover:opacity-50" href="#">
              Trabalhe conosco
            </a>
            <a className="hover:opacity-50" href="#">
              Meus Pedidos
            </a>
          </ul>
        </div>

        <div className="col-span-1 pb-10">
          <h2 className="text-lg font-semibold leading-[22px] pb-2.5">
            Categorias
          </h2>
          <ul className="flex flex-col leading-[31px] lg:leading-[38px]">
            <a className="hover:opacity-50" href="#">
              Camisetas
            </a>
            <a className="hover:opacity-50" href="#">
              Calças
            </a>
            <a className="hover:opacity-50" href="#">
              Bonés
            </a>
            <a className="hover:opacity-50" href="#">
              Headphones
            </a>
            <a className="hover:opacity-50" href="#">
              Tênis
            </a>
          </ul>
        </div>

        <div className="col-span-2 lg:col-span-1">
          <h2 className="text-lg font-semibold leading-[22px] pb-2.5">
            Contato
          </h2>
          <p className="leading-[31px] lg:leading-[26px] pb-10">
            Av. Santos Dumont, 1510 - 1 andar - Aldeota, Fortaleza - CE,
            60150-161
          </p>
          <p className="leading-[31px] lg:leading-[26px] mb-[40px]">
            (85) 3051-3411
          </p>
        </div>

        <div className="col-span-2 lg:col-span-5 border-t-2 border-white border-opacity-30 pt-[23px] lg:pb-0">
          <p className="text-center text-[13px]">© 2024 Digital College</p>
        </div>
      </div>
    </footer>
  );
}
