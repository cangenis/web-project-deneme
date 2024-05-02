import React, { useState } from "react";
import axios from "axios";
import { useAuth } from "../AuthContext";
import { Link } from "react-router-dom";
import "../styles/Login.css";
import nameLogo from "../assets/organizasso-name-transparent.png";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth(); // Get the login function from context

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("http://localhost:5001/login", {
        email,
        password,
      });
      if (response.data) {
        console.log(response.data);
        login(response.data); // Pass user data to login function
      }
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit} className="login-form">
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            src={nameLogo}
            alt="Name Logo"
            style={{
              maxWidth: "200px",
            }}
          />
        </div>
        <p></p>
        <input
          type="email"
          value={email}
          placeholder="e-mail"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          value={password}
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" className="login-link">
          Login
        </button>
      </form>
      <p>
        Don't have an account? <Link to="/signup">Sign up now!</Link>
      </p>
    </div>
  );
}

export default Login;
