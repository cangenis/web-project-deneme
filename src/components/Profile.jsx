import React from "react";
import { useAuth } from "../AuthContext"; // Make sure you have AuthContext to provide user data

function Profile() {
  const { user } = useAuth(); // Retrieve user data from context

  if (!user) {
    return <h1>Please log in to view this page</h1>;
  }

  return (
    <div style={{ padding: "20px" }}>
      <h1>My Organiz'Asso Profile</h1>
      <p>
        <strong>Name:</strong> {user.name}
      </p>
      <p>
        <strong>Surname:</strong> {user.surname}
      </p>
      <p>
        <strong>Telephone:</strong> {user.telephone}
      </p>
      <p>
        <strong>Username:</strong> {user.username}
      </p>
      <p>
        <strong>Email:</strong> {user.email}
      </p>
    </div>
  );
}

export default Profile;
