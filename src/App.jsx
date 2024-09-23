import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header } from "./components/Header/Header.jsx";
import { Home } from "./pages/Home.jsx";
import { Footer } from "./components/Footer.jsx";
import { Login } from "./pages/Login.jsx";
import { Register } from "./pages/Register.jsx";
import { Toaster } from "react-hot-toast";
import { UserContext } from "./contexts/UserContext.jsx";
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { Loader } from "./components/Loader.jsx";
import { auth } from "./firebase/config.js";
import { ResetPassword } from "./pages/ResetPassword.jsx";
import { Products } from "./pages/Products.jsx";
import { Orders } from "./pages/Orders.jsx";
import { Product } from "./pages/Product.jsx";
import { CartCheckout } from "./pages/CartCheckout.jsx";
import { ScrollToTop } from "./components/ScrollToTop.jsx";
import { Shirts } from "./pages/Shirts.jsx";
import { Pants } from "./pages/Pants.jsx";
import { Sneakers } from "./pages/Sneakers.jsx";
import { Phones } from "./pages/Phones.jsx";
import { SearchResults } from "./pages/SearchResults.jsx";
import { CheckoutForm } from "./pages/CheckoutForm.jsx";
export function App() {
  const [usuarioLogado, setUsuarioLogado] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUsuarioLogado(user);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <UserContext.Provider value={usuarioLogado}>
        <BrowserRouter>
          <ScrollToTop />
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="reset-password" element={<ResetPassword />} />
            <Route path="products" element={<Products />} />
            <Route path="products/:id" element={<Product />} />
            <Route path="products/tipo/shirts" element={<Shirts />} />
            <Route path="products/tipo/pants" element={<Pants />} />
            <Route path="products/tipo/sneakers" element={<Sneakers />} />
            <Route path="products/tipo/phones" element={<Phones />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/checkout" element={<CartCheckout />} />
            <Route path="/payment" element={<CheckoutForm />} />
            <Route path="search/:palavraChave" element={<SearchResults />} />
          </Routes>
          <Footer />
        </BrowserRouter>
        <Toaster position="top-center" />
      </UserContext.Provider>
    </>
  );
}
