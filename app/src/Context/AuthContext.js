import React, { useState, useContext, useEffect } from "react";
import axios from "../api/axios";
import { GetCommand } from "../api/commande/GetCommand";

export const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider(props) {
  //Login Page State utilies
  const [userNumber, setUserNumber] = useState(String);
  const [userPassword, setUserPassword] = useState(String);
  const [error, setError] = useState(false);

  // const [userPassword, setPwd] = useState(null);
  const [accessToken, setAccessToken] = useState(null);
  const [isLoggedIn, setIsLoggedInz] = useState(null);

  const [select, setSelect] = useState(false);
  const [employe, setEmploye] = useState("");
  //******* */
  const [nbrCommndeTerminé, setNbrCommndeTerminé] = useState(0);
  const [nbrCommndeCours, setNbrCommndeCours] = useState(0);
  const [listCommand, setListeCommand] = useState([]);

  const [idCommandSpc, setIdCommandSpc] = useState({});
  const [commandSpc, setCommandSpc] = useState({});

  const [listeArticService, setListeArticService] = useState([]);

  const [clientName, setClientName] = useState("Null");

  const [userNumberAdd, setUserNumberAdd] = useState(String);

  /******* */

  const [listEmpl, setListEmpl] = useState([]);
  const [nbrDispo, setNbrDispo] = useState(0);

  const REGISTER_URL = "/commande";
  const REGISTER_URL_EMPLOYE = "/employe";

  // useEffect(
  //   () =>
  //     GetCommand({
  //       setListeCommand: setListeCommand,
  //       setNbrCommndeTerminé: setNbrCommndeTerminé,
  //       setNbrCommndeCours: setNbrCommndeCours,
  //       listCommand: listCommand,
  //     }),
  //   []
  // );

  // useEffect(() => {
  //   setNbrCommndeTerminé(0);
  //   setNbrCommndeCours(0);
  //   listCommand.map((index) =>
  //     index.commandeStatut == "En cours d'attribution"
  //       ? setNbrCommndeCours((nbrCommndeCours) => nbrCommndeCours + 1)
  //       : setNbrCommndeTerminé((nbrCommndeTerminé) => nbrCommndeTerminé + 1)
  //   );
  // }, [listCommand]);

  // useEffect(() => {
  //   axios
  //     .get(REGISTER_URL_EMPLOYE, {
  //       headers: {
  //         "Content-Type": "application/json",
  //         Authorization: `Bearer ${sessionStorage.getItem("accessToken")}`,
  //       },
  //       withCredentials: true,
  //     })
  //     .then((res) => setListEmpl(res.data))
  //     .catch((e) => console.log(e));
  // }, []);

  // useEffect(() => {
  //   setNbrDispo(0);
  //   listEmpl.map((index) =>
  //     index.tacheEmployes.length == 0
  //       ? setNbrDispo((nbrDispo) => nbrDispo + 1)
  //       : null
  //   );
  // }, [listEmpl]);

  const value = {
    //Login Page State utilies

    userNumber,
    setUserNumber,
    userPassword,
    setUserPassword,
    error,
    setError,

    /**/
    //Liste commande

    listCommand,
    commandSpc,
    setCommandSpc,

    setIdCommandSpc,
    setListeCommand,
    setNbrCommndeTerminé,
    setNbrCommndeCours,

    listeArticService,
    setListeArticService,

    clientName,
    setClientName,

    userNumberAdd,
    setUserNumberAdd,
    /**/

    isLoggedIn,
    setIsLoggedInz,
    userPassword,
    // setPwd,
    accessToken,
    setAccessToken,
    select,
    setSelect,
    employe,
    setEmploye,
    nbrCommndeTerminé,
    setNbrCommndeTerminé,
    nbrCommndeCours,
    setNbrCommndeCours,
    nbrDispo,
  };

  return (
    <AuthContext.Provider value={value}>{props.children}</AuthContext.Provider>
  );
}
