import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./Login.css";
export default function Login() {

    const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault(); // prevent page reload

    if (!username || !password) {
      setError("Please enter both username and password.");
    } else {
      setError("");
      // Redirect to Home page
     navigate("/main_page");
    }
  };
  return (
<>

    <div className="main-home">
      <div className="login-container">
      <form id="loginForm"  onSubmit={handleLogin}>
        <h2>Login</h2>
           {error && <div id="err" className="error">{error}</div>}
        <input type="text" id="username" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} required/>
        <input type="password" id="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required/>
        <button type="submit">Log In</button>

        <div className="social-links">
          <p style={{color:"#333"}}>or sign in with</p>
          <a href="https://facebook.com" style={{background:"#3b5998"}} ><i className="fa-brands fa-facebook-f"></i></a>
          <a href="https://instagram.com" style={{background:"#e1306c"}} ><i className="fa-brands fa-instagram"></i></a>
          <a href="https://twitter.com" style={{background:"#1da1f2"}} ><i className="fa-brands fa-twitter"></i></a>
        </div>
      </form>
    </div>
    </div>

</>
  )
}
  
  
  
 