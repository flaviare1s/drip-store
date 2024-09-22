/* eslint-disable react/prop-types */
export const CartCheckoutProduct = ({ produtos, handleRemoveItem, onChangeAmount }) => {
  return (
    <div>
      {produtos.length === 0 ? (
        <p>Seu carrinho está vazio.</p>
      ) : (
        produtos.map((produto, index) => (
          <div key={index} className='flex justify-between items-center py-3 w-full'>
            <div className='flex items-center w-1/2'>
              <div className="w-[128px] h-[104px] p-3 bg-light-purple mr-5">
                <img src={produto.imagem} alt={produto.nome} className='object-contain w-full h-full mr-4'/>
              </div>
              <div>
                <h4 className='text-sm font-bold leading-[20px] text-dark-gray'>{produto.tipo} {produto.marca} {produto.nome} {produto.sexo}</h4>
                <p className="text-sm text-light-gray font-medium leading-[22px] tracking-[.25px]">Cor: <span className="text-dark-gray">{produto.cor}</span></p>
                <p className="text-sm text-light-gray font-medium leading-[22px] tracking-[.25px]">Tamanho: <span className="text-dark-gray">{produto.tamanho}</span></p>
              </div>
            </div>
            <div className="w-1/2 flex justify-between items-between py-3">
              <div className='w-[33%]'>
                <div className="flex items-center justify-center">
                  <button className="w-[35px] h-[35px] border border-light-gray-3 rounded-[3px]" disabled={produto.quantidade === 1} onClick={() => onChangeAmount(produto.id, produto.quantidade - 1)}>-</button>
                  <span className='font-bold text-xs px-[15px]'>{produto.quantidade}</span>
                  <button className="w-[35px] h-[35px] border border-light-gray-3 rounded-[3px]" onClick={() => onChangeAmount(produto.id, produto.quantidade + 1)}>+</button>
                </div>
                <div className="flex items-center justify-center">
                  <button onClick={handleRemoveItem} className="text-xs underline text-dark-gray-2 leading-[28px]">Remover item</button>
                </div>
              </div>
              <div className='w-[33%] flex justify-center items-center'>
                <div className="flex flex-col items-center justify-center gap-1">
                  {produto.desconto && produto.desconto > 0 ? (
                    <span className='text-center text-sm line-through text-light-gray-2'>R$ {produto.preco.toFixed(2)}</span>
                  ) : null}
                  <span className='text-center font-bold'>R$  {(produto.preco * (1 - produto.desconto)).toFixed(2)}</span>
                </div>
                
              </div>
              <div className='w-[33%] flex justify-center items-center'>
                <div className="flex flex-col items-center justify-center gap-1">
                  {produto.desconto && produto.desconto > 0 ? (
                    <span className='text-center text-sm line-through text-light-gray-2'>R$ {(produto.preco * produto.quantidade).toFixed(2)}</span>
                  ) : null}
                  <span className='text-center font-bold'>R$ {((produto.preco * (1 - produto.desconto)) * produto.quantidade).toFixed(2)}</span>
                </div>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
};
