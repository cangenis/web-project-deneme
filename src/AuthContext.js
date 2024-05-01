// AuthContext.js
import React, { createContext, useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for redirection

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate(); // Hook for navigating

  const login = (userCredentials) => {
    // Simulate setting the user as logged in
    setUser({ id: "123", username: "user" }); // Simulate a user object
    navigate("/"); // Redirect to the home page after login
  };

  const logout = () => {
    setUser(null); // Set the user as logged out
    navigate("/login"); // Optional: Redirect to login page after logout
  };

  // Provide user, login, and logout throughout the component tree
  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
