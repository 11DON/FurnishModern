import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

import App from "./App.jsx";
import { AuthProvider } from "./components/AuthContext.jsx";
import { CartProvider } from "./components/cartContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <CartProvider>
      <App />
      </CartProvider>
    </AuthProvider>
  </StrictMode>
);
