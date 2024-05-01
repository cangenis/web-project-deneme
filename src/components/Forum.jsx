import React from "react";
import { useAuth } from "../AuthContext";

function Forum() {
  const { user } = useAuth();

  return (
    <div style={{ padding: "20px" }}>
      <h1>Forum</h1>
      <p>
        Welcome to the forum {user.username}! This page is under construction.
      </p>
    </div>
  );
}

export default Forum;
