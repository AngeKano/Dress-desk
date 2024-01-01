import React, { useContext, useState } from "react";
import axios from "../api/axios";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";

export const Login: React.FC = () => {
  const electron = (window as any).electron;

  const { userEmail, setAuthUser, userPassword, setPwd, setAccessToken, } =
    useContext(AuthContext);
  const REGISTER_URL = "/auth/login";
  const [error, setError] = useState(false);

  const navigate = useNavigate();

  const _onSubmit = async () => {
    try {
      const res = await axios.post(
        REGISTER_URL,
        JSON.stringify({ userEmail, userPassword }),
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );
      setAccessToken(res.data.token);
      navigate("/Dashboard");
    } catch (err) {
      setAuthUser(null);
      setPwd(null);
      setAccessToken(null);
      setError(true);
      console.log("Impossible de se connecter 🔴");
    }
  };

  return (
    <div className="bg-white overflow-y-hidden">
      <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
        <div className="flex flex-col items-stretch w-[41%] max-md:w-full max-md:ml-0">
          <div className="flex-col overflow-hidden bg-[url(https://cdn.builder.io/api/v1/image/assets/TEMP/541aa97b6a769c01052dd7225d786c538174c8ff21391cd4353e342ea902c360?apiKey=43028ea351e04a60a58ebccc886c8606&width=600)] relative flex grow justify-center items-center">
            <div className="relative justify-center items-stretch flex gap-3 mt-96 mb-80 px-0.5 max-md:my-10">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/08c649d63072ec6b50832a7f27cd554c3c785c105d50fc35496e26bb8da7ac26?apiKey=43028ea351e04a60a58ebccc886c8606&"
                className="aspect-[1.06] object-contain object-center w-[52px] overflow-hidden shrink-0 max-w-full"
                alt=""
              />
              <span className="text-black text-4xl self-center grow whitespace-nowrap my-auto font-['Monument']">
                DRESS
              </span>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-stretch w-[59%] ml-5 max-md:w-full max-md:ml-0">
          <div className="flex flex-col my-auto px-5 max-md:max-w-full max-md:mt-10">
            <span className="text-black text-3xl font-extrabold self-stretch max-md:max-w-full font-['Monument']">
              Connexion a votre espace
            </span>
            <div className="text-zinc-600 text-base font-light self-stretch mt-4 max-md:max-w-full">
              <span className="font-['Poppins']">
                Entrez vos identifiants et mot de passe de l’entreprise pour
                accéder à votre espace de travail. Veillez à ceux que vos
                informations ne soit pas partagé
              </span>
            </div>
            <div className="text-black text-2xl font-medium self-stretch mt-8 max-md:max-w-full max-md:mt-10 font-['Poppins'] ">
              Identifiant
            </div>
            <div className="text-zinc-600 text-sm font-light self-stretch mt-1 max-md:max-w-full">
              votre identifiant est unique
            </div>
            <input
              type="text"
              id="username"
              aria-label="Identifiant"
              role="textbox"
              className={
                (error == true
                  ? "border-red-500 border-2 border-solid"
                  : "border-2 border-solid") +
                " self-stretch justify-center mt-3 px-7 py-3 rounded-[100px] items-start max-md:max-w-full max-md:px-5"
              }
              placeholder="EX: KANG@2023147"
              onChange={(e) => setAuthUser(e.target.value)}
              value={userEmail}
            />

            <div className="text-black text-2xl font-medium self-stretch mt-10 max-md:max-w-full font-['Poppins'] ">
              Mot de passse
            </div>
            <div className="text-zinc-600 text-sm font-light self-stretch mt-2 max-md:max-w-full">
              Gardez le bien en tete celui ci
            </div>
            <input
              type="password"
              id="password"
              aria-label="Mot de passe"
              role="textbox"
              className={
                (error == true
                  ? "border-red-500 border-2 border-solid"
                  : "border-2 border-solid") +
                "self-stretch justify-center mt-3 px-7 py-3 rounded-[100px] items-start max-md:max-w-full max-md:px-5"
              }
              placeholder="Au moins 8 caractères aplha-numerique"
              onChange={(e) => setPwd(e.target.value)}
              value={userPassword}
            />

            <button
              type="button"
              onClick={() => {
                _onSubmit();
              }}
              className="text-white text-2xl font-semibold bg-black self-stretch justify-center items-center mt-7 py-3 rounded-[100px] max-md:max-w-full max-md:mt-10 max-md:px-5"
            >
              Employés
            </button>
            <div className="text-black text-center text-lg font-light underline self-center max-w-[401px] mt-7 max-md:max-w-full">
              Vous avez oubliez vos informations de connexion,{" "}
              <a
                href="#"
                className="font-semibold underline"
                aria-label="le signaler à la direction"
                role="link"
              >
                le signaler à la direction
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

    // <div className="bg-red-600">
    //   Page de work <br />
    //   th homdir @ {electron.homeDir()} <br />
    //   The Os is arch {electron.arch()} <br />
    //   The Os is arch {electron.osVersion()} <br />
    // </div>
  );
};
