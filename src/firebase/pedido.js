import {
  collection,
  addDoc,
  doc,
  getDoc,
  updateDoc,
  arrayUnion,
  query,
  where,
  getDocs,
} from "firebase/firestore";
import { db, auth } from "./config";

export const pedidosCol = collection(db, "pedidos");

export async function adicionarAoCarrinho(produto, pedidoId) {
  try {
    const user = auth.currentUser;

    if (!user) {
      throw new Error("Usuário não está autenticado.");
    }

    const pedidoRef = doc(db, "pedidos", pedidoId);
    const pedidoSnap = await getDoc(pedidoRef);

    if (pedidoSnap.exists()) {
      const produtos = pedidoSnap.data().produtos || [];
      const produtoIndex = produtos.findIndex((prod) => prod.id === produto.id);

      if (produtoIndex > -1) {
        const novaQuantidade = produtos[produtoIndex].quantidade + 1;
        produtos[produtoIndex].quantidade = novaQuantidade;

        await updateDoc(pedidoRef, {
          produtos: produtos,
        });

        console.log(
          `Quantidade do produto ${produto.id} atualizada para ${novaQuantidade}.`
        );
      } else {
        const novoProduto = {
          id: produto.id,
          nome: produto.nome,
          marca: produto.marca,
          imagem: produto.imagem,
          tipo: produto.tipo,
          categoria: produto.categoria,
          sexo: produto.sexo,
          cor: produto.cor,
          tamanho: produto.tamanho,
          quantidade: 1,
          preco: produto.preco,
          desconto: produto.desconto || 0,
          precoFinal: produto.desconto
            ? produto.preco * (1 - produto.desconto)
            : produto.preco,
        };

        for (const key in novoProduto) {
          if (novoProduto[key] === undefined) {
            delete novoProduto[key];
          }
        }

        await updateDoc(pedidoRef, {
          produtos: arrayUnion(novoProduto),
        });

        console.log("Produto adicionado ao pedido com ID: ", pedidoId);
      }
    } else {
      throw new Error("Pedido não encontrado.");
    }
  } catch (erro) {
    console.error("Erro ao adicionar produto ao pedido: ", erro);
    throw erro;
  }
}

export async function criarNovoPedido() {
  try {
    const user = auth.currentUser;

    if (!user) {
      throw new Error("Usuário não está autenticado.");
    }

    const uid = user.uid;

    const novoPedido = {
      uid: uid,
      produtos: [],
      data: new Date().toISOString(),
      status: "Pendente",
    };

    const docRef = await addDoc(pedidosCol, novoPedido);
    return docRef.id;
  } catch (erro) {
    console.error("Erro ao criar novo pedido: ", erro);
    throw erro;
  }
}

export async function finalizarPedido(pedidoId) {
  try {
    const pedidoRef = doc(db, "pedidos", pedidoId);

    await updateDoc(pedidoRef, {
      status: "Em andamento",
      dataConclusao: new Date().toISOString(),
    });

    console.log("Pedido finalizado com sucesso.");
  } catch (erro) {
    console.error("Erro ao finalizar o pedido: ", erro);
    throw erro;
  }
}

export async function obterPedidoPendente(uid) {
  try {
    const q = query(
      pedidosCol,
      where("uid", "==", uid),
      where("status", "==", "Pendente")
    );
    const querySnapshot = await getDocs(q);

    if (!querySnapshot.empty) {
      const pedidoDoc = querySnapshot.docs[0];
      return { id: pedidoDoc.id, ...pedidoDoc.data() };
    } else {
      return null;
    }
  } catch (erro) {
    console.error("Erro ao buscar pedido pendente: ", erro);
    throw erro;
  }
}

export async function obterProdutosDoCarrinho(pedidoId) {
  try {
    const pedidoRef = doc(db, "pedidos", pedidoId);
    const pedidoSnap = await getDoc(pedidoRef);

    if (pedidoSnap.exists()) {
      const pedidoData = pedidoSnap.data();
      return pedidoData.produtos;
    } else {
      throw new Error("Pedido não encontrado.");
    }
  } catch (erro) {
    console.error("Erro ao obter produtos do carrinho:", erro);
    throw erro;
  }
}

export const atualizarProdutoNoCarrinho = async (
  pedidoId,
  produtoId,
  novaQuantidade
) => {
  try {
    const pedidoRef = doc(db, "pedidos", pedidoId);
    const pedidoSnap = await getDoc(pedidoRef);

    if (pedidoSnap.exists()) {
      const produtos = pedidoSnap.data().produtos;
      const produtoIndex = produtos.findIndex((prod) => prod.id === produtoId);

      if (produtoIndex > -1) {
        produtos[produtoIndex].quantidade = novaQuantidade;

        await updateDoc(pedidoRef, {
          produtos: produtos,
        });

        console.log(
          `Produto ${produtoId} atualizado para a quantidade ${novaQuantidade}.`
        );
      }
    } else {
      throw new Error("Pedido não encontrado.");
    }
  } catch (erro) {
    console.error("Erro ao atualizar o produto no carrinho:", erro);
  }
};

export const removerProdutoDoCarrinho = async (pedidoId, produtoId) => {
  try {
    const pedidoRef = doc(db, "pedidos", pedidoId);
    const pedidoSnap = await getDoc(pedidoRef);

    if (pedidoSnap.exists()) {
      const produtos = pedidoSnap.data().produtos;
      const produtosAtualizados = produtos.filter(
        (prod) => prod.id !== produtoId
      );

      await updateDoc(pedidoRef, {
        produtos: produtosAtualizados,
      });

      console.log(`Produto ${produtoId} removido do pedido ${pedidoId}`);
    } else {
      throw new Error("Pedido não encontrado.");
    }
  } catch (erro) {
    console.error("Erro ao remover o produto do carrinho:", erro);
  }
};
