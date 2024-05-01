import React, { createContext, useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for redirection

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate(); // Hook for navigating

  const login = (userCredentials) => {
    setUser({
      id: userCredentials.id,
      name: userCredentials.name,
      surname: userCredentials.surname,
      telephone: userCredentials.telephone,
      username: userCredentials.username,
      email: userCredentials.email,
    });
    navigate("/"); // Redirect to the home page after login
  };

  const logout = () => {
    setUser(null); // Set the user as logged out
    navigate("/login"); // Redirect to login page after logout
  };

  // Provide user, login, and logout throughout the component tree
  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
