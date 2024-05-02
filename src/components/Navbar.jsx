import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../AuthContext";
import "../styles/Navbar.css";
import horizontalLogo from "../assets/organizasso-horizontal-transparent.png";

function Navbar() {
  const { user, logout } = useAuth();

  return (
    <nav className="navbar-container">
      <Link to="/" className="navbar-logo">
        <img src={horizontalLogo} alt="Horizontal Logo" />
      </Link>
      <div className="navbar-links">
        <input type="text" placeholder="Search..." className="navbar-search" />
        {user ? (
          <>
            <Link to="/profile" style={{ marginRight: "10px" }}>
              Go to Profile
            </Link>
            <button onClick={logout}>Logout</button>
          </>
        ) : (
          <>
            <Link to="/login" style={{ marginRight: "10px" }}>
              Login
            </Link>
            <Link to="/signup" style={{ marginRight: "10px" }}>
              Sign Up
            </Link>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
