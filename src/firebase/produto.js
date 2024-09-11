import { collection, getDocs } from "firebase/firestore";
import { db } from "./config";

export const produtosCol = collection(db, "produtos");

export async function getProdutos() {
  const snapshot = await getDocs(produtosCol)
  const produtos = []

  snapshot.forEach((doc) => {
    produtos.push({...doc.data(), id: doc.id})
  })

  return produtos
}
