import HomePage from "./pages//Home/HomePage";
import Products from "./pages/Products/ProductsPage";
import NavigationLayout from "./components/Navigation/NavigationLayout";
import PageNotFound from "./pages/PageNotFound";
import LogInPage from "./pages/Login/LogInPage";
import RegisterPage from "./pages/Register/RegisterPage";
import ContactPage from "./pages/Contact/ContactPage";
import ProductDetailPage from "./pages/Products/ProductDetailPage";
import TermsOfServicePage from "./pages/Legal/TermsOfServicePage";
import PrivacyPolicyPage from "./pages/Legal/PrivacyPolicyPage";

import { BrowserRouter, Route, Routes, useParams } from "react-router";
import { useEffect, useState } from "react";
import AxiosInstance from "./components/Axios/AxiosInstance";

function App() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState("");
  const { category } = useParams();

  const baseUrl = 'http://127.0.0.1:8000/'

  // useEffect(function () {
  //   async function fetchProducts() {
  //     try {
  //       const res = await fetch(`${baseUrl}/api/catalog/products/`);

  //       if (!res.ok)
  //         throw new Error("Something went wrong with fetching the products");
  //       const data = await res.json();
  //       setProducts(data);
  //       setError("");
  //       console.log(data);
  //     } catch (err) {
  //       if (!(err instanceof Error && err.name === "AbortError")) {
  //         const message =
  //           err instanceof Error ? err.message : "Unable to fetch products";
  //         setError(message);
  //         console.error(message);
  //       }
  //     }
  //   }
  //   fetchProducts();
  // }, []);

    useEffect(
    function() {
      async function fetchProducts() {
        try {
          const res = await fetch(`${baseUrl}/api/catalog/products`);
          const data = await res.json();
          const filtered = data.filter(
            (product) => product.category === category
          );
          setProducts(filtered);
          console.log(filtered)
        } catch (err) {
        if (!(err instanceof Error && err.name === "AbortError")) {
          const message =
            err instanceof Error ? err.message : "Unable to fetch products";
          setError(message);
          console.error(message);
        }
      }
      }
      fetchProducts();
    }, [category])


  // useEffect(
  //   function () {
  //     async function fetchProducts() {
  //       try {
  //         const res = await AxiosInstance.get("/api/catalog/products");
  //         const filtered = res.data.filter(
  //           (product) => product.category === category
  //           );
  //           setProducts(filtered);
  //           }
  //           };
  //     fetchProducts();
  //   }, [category])

  return (
    <>
      <BrowserRouter>
        <NavigationLayout  products={products} error={error}/>
        <Routes>
          <Route index element={<HomePage />}></Route>
          <Route
            path="/products"
            element={<Products products={products} error={error} />}
          ></Route>
          <Route path="/products/category/:category" element={<Products products={products} error={error} />}></Route>
          <Route path="/products/:id" element={<ProductDetailPage />}></Route>
          <Route path="/contact" element={<ContactPage />}></Route>
          <Route path="/login" element={<LogInPage />}></Route>
          <Route path="/register" element={<RegisterPage />}></Route>
          <Route path="/privacy-policy" element={<PrivacyPolicyPage />}></Route>
          <Route path="/terms-of-service" element={<TermsOfServicePage />}></Route>
          <Route path="*" element={<PageNotFound />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
