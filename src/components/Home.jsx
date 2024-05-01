import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../AuthContext";

function Home() {
  const { user } = useAuth();

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: "20px",
      }}
    >
      {user ? (
        <h1>Welcome, {user.username}!</h1> // Display the user's username
      ) : (
        <h1>Welcome to Organiz'Asso</h1> // Default welcome message
      )}
      <p>
        This is the best place to exchange ideas and participate in discussions.
      </p>
      <p>Select an option to continue:</p>
      <Link
        to="/signup"
        style={{
          margin: "10px",
          padding: "10px",
          backgroundColor: "#4CAF50",
          color: "white",
          textDecoration: "none",
        }}
      >
        Sign Up
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
