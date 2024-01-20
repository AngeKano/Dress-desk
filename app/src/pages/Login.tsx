import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AdminLogin } from "../api/AdminLogin";
import { AuthContext } from "../Context/AuthContext";
import { EmployeLogin } from "../api/EmployeLogin";

export const Login = () => {
  const {
    userNumber,
    setUserNumber,
    userPassword,
    setUserPassword,
    error,
    setError,
  } = useContext(AuthContext);

  const [adminBtn, setAdmin] = useState(false);
  const [employeBtn, setEmploye] = useState(true);

  const navigate = useNavigate();

  const _onSubmit = () =>
    adminBtn
      ? AdminLogin({
          userNumber: userNumber,
          userPassword: userPassword,
          navigate: navigate,
          setUserNumber: setUserNumber,
          setUserPassword: setUserPassword,
          setError: setError,
        })
      : EmployeLogin({
          userNumber: userNumber,
          userPassword: userPassword,
          navigate: navigate,
          setUserNumber: setUserNumber,
          setUserPassword: setUserPassword,
          setError: setError,
        });
  return (
    <div className="bg-white overflow-y-hidden ">
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
        <div className="flex flex-col w-[59%] ml-5 max-md:w-full max-md:ml-0  items-center justify-center">
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
            <div className="rounded-full mt-3 flex flex-row gap-x-3 w-fit items-center ">
              <span>Choix de role :</span>
              <button
                onClick={() => (setEmploye(!employeBtn), setAdmin(true))}
                className={
                  adminBtn
                    ? "bg-black py-2 px-4 rounded-full text-white"
                    : "bg-gray-100 py-2 px-4 rounded-full text-black"
                }
              >
                ADMIN
              </button>
              <button
                onClick={() => (setEmploye(true), setAdmin(!adminBtn))}
                className={
                  employeBtn
                    ? "bg-black py-2 px-4 rounded-full text-white"
                    : "bg-gray-100 py-2 px-4 rounded-full text-black"
                }
              >
                EMPLOYE
              </button>
            </div>
            <div className="text-black text-2xl font-medium self-stretch mt-5 max-md:max-w-full max-md:mt-10 font-['Poppins'] ">
              Numéro Téléphone
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
              placeholder="EX: +2251234567890"
              onChange={(e) => (setUserNumber(e.target.value), setError(false))}
              value={userNumber}
            />
            <div className="text-black text-2xl font-medium self-stretch mt-8 max-md:max-w-full font-['Poppins'] ">
              Mot de passse
            </div>
            <div className="text-zinc-600 text-sm font-light self-stretch mt-1 max-md:max-w-full">
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
              onChange={(e) => (
                setUserPassword(e.target.value), setError(false)
              )}
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
  );
};
