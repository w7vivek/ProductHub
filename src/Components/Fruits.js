import React, { useState, useEffect } from "react";
import "./fruits.css";
import appleImg from "./apple.jpeg";
import bananaImg from "./banana.jpeg";
import orangeImg from "./orange.jpeg";
import grapesImg from "./grapes.jpeg";
import mangoImg from "./mango.jpeg";
import watermelonImg from "./watermelon.jpeg";

export default function Fruits() {
  const [quantities, setQuantities] = useState({});
  const [modalText, setModalText] = useState("");
  const [showModal, setShowModal] = useState(false);

  // ✅ Initialize cart in localStorage
  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    if (!savedCart) {
      localStorage.setItem("cart", JSON.stringify([]));
    }
  }, []);

  function handleQuantityChange(name, value) {
    const num = Number(value);
    if (!isNaN(num) && num >= 0) {
      setQuantities((prev) => ({ ...prev, [name]: num }));
    }
  }

  function addToCart(fruit) {
    const qty = quantities[fruit.name];
    if (!qty || qty <= 0) {
      alert("Please enter a valid quantity greater than zero.");
      return;
    }

    // Get cart
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    // Check if already exists
    const existing = cart.find((item) => item.name === fruit.name);

    if (existing) {
      existing.qty += qty;
    } else {
      cart.push({ name: fruit.name, price: fruit.price, qty: qty });
    }

    localStorage.setItem("cart", JSON.stringify(cart));

    setModalText(`Added ${qty} ${fruit.unit} of ${fruit.name} ✅`);
    setShowModal(true);
  }

  function closeBuyModal() {
    setShowModal(false);
  }

  const fruitsData = [
    { name: "Apple", price: 289, unit: "Kg", img: appleImg, desc: "Fresh, crisp, and full of nutrients." },
    { name: "Banana", price: 80, unit: "Dozen", img: bananaImg, desc: "Sweet and energy-rich natural snack." },
    { name: "Orange", price: 220, unit: "Kg", img: orangeImg, desc: "Juicy & packed with Vitamin C." },
    { name: "Grapes", price: 199, unit: "Kg", img: grapesImg, desc: "Sweet and seedless table grapes." },
    { name: "Mango", price: 170, unit: "Kg", img: mangoImg, desc: "Ripe, delicious seasonal favorite." },
    { name: "Watermelon", price: 50, unit: "Kg", img: watermelonImg, desc: "Hydrating and perfect for summer." },
  ];

  return (
    <>
      <title>Buy Fresh Fruits 🍎🥑 | The Produce Hub</title>
      <div className="fruits-page">
        <section className="gallery-section">
          <h2>Our Fresh Fruits</h2>
          <div className="gallery">
            {fruitsData.map((fruit) => (
              <div className="veg-card" key={fruit.name}>
                <img src={fruit.img} alt={fruit.name} />
                <h3>{fruit.name}</h3>
                <p>{fruit.desc}</p>
                <p>₹{fruit.price}/{fruit.unit}</p>
                <p>
                  {fruit.unit}:{" "}
                  <input
                    type="number"
                    min="0"
                    placeholder="Select the quantity"
                    value={quantities[fruit.name] || ""}
                    onChange={(e) => handleQuantityChange(fruit.name, e.target.value)}
                  />
                </p>
                <button className="buy-btn" onClick={() => addToCart(fruit)}>
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* Modal */}
      {showModal && (
        <div id="buyModal" className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeBuyModal}>×</span>
            <p>{modalText}</p>
            <button onClick={closeBuyModal} className="modal-ok-btn">OK</button>
          </div>
        </div>
      )}
    </>
  );
}
