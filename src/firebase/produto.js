import { collection, doc, getDoc, getDocs, query, where } from "firebase/firestore";
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
