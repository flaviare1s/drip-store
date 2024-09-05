import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css/pagination';
import 'swiper/css';
import { HeroSlide } from './HeroSlide';
import whiteSneakers from '../../assets/white-sneakers2.png';
import kSwiss from '../../assets/k-swiss.png';
import AirJordan from '../../assets/air-jordan.png';

export const Hero = () => {
  return (
    <Swiper
      pagination={true}
      modules={[Pagination]}
      className="mySwiper"
      spaceBetween={50}
      slidesPerView={1}
    >
      <SwiperSlide className="h-[600px] md:h-[650px] lg:h-[700px] xl:h-[500px] flex items-center justify-center hero-height">
        <HeroSlide
          eyebrown={'Melhores ofertas personalizadas'}
          titulo={'Queima de estoque Nike 🔥'}
          descricao={'O Nike Revolution 5 é perfeito para corridas diárias, com um design leve e respirável. Ideal para garantir conforto e performance durante os treinos.'}
          ctaText={'Ver Ofertas'}
          ctaLink={'#'}
          imagem={whiteSneakers}
        />
      </SwiperSlide>

      <SwiperSlide className="h-[600px] md:h-[650px] lg:h-[700px] xl:h-[500px] flex items-center justify-center hero-height">
        <HeroSlide
          eyebrown={'Melhores ofertas personalizadas'}
          titulo={'Super oferta K-Swiss 🔥'}
          descricao={'O K-Swiss Classic é um ícone do estilo casual, com seu design clássico e materiais de alta qualidade. Perfeito para quem busca estilo e conforto.'}
          ctaText={'Ver Ofertas'}
          ctaLink={'#'}
          imagem={kSwiss}
        />
      </SwiperSlide>

      <SwiperSlide className="h-[600px] md:h-[650px] lg:h-[700px] xl:h-[500px] flex items-center justify-center hero-height">
        <HeroSlide
          eyebrown={'Melhores ofertas personalizadas'}
          titulo={'Air Jordan Edição de Colecionador 🔥'}
          descricao={'O Air Jordan, um símbolo de excelência, traz design icônico e tecnologia avançada para colecionadores e amantes do basquete.'}
          ctaText={'Ver Ofertas'}
          ctaLink={'#'}
          imagem={AirJordan}
        />
      </SwiperSlide>

      <SwiperSlide className="h-[600px] md:h-[650px] lg:h-[700px] xl:h-[500px] flex items-center justify-center hero-height">
        <HeroSlide
          eyebrown={'Melhores ofertas personalizadas'}
          titulo={'Promoção Imperdível!!!'}
          descricao={'O Nike Air Max é conhecido por seu amortecimento responsivo, garantindo conforto e estilo para o seu dia a dia, com um toque esportivo.'}
          ctaText={'Ver Ofertas'}
          ctaLink={'#'}
          imagem={whiteSneakers}
        />
      </SwiperSlide>
    </Swiper>
  );
};
