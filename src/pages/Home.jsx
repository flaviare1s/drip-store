import { Hero } from '../components/Home/Hero.jsx'
import { SideBySide } from '../components/Home/SideBySide.jsx'
import { SmallHighlightSection } from '../components/Home/SmallHighlightSection/SmallHighlightSection.jsx'
import airJordan from '../assets/air-jordan.png'

export const Home = () => {
  return (
    <main>
      <Hero />
      <SmallHighlightSection />
      <SideBySide
        image={airJordan}
        eyebrown={"Oferta Especial"}
        title={"Air Jordan Edição de Colecionador"}
        description={
          "Aproveite a nossa oferta especial para o Air Jordan Edição de Colecionador. Este modelo icônico combina design exclusivo com a melhor tecnologia de conforto e performance, ideal para quem busca se destacar com estilo e sofisticação."
        }
        ctaLink={"#"}
        ctaText={"Ver Oferta"}
      />
    </main>
  )
}
