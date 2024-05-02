import React, { useState } from "react";
import axios from "axios";
import { useAuth } from "../AuthContext";
import { Link } from "react-router-dom";
import "../styles/SignUp.css";
import nameLogo from "../assets/organizasso-name-transparent.png";

function SignUp() {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [telephone, setTelephone] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const { signup } = useAuth(); // Use signup from context

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("http://localhost:5001/register", {
        name,
        surname,
        username,
        email,
        telephone,
        password,
      });
      setMessage("User created successfully: " + response.data.username);
      if (response.data) {
        signup(response.data); // Pass user data to signup function
      }
    } catch (error) {
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        setMessage("Failed to create user: " + error.response.data.error);
      } else if (error.request) {
        // The request was made but no response was received
        setMessage("Failed to create user: No response from server");
      } else {
        // Something happened in setting up the request that triggered an Error
        setMessage("Error: " + error.message);
      }
    }
  };

  return (
    <div className="sign-up-container">
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
      <form onSubmit={handleSubmit} className="sign-up-form">
        <div>
          <label>
            Name:
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              placeholder="Required"
            />
          </label>
        </div>
        <div>
          <label>
            Surname:
            <input
              type="text"
              value={surname}
              onChange={(e) => setSurname(e.target.value)}
              required
              placeholder="Required"
            />
          </label>
        </div>
        <div>
          <div>
            <label>
              Username:
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                placeholder="Required"
              />
            </label>
          </div>
          <div>
            <label>
              Email:
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="Required"
              />
            </label>
          </div>
          <label>
            Telephone:
            <input
              type="text"
              value={telephone}
              onChange={(e) => setTelephone(e.target.value)}
              placeholder="Optional"
            />
          </label>
        </div>
        <div>
          <label>
            Password:
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </label>
        </div>
        <div>
          <button type="submit" className="sign-up-link">
            Register
          </button>
        </div>
      </form>
      <p>{message}</p>
      <p>
        Already have an account? <Link to="/login">Login now!</Link>
      </p>
    </div>
  );
}

export default SignUp;
