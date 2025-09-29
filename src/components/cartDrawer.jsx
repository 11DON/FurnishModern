// CartDrawer.jsx
import { useContext } from "react";
import { CartContext } from "./cartContext.jsx";

export default function CartDrawer() {
  // ⬅️ add addToCart here
  const { cart, addToCart, removeFromCart, decreaseQuantity, clearCart } = useContext(CartContext);

  const fixUrl = (url) => (url ? url.replace("/RandomAssets/", "/") : "");
  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleCheckout = async () => {
    const response = await fetch("http://localhost:5000/create-checkout-session", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ items: cart }),
    });

    const data = await response.json();
    window.location.href = data.url; // Redirect to Stripe checkout
  };
  return (
    <div className="offcanvas offcanvas-end" tabIndex="-1" id="cartDrawer">
      <div className="offcanvas-header">
        <h5>Your Cart</h5>
        <button className="btn-close text-reset" data-bs-dismiss="offcanvas"></button>
      </div>
      <div className="offcanvas-body">
        {cart.length === 0 ? (
          <p>No items in cart</p>
        ) : (
          <ul className="list-group">
            {cart.map((item) => (
              <li
                key={item._id}
                className="list-group-item d-flex justify-content-between align-items-center"
              >
                <div className="d-flex align-items-center">
                  <img
                    src={fixUrl(item.image)}
                    alt={item.name}
                    width="50"
                    height="50"
                    className="me-2 rounded"
                  />
                  <div>
                    <strong>{item.name}</strong>
                    <p className="mb-0">${item.price} × {item.quantity}</p>
                  </div>
                </div>
                <div className="d-flex align-items-center">
                  <button
                    className="btn btn-sm btn-outline-secondary me-1"
                    onClick={() => decreaseQuantity(item._id)}
                  >
                    -
                  </button>
                  <button
                    className="btn btn-sm btn-outline-secondary me-2"
                    onClick={() => addToCart(item)} // ✅ now works
                  >
                    +
                  </button>
                  <button
                    className="btn btn-sm btn-danger"
                    onClick={() => removeFromCart(item._id)}
                  >
                    <i className="bi bi-trash"></i>
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}

        {cart.length > 0 && (
          <>
            <div className="mt-3 d-flex justify-content-between">
              <strong>Total:</strong>
              <strong>${totalPrice.toFixed(2)}</strong>
            </div>
            <div className="mt-3 d-flex justify-content-between">
              <button className="btn btn-warning" onClick={clearCart}>
                Clear
              </button>
              <button className="btn btn-success" onClick={handleCheckout}>Checkout</button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
