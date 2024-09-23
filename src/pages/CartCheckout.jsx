import { CartCheckoutResume } from "../components/CartCheckout/CartCheckoutResume";
import { CartCheckoutProduct } from "../components/CartCheckout/CartCheckoutProduct";
import {
  atualizarProdutoNoCarrinho,
  obterPedidoPendente,
  obterProdutosDoCarrinho,
  removerProdutoDoCarrinho,
} from "../firebase/pedido";
import { auth } from "../firebase/config";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Loader } from "../components/Loader";
import toast from "react-hot-toast";
import { CartCheckoutInput } from "../components/CartCheckout/CartCheckoutInput";

export const CartCheckout = () => {
  const [produtos, setProdutos] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const calcularSubtotal = () => {
    return produtos
      .reduce((acc, produto) => {
        const precoTotal =
          produto.preco * produto.quantidade * (1 - (produto.desconto || 0));
        return acc + precoTotal;
      }, 0)
      .toFixed(2).replace(".", ",");
  };

  const subtotal = calcularSubtotal();
  const frete = 0;
  const desconto = 0;

  useEffect(() => {
    const carregarCarrinho = async () => {
      try {
        const user = auth.currentUser;

        if (!user) {
          toast.success("Você precisa estar logado para ver o carrinho.");
          navigate("/login");
          return;
        }

        const pedidoPendente = await obterPedidoPendente(user.uid);

        if (pedidoPendente) {
          const produtosNoCarrinho = await obterProdutosDoCarrinho(
            pedidoPendente.id
          );
          setProdutos(produtosNoCarrinho);
        } else {
          toast.error("Seu carrinho está vazio.");
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
    console.log(`Alterando a quantidade do produto ${id} para ${newAmount}`);
    const pedidoPendente = await obterPedidoPendente(auth.currentUser.uid);

    if (pedidoPendente) {
      const updatedProducts = produtos.map((item) => {
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

  const handleRemoveItem = async (id) => {
    const confirmRemoval = window.confirm(
      "Tem certeza que deseja remover este produto do carrinho?"
    );

    if (confirmRemoval) {
      const pedidoPendente = await obterPedidoPendente(auth.currentUser.uid);

      if (pedidoPendente) {
        const updatedProducts = produtos.filter((produto) => produto.id !== id);
        setProdutos(updatedProducts);

        await removerProdutoDoCarrinho(pedidoPendente.id, id);
      }
    } else {
      toast.info("Remoção cancelada.");
    }
  };

  if (loading) return <Loader />;

  return (
    <section className="flex flex-col justify-between items-start p-[30px] bg-purple-50">
      <Link
        to="/products"
        className="inline-block text-primary font-semibold md:font-normal text-sm md:text-lg tracking-[.75px] hover:font-bold mb-[30px]"
      >
        Ir para Produtos
      </Link>
      <div className="flex flex-col w-full lg:flex-row gap-5">
        <div className="w-full lg:w-[72%] bg-white p-[30px] rounded">
          <div className="flex flex-col md:flex-row justify-between w-full pb-5">
            <div className="w-1/2">
              <h3 className="text-sm font-bold text-dark-gray-2 leading-[22px]">
                MEU CARRINHO
              </h3>
            </div>
            <hr className="bg-light-gray-2 mt-5 w-full md:hidden" />
            <div className="w-1/2 hidden md:flex justify-between items-center gap-[30px]">
              <h3 className="w-[33%] items-center text-center m-auto">
                QUANTIDADE
              </h3>
              <h3 className="w-[33%] items-center text-center m-auto">
                UNITÁRIO
              </h3>
              <h3 className="w-[33%] items-center text-center m-auto">TOTAL</h3>
            </div>
          </div>
          <section>
            <CartCheckoutProduct
              produtos={produtos}
              onChangeAmount={handleChangeAmount}
              handleRemoveItem={handleRemoveItem}
            />
          </section>
          <section className="hidden md:flex flex-col md:flex-row justify-between text-center md:gap-10 w-full">
            <CartCheckoutInput title='Cupom de desconto' />
            <CartCheckoutInput title='Calcular frete' />
          </section>
        </div>
          <section className="md:hidden bg-white px-[30px] pb-[30px] rounded">
            <CartCheckoutInput title='Cupom de desconto' />
          </section>
        <section className="md:hidden bg-white px-[30px] pb-[30px] rounded">
            <CartCheckoutInput title='Calcular frete' />
          </section>
        <div className="w-full lg:w-[28%]">
          <CartCheckoutResume
            produtos={produtos}
            subtotal={subtotal}
            frete={frete}
            desconto={desconto}
          />
        </div>
      </div>
    </section>
  );
};
