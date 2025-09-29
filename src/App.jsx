import { BrowserRouter, Routes, Route } from "react-router-dom";
 import HomePage from "./pages/homePage";
import Products from "./pages/products";
import AboutUs from "./pages/aboutUs";
import Collections from "./pages/collections";
import Category from "./pages/category";
import ScrollToHashElement from "./components/ScrollToHashElement";
import Login from "./pages/login"
import SignUp from "./pages/signUp"
import Navbar from './components/navbar'
import CartDrawer from'./components/cartDrawer'

function App() {

  return (
     
  <BrowserRouter>
  <Navbar />
  <CartDrawer />
  <ScrollToHashElement />
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="/products" element={<Products />}></Route>
      <Route path="/aboutUs" element={<AboutUs />}></Route>
      <Route path="/collections" element={<Collections />} />
      <Route path="/collections/:collectionName" element={<Category />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/signUp" element={<SignUp />}></Route>


    </Routes>
  </BrowserRouter>
  )
}

export default App
