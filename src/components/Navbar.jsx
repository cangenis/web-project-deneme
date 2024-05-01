import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../AuthContext";

function Navbar() {
  const { user, logout } = useAuth();

  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "10px",
        backgroundColor: "#f8f9fa",
      }}
    >
      <Link
        to="/"
        style={{ textDecoration: "none", color: "black", fontSize: "24px" }}
      >
        Home
      </Link>
      <div>
        <input
          type="text"
          placeholder="Search..."
          style={{ marginRight: "10px" }}
        />
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
