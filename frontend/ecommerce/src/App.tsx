import { BrowserRouter, Route, Routes } from "react-router";
import { useEffect, useState } from "react";
import HomePage from "./pages/HomePage";
import Products from "./pages/ProductsPage";
import ProductDetail from "./pages/ProductDetailPage";
import Contact from "./pages/ContactPage";
import PrivacyPolicy from "./pages/PrivacyPolicyPage";
import TermsOfService from "./pages/TermsOfServicePage";
import NavigationLayout from "./components/Navigation/NavigationLayout";
import PageNotFound from "./pages/PageNotFound";

function App() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState("");

  useEffect(function () {
    async function fetchProducts() {
      try {
        const res = await fetch("http://127.0.0.1:8000/api/products/");

        if (!res.ok)
          throw new Error("Something went wrong with fetching the products");
        const data = await res.json();
        setProducts(data);
        setError("");
        console.log(data);
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
  }, []);

  return (
    <>
      <BrowserRouter>
        <NavigationLayout />
        <Routes>
          <Route index element={<HomePage />}></Route>
          <Route
            path="/products"
            element={<Products products={products} error={error} />}
          ></Route>
          <Route path="/products/:id" element={<ProductDetail />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/privacy-policy" element={<PrivacyPolicy />}></Route>
          <Route path="/terms-of-service" element={<TermsOfService />}></Route>
          <Route path="*" element={<PageNotFound />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
