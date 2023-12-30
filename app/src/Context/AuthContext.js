import React, { useState, useContext, useEffect } from "react";

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider(props) {
  const [userEmail, setAuthUser] = useState(null);
  const [userPassword, setPwd] = useState(null);
  const [accessToken, setAccessToken] = useState(null);
  const [isLoggedIn, setIsLoggedInz] = useState(null);

  const value = {
    userEmail,
    setAuthUser,
    isLoggedIn,
    setIsLoggedInz,
    userPassword,
    setPwd,
    accessToken,
    setAccessToken,
  };

  return (
    <AuthContext.Provider value={value}>{props.children}</AuthContext.Provider>
  );
}
