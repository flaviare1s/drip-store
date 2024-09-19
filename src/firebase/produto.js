import {
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import { db } from "./config";

export const produtosCol = collection(db, "produtos");

export async function getProdutos() {
  const snapshot = await getDocs(produtosCol);
  const produtos = [];

  snapshot.forEach((doc) => {
    produtos.push({ ...doc.data(), id: doc.id });
  });

  return produtos;
}

export async function getProduto(id) {
  const produtoDoc = doc(produtosCol, id);

  const produto = await getDoc(produtoDoc);

  return { ...produto.data(), id: produto.id };
}

export async function getProdutosTipo(tipo) {
  const filtro = query(produtosCol, where("tipo", "==", tipo));
  const snapshot = await getDocs(filtro);
  const produtos = [];

  snapshot.forEach((doc) => {
    produtos.push({ ...doc.data(), id: doc.id });
  });
  console.log("Produtos retornados do Firestore:", produtos);
  return produtos;
}

function normalizarTexto(texto) {
  texto = texto.toLowerCase();
  return texto.charAt(0).toUpperCase() + texto.slice(1);
}

export async function buscarProdutos(palavraChave) {
  try {
    if (!palavraChave || palavraChave.trim() === "") {
      return [];
    }

    const palavraChaveNormalizada = normalizarTexto(palavraChave.trim());

    const queries = [
      query(produtosCol, where("tipo", "==", palavraChaveNormalizada)),
      query(produtosCol, where("marca", "==", palavraChaveNormalizada)),
      query(produtosCol, where("nome", "==", palavraChaveNormalizada)),
      query(produtosCol, where("categoria", "==", palavraChaveNormalizada)),
      query(produtosCol, where("estado", "==", palavraChaveNormalizada)),
      query(produtosCol, where("sexo", "==", palavraChaveNormalizada)),
      query(produtosCol, where("cor", "==", palavraChaveNormalizada)),
      query(produtosCol, where("tamanho", "==", palavraChaveNormalizada)),
      query(produtosCol, where("search", "==", palavraChaveNormalizada)),
    ];

    const resultados = [];
    for (let q of queries) {
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        const data = doc.data();
        if (!resultados.find((item) => item.id === doc.id)) {
          resultados.push({ id: doc.id, ...data });
        }
      });
    }

    return resultados;
  } catch (error) {
    console.error("Erro ao buscar produtos:", error);
    return [];
  }
}
