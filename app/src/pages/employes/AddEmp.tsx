import React from "react";
import { Nav } from "../../components/nav/Nav";
import { HeaderNav } from "../../components/nav/HeaderNav";
import { HeaderTxt } from "../../components/nav/HeaderTxt";

export const AddEmp = () => {
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
                            Nom complet{" "}
                          </span>
                          <span className="text-zinc-600 text-sm font-light ">
                            Les nom et l’identifiant de l’employe sont unique
                          </span>
                          <input
                            aria-label="Nom"
                            className="bg-gray-100 flex h-11 mt-2 rounded-full w-fit px-3"
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
                          />
                          <span className="text-black text-lg font-medium self-stretch mt-6">
                            Numéro de téléphone
                          </span>
                          <span className="text-zinc-600 text-sm font-light ">
                            Entrer uniquement le numéro principale
                          </span>
                          <div className="flex items-center gap-3.5 ml-3 mt-3.5 pr-2 self-start max-md:ml-2.5">
                            <span className="text-black text-lg underline grow whitespace-nowrap my-auto">
                              + 225
                            </span>
                            <input
                              aria-label="Nom"
                              className="bg-gray-100 flex h-11 mt-2 rounded-full w-fit px-3"
                            />
                          </div>
                          <span className="text-black text-lg font-medium self-stretch mt-7">
                            Lieu d’habitation
                          </span>
                          <span className="text-zinc-600 text-sm font-light ">
                            Zone actuelle de résidence
                          </span>
                          <input
                            aria-label="Nom"
                            className="bg-gray-100 flex h-11 mt-2 rounded-full w-fit px-3"
                          />
                          <span className="text-black text-lg font-medium self-stretch mt-6">
                            Numéro de CNI
                          </span>
                          <span className="text-zinc-600 text-sm font-light ">
                            A enregistrer sous réserve de la pièce physique
                          </span>
                          <input
                            aria-label="Nom"
                            className="bg-gray-100 flex h-11 mt-2 rounded-full w-fit px-3 "
                          />
                        </div>
                      </div>
                      <div className="flex flex-col items-stretch  max-md:w-full max-md:ml-0">
                        <div className="flex grow flex-col items-stretch mt-96 max-md:mt-10">
                          <span className="text-black text-lg font-medium whitespace-nowrap">
                            Date de naissance
                          </span>
                          <span className="text-zinc-600 text-sm font-light">
                            Format XX/XX/XXXX
                          </span>
                          <input
                            aria-label="Nom"
                            type="date"
                            className="bg-gray-100 flex h-11 mt-2 rounded-full w-fit px-3 "
                          />
                          <span className="text-black text-lg font-medium mt-6">
                            Autres document
                          </span>
                          <span className="text-zinc-600 text-sm font-light">
                            Passeport, récépissé ou autres...
                          </span>
                          <input
                            aria-label="Nom"
                            className="bg-gray-100 flex h-11 mt-2 rounded-full w-fit px-3 "
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
                        Ange Kano
                      </span>
                      <span className="text-black text-lg font-medium ">
                        Identifiant de l’employé
                      </span>
                    </div>
                    <div className="text-zinc-600 text-center text-sm font-light self-center ">
                      Générer automatiquement à partir des informations de
                      l’employé
                    </div>
                    <div className="self-stretch flex items-center justify-center gap-5 mt-5 pr-1.5">
                      <div className="flex  flex-col justify-center items-center">
                        <span className="text-black text-sm font-light bg-gray-200 justify-center items-stretch p-3 rounded-full">
                          EDGTSPQDRESS151223000
                        </span>
                      </div>
                      <img src="/icons/Copy.svg" alt="" />
                    </div>
                    <div className="text-black text-lg font-medium self-stretch mt-14 max-md:mt-10">
                      Mot de passe de l’employé
                    </div>
                    <div className="self-stretch flex items-stretch justify-between gap-5 mt-6 pr-1.5">
                      <input
                        aria-label="Mot de passe"
                        value={"Ange Kano"}
                        type="password"
                        className="bg-gray-200 flexflex-col justify-center items-center px-3 py-2 rounded-[121px] max-md:pr-5"
                      />
                      <img src="/icons/eye.svg" alt="" />
                    </div>
                    <div className="flex items-center justify-between gap-5 ml-5 mt-40 self-start max-md:ml-2.5 max-md:mt-10">
                      <button className="text-black text-lg font-semibold px-4 py-2">
                        Annuler
                      </button>
                      <button className="text-white text-lg font-semibold justify-center items-center bg-black self-center px-4 py-2 rounded-full max-md:pr-5">
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
