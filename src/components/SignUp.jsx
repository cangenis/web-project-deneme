import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import nameLogo from "../assets/organizasso-name-transparent.png";

function SignUp() {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [telephone, setTelephone] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("http://localhost:5001/register", {
        name,
        surname,
        telephone,
        username,
        email,
        password,
      });
      setMessage("User created successfully: " + response.data.username);
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
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <img src={nameLogo} alt="Name Logo" style={{ maxWidth: "200px" }} />
      <form onSubmit={handleSubmit}>
        <p></p>
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
          <button type="submit">Register</button>
        </div>
      </form>
      <p>{message}</p>
      <p>
        Already have an account?? <Link to="/login">Login now!</Link>
      </p>
    </div>
  );
}

export default SignUp;
