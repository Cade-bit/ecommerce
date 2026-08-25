import { BrowserRouter, Route, Routes } from "react-router"
import HomePage from "./pages/HomePage"
import Products from "./pages/Products"
import ProductDetail from "./pages/ProductDetail"
import Contact from "./pages/Contact"
import PrivacyPolicy from "./pages/PrivacyPolicy"
import TermsOfService from "./pages/TermsOfService"
import NavigationLayout from "./components/Navigation/NavigationLayout"

function App() {

  return (
    <>
    <BrowserRouter>
    <NavigationLayout />
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="/products" element={<Products />}></Route>
      <Route path="/product/:id" element={<ProductDetail />}></Route>
      <Route path="/contact" element={<Contact />}></Route>
      <Route path="/privacy-policy" element={<PrivacyPolicy />}></Route>
      <Route path="/terms-of-service" element={<TermsOfService />}></Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
