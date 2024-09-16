import { SmallHighlightItem } from "../SmallHighlightSection/SmallHighlightItem"
import { TShirtIcon } from "../SmallHighlightSection/SmallHighlightIcons/TShirtIcon"
import { PantsIcon } from "../SmallHighlightSection/SmallHighlightIcons/PantsIcon"
import { HeadphoneIcon } from "../SmallHighlightSection/SmallHighlightIcons/HeadphoneIcon"
import { TenisIcon } from "../SmallHighlightSection/SmallHighlightIcons/TenisIcon"

export const SmallHighlightSection = () => {
  return (
    <div id="categories" className="pt-10 md:pb-10 bg-gray-50 md:bg-purple-50">
      <div className="px-5 lg:px-[100px]">
        <h2 className="font-bold leading-[24px] tracking-[0.75px] sm:text-2xl sm:leading-[38px] md:text-center">
          Coleções em destaque
        </h2>
      </div>
      <div className="pb-[50px] md:pb-[9px]">
        <div  className="flex justify-start md:justify-center items-center gap-5 md:gap-10 p-5 overflow-x-auto">
          <SmallHighlightItem
            image={<TenisIcon />}
            name={'Tênis'}
            ctaLink={'/products/tipo/sneakers'}
          />
          <SmallHighlightItem
            image={<TShirtIcon />}
            name={'Camisetas'}
            ctaLink={'/products/tipo/shirts'}
          />
          <SmallHighlightItem
            image={<PantsIcon />}
            name={'Calças'}
            ctaLink={'/products/tipo/pants'}
          />
          <SmallHighlightItem
            image={<HeadphoneIcon />}
            name={'Headphones'}
            ctaLink={'/products/tipo/phones'}
          />
        </div>
      </div>
    </div>
  )
}
