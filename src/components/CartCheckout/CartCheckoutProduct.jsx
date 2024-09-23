/* eslint-disable react/prop-types */
export const CartCheckoutProduct = ({
  produtos,
  handleRemoveItem,
  onChangeAmount,
}) => {
  return (
    <section className="rounded">
      {produtos.length === 0 ? (
        <p>Seu carrinho está vazio.</p>
      ) : (
        produtos.map((produto, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row justify-between items-center py-3 w-full md:justify-center"
          >
            <div className="flex items-center w-full md:w-1/2 mb-5 md:mb-0">
              <div className="w-[128px] h-[104px] p-3 bg-light-purple mr-5">
                <img
                  src={produto.imagem}
                  alt={produto.nome}
                  className="object-contain w-full h-full mr-4"
                />
              </div>
              <div>
                <h4 className="text-sm font-bold leading-[20px] text-dark-gray">
                  {produto.tipo} {produto.marca} {produto.nome} {produto.sexo}
                </h4>
                {produto.cor && (
                  <p className="text-sm text-light-gray font-medium leading-[22px] tracking-[.25px]">
                    Cor: <span className="text-dark-gray">{produto.cor}</span>
                  </p>
                )}
                {produto.tamanho && (
                  <p className="text-sm text-light-gray font-medium leading-[22px] tracking-[.25px]">
                    Tamanho:{" "}
                    <span className="text-dark-gray">{produto.tamanho}</span>
                  </p>
                )}
              </div>
            </div>
            <div className="w-full md:w-1/2 flex flex-col md:flex-row justify-between items-between py-3 md:justify-center md:items-center">
              <div className="w-full md:w-[33%] flex flex-col justify-start pb-2.5 md:pb-[30px">
                <div className="w-full flex flex-col justify-start]">
                  <h3 className="md:hidden text-left md:text-center pb-2.5">
                    QUANTIDADE
                  </h3>
                </div>
                <div className="w-full sm:w-1/2 sm:m-auto md:w-full">
                  <div className="flex items-center justify-center">
                    <button
                      className="w-full md:w-[35px] h-[35px] border border-light-gray-2 rounded-[3px]"
                      disabled={produto.quantidade === 1}
                      onClick={() =>
                        onChangeAmount(produto.id, produto.quantidade - 1)
                      }
                    >
                      -
                    </button>
                    <span className="font-bold text-xs px-[15px]">
                      {produto.quantidade}
                    </span>
                    <button
                      className="w-full md:w-[35px] h-[35px] border border-light-gray-2 rounded-[3px]"
                      onClick={() =>
                        onChangeAmount(produto.id, produto.quantidade + 1)
                      }
                    >
                      +
                    </button>
                  </div>
                  <div className="flex items-center justify-center">
                    <button
                      onClick={() => handleRemoveItem(produto.id)}
                      className="text-xs underline text-dark-gray-2 leading-[28px]"
                    >
                      Remover item
                    </button>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-[33%] flex md:flex-col justify-between md:justify-center items-center pb-2.5 md:pb-[30px]">
                <h3 className="md:hidden items-center text-center">UNITÁRIO</h3>
                <div className="w-full flex justify-end md:justify-center items-center">
                  <div className="flex md:flex-col items-center justify-center gap-4 md:gap-1">
                    {produto.desconto && produto.desconto > 0 ? (
                      <span className="text-center text-sm line-through text-light-gray-2">
                        R$ {produto.preco.toFixed(2).replace(".", ",")}
                      </span>
                    ) : null}
                    <span className="text-center font-bold">
                      R$ {(produto.preco * (1 - produto.desconto)).toFixed(2).replace(".", ",")}
                    </span>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-[33%] flex md:flex-col justify-between md:justify-center items-center pb-2.5 md:pb-[30px]">
                <h3 className="md:hidden text-center">TOTAL</h3>
                <div className="w-full flex justify-end md:justify-center items-center">
                  <div className="flex md:flex-col items-center justify-center gap-4 md:gap-1">
                    {produto.desconto && produto.desconto > 0 ? (
                      <span className="text-center text-sm line-through text-light-gray-2">
                        R$ {(produto.preco * produto.quantidade).toFixed(2).replace(".", ",")}
                      </span>
                    ) : null}
                    <span className="text-center font-bold">
                      R${" "}
                      {(
                        produto.preco *
                        (1 - produto.desconto) *
                        produto.quantidade
                      ).toFixed(2).replace(".", ",") }
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))
      )}
    </section>
  );
};
