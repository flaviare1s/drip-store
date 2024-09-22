import { CartCheckoutResume } from '../components/CartCheckout/CartCheckoutResume'
import { CartCheckoutProduct } from '../components/CartCheckout/CartCheckoutProduct'
import { atualizarProdutoNoCarrinho, obterPedidoPendente, obterProdutosDoCarrinho } from '../firebase/pedido';
import { auth } from '../firebase/config';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Loader } from '../components/Loader';

export const CartCheckout = () => {
  const [produtos, setProdutos] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const carregarCarrinho = async () => {
      try {
        const user = auth.currentUser;

        if (!user) {
          alert("Você precisa estar logado para ver o carrinho.");
          navigate("/login");
          return;
        }

        const pedidoPendente = await obterPedidoPendente(user.uid);

        if (pedidoPendente) {
          const produtosNoCarrinho = await obterProdutosDoCarrinho(pedidoPendente.id);
          setProdutos(produtosNoCarrinho);
        } else {
          alert("Seu carrinho está vazio.");
        }
      } catch (erro) {
        console.error("Erro ao carregar o carrinho:", erro);
      } finally {
        setLoading(false);
      }
    };

    carregarCarrinho();
  }, [navigate]);

  const handleChangeAmount = async (id, newAmount) => {
    console.log(`Alterando a quantidade do produto ${id} para ${newAmount}`)
    const pedidoPendente = await obterPedidoPendente(auth.currentUser.uid);

    if (pedidoPendente) {
      const updatedProducts = produtos.map(item => {
        if (item.id === id && newAmount > 0) {
          return {
            ...item,
            quantidade: newAmount,
          };
        }
        return item;
      });

      setProdutos(updatedProducts);

      await atualizarProdutoNoCarrinho(pedidoPendente.id, id, newAmount);
    }
  };


  if (loading) return <Loader />;

  return (
    <div className='flex flex-col justify-between items-start gap-5 p-[30px] lg:flex-row'>
      <div className='w-full lg:w-[72%]'>
        <div className='flex flex-col md:flex-row justify-between w-full pb-5'>
          <div className='w-1/2'>
            <h3 className='text-sm font-bold text-dark-gray-2 leading-[22px]'>MEU CARRINHO</h3>
          </div>
          <hr className='bg-light-gray-2 mt-5 md:hidden' />
          <div className='w-1/2 hidden md:flex justify-between items-center gap-[30px]'>
            <h3 className='w-[33%] items-center text-center m-auto min-w-[120px]'>QUANTIDADE</h3>
            <h3 className='w-[33%] items-center text-center m-auto min-w-[120px]'>UNITÁRIO</h3>
            <h3 className='w-[33%] items-center text-center m-auto min-w-[120px]'>TOTAL</h3>
          </div>
        </div>
        <section className='w-full'>
          <CartCheckoutProduct produtos={produtos} onChangeAmount={handleChangeAmount} />
        </section>

        <div className='flex flex-col md:flex-row justify-between text-center'>
          <div className='w-full md:w-1/2 block text-left pt-5'>
            <p className='text-dark-gray-2 font-xs font-bold leading-[24px] tracking-[0.75] pb-[6px]'>Cupom de desconto</p>
            <div className='flex flex-col md:flex-row gap-2.5'>
              <input className='py-4 pr-[61px] pt-3 bg-light-gray-3 text-dark-gray-3 leading-[28px] tracking-[.75px] mt-10px border-none rounded-[5px] px-2.5 h-[60px]' type="text" name="desc" id="desc" placeholder='Insira seu código' />
              <button className='py-4 px-10 bg-light-gray-3 text-primary text-center text-sm font-bold leading-[22px] tracking-[.75px] border-none rounded-[5px] hover:bg-secondary hover:text-light-gray-3  h-[60px]'>OK</button>
            </div>
          </div>
          <div className='w-full md:w-1/2 block text-left pt-5'>
            <p className='text-dark-gray-2 font-xs font-bold leading-[24px] tracking-[0.75] pb-[6px]'>Calcular frete</p>
            <div className='flex flex-col md:flex-row gap-2.5'>
              <input className='py-4 pr-[61px] pt-3 bg-light-gray-3 text-dark-gray-3 leading-[28px] tracking-[.75px] mt-10px border-none rounded-[5px] px-2.5 h-[60px]' type="text" name="cep" id="cep" placeholder='Insira seu CEP' />
              <button className='py-4 px-10 bg-light-gray-3 text-primary text-center text-sm font-bold leading-[22px] tracking-[.75px] border-none rounded-[5px] hover:bg-secondary hover:text-light-gray-3 h-[60px]'>OK</button>
            </div>
          </div>
        </div>
      </div>
      <div className='w-[28%]'>
        <CartCheckoutResume />
      </div>
    </div>
  )
}
