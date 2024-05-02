import React from "react";
import { Link } from "react-router-dom";
import "../style/Home.css";

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
      <p>
        This is the new way to exchange ideas and participate in discussions.
      </p>
      <Link to="/login" className="join-button">
        Join Us Now!
      </Link>
    </div>
  );
}

export default Home;
