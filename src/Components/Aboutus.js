import React from "react";
import "./about.css"; // reuse your existing styles
// adjust the path if logo is in a different folder

const About = () => {
  return (
    <>
      <main className="about-page">
        <section className="about-section">
          <h2>About The Produce Hub</h2>
          <p>
            Welcome to The Produce Hub, your trusted online marketplace for
            fresh fruits and vegetables. We take pride in sourcing the highest
            quality, farm-fresh produce directly to your doorstep.
          </p>
          <p>
            Our mission is to provide customers with fresh, nutritious, and
            delicious food while supporting local farmers and promoting
            sustainable agriculture.
          </p>
          <p>
            From crisp apples to vibrant carrots, we handpick every item with
            care to ensure you get the best nature has to offer.
          </p>

          <h3>Why Choose Us?</h3>
          <ul>
            <li>Locally sourced, fresh, and seasonal produce</li>
            <li>Strict quality control and freshness guarantee</li>
            <li>Eco-friendly packaging and delivery practices</li>
            <li>Easy online ordering and reliable delivery</li>
          </ul>

          <h3>Contact Us</h3>
          <p>
            We'd love to hear from you! Reach out via email at{" "}
            <a href="mailto:support@producehub.com">support@producehub.com</a> or
            call us at (123) 456-7890.
          </p>
        </section>
      </main>
    </>
  );
};

export default About;
