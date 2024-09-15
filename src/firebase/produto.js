import {
  collection,
  doc,
  getDoc,
  getDocs,
  orderBy,
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

  return produtos;
}

export async function getProdutosCategoria(categoria) {
  const filtro = query(produtosCol, where("categoria", "==", categoria));
  const snapshot = await getDocs(filtro);
  const produtos = [];

  snapshot.forEach((doc) => {
    produtos.push({ ...doc.data(), id: doc.id });
  });

  return produtos;
}

export async function getProdutosEstado(estado) {
  const filtro = query(produtosCol, where("estado", "==", estado));
  const snapshot = await getDocs(filtro);
  const produtos = [];

  snapshot.forEach((doc) => {
    produtos.push({ ...doc.data(), id: doc.id });
  });

  return produtos;
}

export async function getProdutosMarca(marca) {
  const filtro = query(produtosCol, where("marca", "==", marca));
  const snapshot = await getDocs(filtro);
  const produtos = [];

  snapshot.forEach((doc) => {
    produtos.push({ ...doc.data(), id: doc.id });
  });

  return produtos;
}

export async function getProdutosGenero(sexo) {
  const filtro = query(produtosCol, where("sexo", "==", sexo));
  const snapshot = await getDocs(filtro);
  const produtos = [];

  snapshot.forEach((doc) => {
    produtos.push({ ...doc.data(), id: doc.id });
  });

  return produtos;
}

export async function getProdutosComDesconto() {
  const filtro = query(
    produtosCol,
    where("desconto", ">", 0),
    orderBy("desconto", "desc")
  );

  const snapshot = await getDocs(filtro);
  const produtos = [];

  snapshot.forEach((doc) => {
    produtos.push({ ...doc.data(), id: doc.id });
  });

  return produtos;
}

export async function getProdutosOrdenadosPorPreco(ordem = "asc") {
  const filtro = query(produtosCol, orderBy("preco", ordem));
  const snapshot = await getDocs(filtro);
  const produtos = [];

  snapshot.forEach((doc) => {
    produtos.push({ ...doc.data(), id: doc.id });
  });

  return produtos;
}
