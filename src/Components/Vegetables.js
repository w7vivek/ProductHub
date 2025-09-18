import React, { useState } from "react";
import "./vegetables.css";
import broccoli from "./broccoli.jpeg";
import carrot from "./carrot.jpeg";
import bellpepper from "./bellpepper.jpeg";
import potato from "./potato.jfif";
import Spinach from "./Spinach.jpeg";
import tomato from "./tomato.jpeg";

export default function Vegetables() {
  const [quantities, setQuantities] = useState({});
  const [modalText, setModalText] = useState("");
  const [showModal, setShowModal] = useState(false);

  // Update quantity input for specific vegetable
  function handleQuantityChange(name, value) {
    const num = Number(value);
    if (!isNaN(num) && num >= 0) {
      setQuantities((prev) => ({ ...prev, [name]: num }));
    }
  }

  // Add item to cart (localStorage)
  function addToCart(name, price) {
    const qty = quantities[name];
    if (!qty || qty <= 0) {
      alert("Please enter a valid quantity greater than zero.");
      return;
    }

    const existingCart = JSON.parse(localStorage.getItem("cart")) || [];
    const itemIndex = existingCart.findIndex((item) => item.name === name);

    if (itemIndex >= 0) {
      // If item already in cart, update quantity
      existingCart[itemIndex].qty += qty;
    } else {
      existingCart.push({ name, price, qty });
    }

    localStorage.setItem("cart", JSON.stringify(existingCart));

    setModalText(`Added ${qty} Kg of ${name} to your cart`);
    setShowModal(true);

    // Reset the quantity input
    setQuantities((prev) => ({ ...prev, [name]: 0 }));
  }

  function closeBuyModal() {
    setShowModal(false);
  }

  const vegData = [
    { name: "Broccoli", price: 300, img: broccoli, desc: "Fresh, crunchy, and nutrient-rich." },
    { name: "Carrot", price: 60, img: carrot, desc: "Sweet and perfect for salads or cooking." },
    { name: "Bell Pepper", price: 227, img: bellpepper, desc: "Colorful and full of vitamins." },
    { name: "Potato", price: 57, img: potato, desc: "Versatile classic for every meal." },
    { name: "Spinach", price: 190, img: Spinach, desc: "Leafy green, iron-rich goodness." },
    { name: "Tomato", price: 79, img: tomato, desc: "Juicy, ripe, packed with flavor." },
  ];

  return (
    <>
      <title>Buy Fresh Vegetables 🥦🥔 | The Produce Hub</title>

      <section className="gallery-section">
        <h2>Our Fresh Vegetables</h2>
        <div className="gallery">
          {vegData.map(({ name, price, img, desc }) => (
            <div className="veg-card" key={name}>
              <img src={img} alt={name} />
              <h3>{name}</h3>
              <p>{desc}</p>
              <p>₹{price}/Kg</p>
              <p>
                Kg:{" "}
                <input
                  type="number"
                  min="0"
                  placeholder="Select the quantity"
                  value={quantities[name] || ""}
                  onChange={(e) => handleQuantityChange(name, e.target.value)}
                />
              </p>
              <button className="buy-btn" onClick={() => addToCart(name, price)}>
                Buy
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Buy Modal */}
      {showModal && (
        <div id="buyModal" className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeBuyModal}>&times;</span>
            <p>{modalText}</p>
            <button onClick={closeBuyModal} className="modal-ok-btn">OK</button>
          </div>
        </div>
      )}
    </>
  );
}
