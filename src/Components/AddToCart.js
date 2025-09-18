import React from "react";

export default function AddToCart({ product }) {
  function addToCart() {
    const user = JSON.parse(localStorage.getItem("user"));
    if (!user) {
      alert("Please log in to add items to cart");
      return;
    }

    const cartKey = `cart_${user.id}`;
    const existingCart = JSON.parse(localStorage.getItem(cartKey)) || [];

    const index = existingCart.findIndex(item => item.name === product.name);
    if (index >= 0) {
      existingCart[index].qty += 1; // increment quantity
    } else {
      existingCart.push({ ...product, qty: 1 });
    }

    localStorage.setItem(cartKey, JSON.stringify(existingCart));
    alert("Item added to cart!");
  }

  return <button onClick={addToCart}>Add to Cart</button>;
}
