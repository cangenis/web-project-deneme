import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: "20px",
      }}
    >
      <h1>Welcome to Organiz'Asso</h1>
      <p>Select an option to continue:</p>
      <Link
        to="/signin"
        style={{
          margin: "10px",
          padding: "10px",
          backgroundColor: "#4CAF50",
          color: "white",
          textDecoration: "none",
        }}
      >
        Sign In
      </Link>
      <Link
        to="/login"
        style={{
          margin: "10px",
          padding: "10px",
          backgroundColor: "#008CBA",
          color: "white",
          textDecoration: "none",
        }}
      >
        Login
      </Link>
    </div>
  );
}

export default Home;
