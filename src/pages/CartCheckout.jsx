import { CartCheckoutResume } from '../components/CartCheckout/CartCheckoutResume'
import { CartCheckoutProduct } from '../components/CartCheckout/CartCheckoutProduct'

export const CartCheckout = () => {

  return (
    <div className='flex flex-col justify-between items-start gap-5 p-[30px] md:flex-row'>
      <div className='w-full md:w-[72%]'>
        <div className='flex flex-col md:flex-row justify-between w-full pb-5'>
          <div className='w-1/2'>
            <h3 className='text-sm font-bold text-dark-gray-2 leading-[22px]'>MEU CARRINHO</h3>
          </div>
          <div className='w-1/2 flex justify-between items-center gap-[30px]'>
            <h3 className='w-[33%] items-center text-center m-auto min-w-[120px]'>QUANTIDADE</h3>
            <h3 className='w-[33%] items-center text-center m-auto min-w-[120px]'>UNITÁRIO</h3>
            <h3 className='w-[33%] items-center text-center m-auto min-w-[120px]'>TOTAL</h3>
          </div>
        </div>
        <section>
          <CartCheckoutProduct />
        </section>

        <div className='flex justify-between text-center'>
          <div className='w-1/2 block text-left pt-5'>
            <p className='text-dark-gray-2 font-xs font-bold leading-[24px] tracking-[0.75] pb-[6px]'>Cupom de desconto</p>
            <input className='py-4 pr-[61px] pt-3 bg-light-gray-3 text-dark-gray-3 leading-[28px] tracking-[.75px] mt-10px border-none rounded-[5px]' type="text" name="desc" id="desc" placeholder='Insira seu código' />
            <button className='py-4 px-10 bg-light-gray-3 text-primary text-center text-sm font-bold leading-[22px] tracking-[.75px] border-none rounded-[5px] hover:bg-tertiary'>OK</button>
          </div>
          <div className='w-1/2 block text-left pt-5'>
            <p className='text-dark-gray-2 font-xs font-bold leading-[24px] tracking-[0.75] pb-[6px]'>Calcular frete</p>
            <input className='py-4 pr-[61px] pt-3 bg-light-gray-3 text-dark-gray-3 leading-[28px] tracking-[.75px] mt-10px border-none rounded-[5px]' type="text" name="cep" id="cep" placeholder='Insira seu CEP' />
            <button className='py-4 px-10 bg-light-gray-3 text-primary text-center text-sm font-bold leading-[22px] tracking-[.75px] border-none rounded-[5px] hover:bg-tertiary'>OK</button>
          </div>
        </div>
      </div>
      <div className='w-[28%]'>
        <CartCheckoutResume />
      </div>
    </div>
  )
}
