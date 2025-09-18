import React from 'react'
import vegetablesImg from "./vegetables.jpeg";
import fruitsImg from "./Fruits.jpeg";
import discountImg from "./discount.png";
import deliveryImg from "./delivery.png";
import "./main_page.css";
export default function Home() {
  return (
    <>
  
  <title>Grocery Shop</title>

  <div class="main">
    
    <div class="hero-section">
      <h1>Welcome to The Produce Hub!</h1>
      <p>Fresh Vegetables and Fruits delivered to your doorstep. Discover our best offers today.</p>
      <a href="/Vegetables" class="shop-now-btn">Shop Now</a>
    </div>

    <div class="features-section">
      <div class="feature">
        <img src={vegetablesImg} alt="Fresh Products" class="img2"/>
        <h3>Fresh Products</h3>
        <p>We offer the freshest Vegetables every day.</p>
      </div>
      
      <div class="feature">
        <img src={fruitsImg} alt="Best Offers"/>
        <h3>Fresh Fruits</h3>
        <p>We offer the freshest fruits every day.</p>
      </div>
      
      <div class="feature">
        <img src={discountImg} alt="Best Offers"/>
        <h3>Best Offers</h3>
        <p>Save more with our exclusive deals and discounts.</p>
      </div>
      
      <div class="feature">
        <img src={deliveryImg} alt="Fast Delivery"/>
        <h3>Fast Delivery</h3>
        <p>Get your order delivered to your door in no time.</p>
      </div>

    </div>
  </div>

    </>
  )
}


