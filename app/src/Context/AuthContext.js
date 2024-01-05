import React, { useState, useContext, useEffect } from "react";

export const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider(props) {
  const [userEmail, setAuthUser] = useState(null);
  const [userPassword, setPwd] = useState(null);
  const [accessToken, setAccessToken] = useState(null);
  const [isLoggedIn, setIsLoggedInz] = useState(null);

  const [select, setSelect] = useState(false);
  const [employe, setEmploye] = useState("");

  const value = {
    userEmail,
    setAuthUser,
    isLoggedIn,
    setIsLoggedInz,
    userPassword,
    setPwd,
    accessToken,
    setAccessToken,
    select,
    setSelect,
    employe,
    setEmploye,
  };

  return (
    <AuthContext.Provider value={value}>{props.children}</AuthContext.Provider>
  );
}
