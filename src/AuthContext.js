import React, { createContext, useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

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
      username: userCredentials.username,
      email: userCredentials.email,
      telephone: userCredentials.telephone,
    });
    navigate("/forum"); // Redirect to the forum page after login
  };

  const signup = (userCredentials) => {
    setUser({
      id: userCredentials.id,
      name: userCredentials.name,
      surname: userCredentials.surname,
      telephone: userCredentials.telephone,
      username: userCredentials.username,
      email: userCredentials.email,
    });
    navigate("/login"); // Redirect to the forum page after signup
  };

  const logout = () => {
    setUser(null); // Set the user as logged out
    navigate("/"); // Redirect to home page after logout
  };

  // Provide user, login, and logout throughout the component tree
  return (
    <AuthContext.Provider value={{ user, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
