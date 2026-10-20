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

import { BrowserRouter, Route, Routes } from "react-router";
import { useEffect, useState } from "react";
// import AxiosInstance from "./components/Axios/AxiosInstance";

/* Notes to build the categorical navbar and view of products
1) Call the api view for categories ^
2) Give access to the page that will display the products dynamically (one page that displays the products based on the category link clicked on in the navbar)
3) Loop through the the array to dynamically display the categories in the navbar (possibly hardcode the other links i.e Home, Contact, Login, Profile and Cart)  */ 

function App() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [error, setError] = useState("");
  const [catError, setCatError] = useState("");

  const baseUrl = 'http://127.0.0.1:8000/'

  useEffect(function () {
    async function fetchProducts() {
      try {
        const res = await fetch(`${baseUrl}/api/catalog/products/`);

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

  useEffect(function () {
    async function fetchCategories() {
      try {
        const res = await fetch (`${baseUrl}/api/catalog/categories`);

        if (!res.ok)
          throw new Error("Something went wrong fethcing the categories");
        const data = await res.json();
        setCategories(data);
        console.log(data);
      } catch (err) {
        if (!(err instanceof Error && err.name === "AbortError")) {
          const message = 
          err instanceof Error ? err.message : "Unable to fetch catalog";
          setCatError(message);
          console.error(message);
        }
      }
    }
    fetchCategories();
  }, [])

    /* useEffect(
    function() {
      async function fetchProducts() {
        try {
          const res = await fetch(`${baseUrl}/api/catalog/products`);
          const data = await res.json();
          const filtered = data.filter(
            (product) => product.category === category
          );
          setProducts(data);
          console.log(data)
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
    }, [category]) */


  return (
    <>
      <BrowserRouter>
        <NavigationLayout categories={categories} catError={catError}/>
        <Routes>
          <Route index element={<HomePage />}></Route>
          <Route
            path="/products"
            element={<Products products={products} error={error} />}
          ></Route>
          <Route path="/${category.name}/${categories.slug}" element={<Products categories={categories} catError={catError} />}></Route>
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
