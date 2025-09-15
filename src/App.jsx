import { BrowserRouter, Routes, Route } from "react-router-dom";
 import HomePage from "./pages/homePage";
import Products from "./pages/products";
import AboutUs from "./pages/aboutUs";
function App() {

  return (
     
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="/products" element={<Products />}></Route>
      <Route path="/aboutUs" element={<AboutUs />}></Route>
    </Routes>
  </BrowserRouter>
  )
}

export default App
