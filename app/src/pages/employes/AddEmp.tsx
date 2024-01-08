import  { useState } from "react";
import { Nav } from "../../components/nav/Nav";
import { HeaderNav } from "../../components/nav/HeaderNav";
import { HeaderTxt } from "../../components/nav/HeaderTxt";
import { useNavigate } from "react-router-dom";
import { _onSubmitAddEmp } from "../../components/api/RequestApi";

export const AddEmp = () => {
  let yourDate = new Date();
  let date = yourDate.toISOString().split("T")[0];
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [userNames, setUserNames] = useState("");
  const [employeFonction, setEmployeFonction] = useState("");
  const [employeSalaire, setEmployeSalaire] = useState(Number);
  const [employeDateEmbauche, setEmployeDateEmbauche] = useState(date);
  const [employeStatut, setEmployeStatut] = useState("Libre");


  const navigate = useNavigate();

  const _onSubmit = async () => {
    try {
      const res = await _onSubmitAddEmp({
        // Api Employes
        userEmail: userEmail,
        userPassword: userPassword,
        userNames: userNames,
        employeFonction: employeFonction,
        employeDateEmbauche: employeDateEmbauche,
        employeSalaire: employeSalaire,
        employeStatut: employeStatut,
      });
      navigate("/EmpList");
    } catch (Err) {
      console.log(Err);
    }
  };

  return (
    <div className="bg-slate-300">
      <div className="flex max-md:flex-col max-md:items-stretch max-md:gap-0">
        <Nav Lien="Employés" />
        <div className="flex flex-col items-stretch w-[82%] max-md:w-full max-md:ml-0">
          <div className="bg-white flex grow flex-col w-full pl-12 pr-16 py-10 border-l-stone-300 border-l border-solid items-end max-md:max-w-full max-md:px-5">
            <HeaderNav />
            <HeaderTxt
              title="Ajouter un employé"
              descript="Remplissez les champs pour enregistrer un nouvel employé "
            />
            <div className="self-stretch mt-6 max-md:max-w-full">
              <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                <div className="flex flex-col items-stretch w-[70%] max-md:w-full max-md:ml-0">
                  <div className="max-md:max-w-full max-md:mt-10">
                    <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                      <div className="flex flex-col items-stretch w-[57%] max-md:w-full max-md:ml-0">
                        <div className="flex grow flex-col max-md:mt-2.5">
                          <div className="self-stretch flex items-center justify-start gap-3.5">
                            <span className="text-zinc-600 text-xs font-[275]">
                              Liste des employes
                            </span>

                            <span className="text-zinc-600 text-xs font-[275]">
                              Ajouter une commande
                            </span>
                          </div>
                          <span className="text-black text-lg font-medium self-stretch mt-11 max-md:mt-10">
                            Nom complet
                          </span>
                          <span className="text-zinc-600 text-sm font-light ">
                            Les nom et l’identifiant de l’employe sont unique
                          </span>
                          <input
                            aria-label="Nom"
                            className="bg-gray-100 flex h-11 mt-2 rounded-full w-fit px-3"
                            value={userNames}
                            onChange={(e) => setUserNames(e.target.value)}
                          />
                          <span className="text-black text-lg font-medium self-stretch mt-7">
                            Email
                          </span>
                          <span className="text-zinc-600 text-sm font-light ">
                            Boite mail personnel
                          </span>
                          <input
                            aria-label="Email"
                            className="bg-gray-100 flex h-11 mt-2 rounded-full w-fit px-3"
                            value={userEmail}
                            onChange={(e) => setUserEmail(e.target.value)}
                          />
                          <span className="text-black text-lg font-medium self-stretch mt-7">
                            Poste
                          </span>
                          <span className="text-zinc-600 text-sm font-light ">
                            Rôle principale joué dans l’entreprise
                          </span>
                          <input
                            aria-label="Nom"
                            className="bg-gray-100 flex h-11 mt-2 rounded-full w-fit px-3"
                            value={employeFonction}
                            onChange={(e) => setEmployeFonction(e.target.value)}
                          />

                          <span className="text-black text-lg font-medium self-stretch mt-7">
                            Salaire
                          </span>
                          <span className="text-zinc-600 text-sm font-light ">
                            Salaire de l'employé en mois
                          </span>
                          <input
                            aria-label="Salaire"
                            className="bg-gray-100 flex h-11 mt-2 rounded-full w-fit px-3"
                            value={employeSalaire}
                            onChange={(e) =>
                              setEmployeSalaire(Number(e.target.value))
                            }
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-stretch w-[30%] ml-5 max-md:w-full max-md:ml-0">
                  <div className="flex flex-col justify-center items-center mt-10 max-md:mt-10">
                    <img src="/Users/7.png" width={150} height={150} alt="" />
                    <div className="self-center flex flex-col items-center gap-3 ">
                      <span className="text-black text-3xl font-semibold mt-7">
                        {userNames}
                      </span>
                      <span className="text-black text-lg font-medium ">
                        {userEmail}
                      </span>
                    </div>
                    <span className="text-zinc-600 text-center text-sm font-light self-center ">
                      Générer automatiquement à partir des informations de
                      l’employé
                    </span>
                    <div className="self-stretch flex items-center justify-center gap-5 mt-5 pr-1.5">
                      <div className="flex  flex-col justify-center items-center">
                        <span className="text-black text-sm font-light bg-gray-200 justify-center items-stretch p-3 rounded-full">
                          EDGTSPQDRESS151223000
                        </span>
                      </div>
                      <img src="/icons/Copy.svg" alt="" />
                    </div>
                    <span className="text-black text-lg font-medium self-stretch mt-14 max-md:mt-10">
                      Mot de passe de l’employé
                    </span>
                    <div className="self-stretch flex items-stretch justify-between gap-5 mt-6 pr-1.5">
                      <input
                        aria-label="Mot de passe"
                        value={userPassword}
                        onChange={(e) => setUserPassword(e.target.value)}
                        type="nom"
                        placeholder="Au moins 5 charactère"
                        className="bg-gray-200 flexflex-col justify-center items-center px-3 py-2 rounded-[121px] max-md:pr-5"
                      />
                      <img src="/icons/eye.svg" alt="" />
                    </div>
                    <div className="flex items-center justify-between gap-5 ml-5 mt-40 self-start max-md:ml-2.5 max-md:mt-10">
                      <button className="text-black text-lg font-semibold px-4 py-2">
                        Annuler
                      </button>
                      <button
                        onClick={_onSubmit}
                        className="text-white text-lg font-semibold justify-center items-center bg-black self-center px-4 py-2 rounded-full max-md:pr-5"
                      >
                        Enregistrer
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
