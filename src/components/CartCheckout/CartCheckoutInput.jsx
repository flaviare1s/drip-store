/* eslint-disable react/prop-types */
export const CartCheckoutInput = ({ title }) => {
  return (
    <section className="text-left pt-5 w-full">
      <p className="text-dark-gray-2 text-xs font-bold leading-[24px] tracking-[0.75] pb-[6px]">
        { title }
      </p>
      <div className="flex flex-col md:flex-row gap-2.5">
        <input
          className="py-4 pt-3 bg-light-gray-3 text-dark-gray-3 leading-[28px] tracking-[.75px] border-none rounded-[5px] px-2.5 h-[60px] w-full"
          type="text"
          name="desc"
          id="desc"
          placeholder="Insira seu código"
        />
        <button className="py-4 px-10 bg-light-gray-3 text-primary text-center text-sm font-bold leading-[22px] tracking-[.75px] border-none rounded-[5px] hover:bg-secondary hover:text-light-gray-3 h-[60px]">
          OK
        </button>
      </div>
    </section>
  )
}
