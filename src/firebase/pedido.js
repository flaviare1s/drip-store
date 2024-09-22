import { collection, addDoc } from "firebase/firestore";
import { db, auth } from "./config";

export const pedidosCol = collection(db, "pedidos");

export async function adicionarAoCarrinho(produto) {
  try {
    const user = auth.currentUser;

    if (!user) {
      throw new Error("Usuário não está autenticado.");
    }

    const novoPedido = {
      uid: user.uid,
      produtos: [
        {
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
        },
      ],
      data: new Date().toISOString(),
      status: "pendente",
    };

    const docRef = await addDoc(pedidosCol, novoPedido);
    console.log("Pedido adicionado com ID: ", docRef.id);

    return docRef.id;
  } catch (erro) {
    console.error("Erro ao adicionar pedido: ", erro);
    throw erro;
  }
}
