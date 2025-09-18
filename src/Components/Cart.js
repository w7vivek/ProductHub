import React, { useEffect, useState } from "react";
import "./cart_buy.css";

export default function Cart() {
  const [cart, setCart] = useState([]);

  // ✅ Load cart from localStorage on first render
  useEffect(() => {
    try {
      const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
      setCart(savedCart);
    } catch {
      setCart([]);
    }
  }, []);

  // ✅ Update quantity
  function handleQuantityChange(name, qty) {
    const updatedQty = Math.max(1, Number(qty)); // Ensure qty is at least 1
    const updatedCart = cart.map((item) =>
      item.name === name ? { ...item, qty: updatedQty } : item
    );
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  }

  // ✅ Remove item
  function removeItem(name) {
    const updatedCart = cart.filter((item) => item.name !== name);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  }

  // ✅ Calculate totals
  const subtotal = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  const delivery = cart.length === 0 ? 0 : subtotal > 3000 ? 0 : 30;
  const total = subtotal + delivery;

  // ✅ Send cart to backend
  function sendCartToServer() {
    fetch("http://localhost:5000/cart/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        userId: "12345", // Replace with actual userId if using auth
        items: cart.map((item) => ({
          name: item.name,
          price: item.price,
          qty: item.qty,
        })),
        subtotal,
        delivery,
        total,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        alert("Cart sent to server successfully!");
      })
      .catch((err) => console.error("Error:", err));
  }

  return (
    <>
      <title>Your Cart | The Produce Hub</title>
      <div className="cart-page">
        <section className="cart-section">
          <h2>Your Cart</h2>
          {cart.length === 0 ? (
            <p>Your cart is empty 🛒</p>
          ) : (
            <>
              <table className="cart-table">
                <thead>
                  <tr>
                    <th>Item</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Total</th>
                    <th>Remove</th>
                  </tr>
                </thead>
                <tbody>
                  {cart.map((item) => (
                    <tr key={item.name}>
                      <td>{item.name}</td>
                      <td>₹{item.price}</td>
                      <td>
                        <input
                          type="number"
                          value={item.qty}
                          min="1"
                          onChange={(e) =>
                            handleQuantityChange(item.name, e.target.value)
                          }
                        />
                      </td>
                      <td>₹{item.price * item.qty}</td>
                      <td>
                        <button
                          className="remove-btn"
                          onClick={() => removeItem(item.name)}
                        >
                          🗑 Remove
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

              <div className="cart-summary">
                <h3>Cart Summary</h3>
                <p>Subtotal: ₹{subtotal}</p>
                <p>Delivery: ₹{delivery}</p>
                <hr />
                <p>
                  <strong>Total: ₹{total}</strong>
                </p>
                <button className="checkout-btn" onClick={sendCartToServer}>
                  Proceed to Checkout
                </button>
              </div>
            </>
          )}
        </section>
      </div>
    </>
  );
}
