import React from "react";
import { Nav } from "../../components/nav/Nav";

export const DetailEmp = () => {
  return (
    <div className="bg-slate-300">
      <div className=" flex max-md:flex-col max-md:items-stretch max-md:gap-0">
        <Nav Lien="Employés" />
        <div className="flex flex-col items-stretch w-[82%] max-md:w-full max-md:ml-0">
          <div className="bg-white flex grow flex-col items-stretch w-full pl-14 pr-20 py-11 border-l-stone-300 border-l border-solid max-md:max-w-full max-md:px-5">
            <div className="mr-6 max-md:max-w-full max-md:mr-2.5">
              <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                <div className="flex flex-col items-stretch w-[48%] max-md:w-full max-md:ml-0">
                  <div className="flex grow flex-col items-stretch mt-20 max-md:mt-10">
                    <div className="text-black text-3xl font-semibold">
                      Liste des employés{" "}
                    </div>
                    <div className="text-black text-sm font-light mt-2">
                      Liste total des employés de l’entreprise
                    </div>
                    <div className="flex items-center justify-between gap-2 mt-7">
                      <div className="text-zinc-600 text-xs font-[275]">
                        Liste des employés
                      </div>

                      <div className="text-zinc-600 text-xs font-[275]">
                        Details employé
                      </div>
                    </div>
                    <div className="flex items-stretch justify-between gap-4 mt-12 max-md:mt-10">
                      <div className="self-center flex grow basis-[0%] flex-col items-stretch my-auto">
                        <div className="text-black text-2xl font-semibold">
                          Ange Kano
                        </div>
                        <div className="flex items-stretch justify-between gap-4 mt-3.5">
                          <div className="flex grow basis-[0%] flex-col justify-center items-stretch">
                            <div className="text-black text-sm font-light whitespace-nowrap bg-gray-200 justify-center items-stretch p-4 rounded-[121px]">
                              EDGTSPQDRESS151223000
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-stretch w-[52%] ml-5 max-md:w-full max-md:ml-0">
                  <div className="flex flex-col items-stretch max-md:max-w-full max-md:mt-10">
                    <div className="flex justify-between gap-5 items-start max-md:max-w-full max-md:flex-wrap">
                      <div className="text-neutral-500 text-lg whitespace-nowrap border grow justify-center items-stretch pl-6 pr-16 py-4 rounded-3xl border-solid border-zinc-300 max-md:pl-5 max-md:pr-6">
                        Recherche...
                      </div>

                      <div className="justify-between items-stretch bg-black self-stretch flex gap-2.5 px-9 py-3 rounded-[30px] max-md:px-5">
                        <div className="text-white text-xl font-semibold grow whitespace-nowrap self-start">
                          Assistance
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col mt-14 pl-20 items-end max-md:max-w-full max-md:mt-10 max-md:pl-5">
                      <div className="flex items-center justify-between gap-5">
                        <div className="text-zinc-500 text-lg font-medium my-auto">
                          Lundi 16 mars 2023{" "}
                        </div>
                      </div>
                      <div className="self-stretch flex items-stretch justify-between gap-5 mt-36 max-md:mt-10">
                        <div className="justify-between items-stretch flex gap-2.5 px-7 py-3 rounded-3xl max-md:px-5">
                          <div className="text-black text-xl font-semibold grow whitespace-nowrap self-start">
                            Modifier
                          </div>
                        </div>
                        <div className="justify-between items-center bg-red-600 flex gap-2.5 px-7 py-3 rounded-[30px] max-md:px-5">
                          <div className="text-white text-xl font-semibold self-stretch grow whitespace-nowrap">
                            Supprimer
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mr-6 mt-12 mb-12 max-md:max-w-full max-md:mr-2.5 max-md:my-10">
              <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                <div className="flex flex-col items-stretch w-[68%] max-md:w-full max-md:ml-0">
                  <div className="flex grow flex-col max-md:max-w-full max-md:mt-10">
                    <div className="self-stretch max-md:max-w-full">
                      <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                        <div className="flex flex-col items-stretch w-[46%] max-md:w-full max-md:ml-0">
                          <div className="flex grow flex-col items-stretch max-md:mt-8">
                            <div className="text-black text-xl font-semibold">
                              Poste{" "}
                            </div>
                            <div className="text-black text-xl font-semibold mt-10">
                              Numéro de telephone
                            </div>
                            <div className="text-black text-xl font-semibold mt-8">
                              Lieu de résidence
                            </div>
                            <div className="text-black text-xl font-semibold mt-10">
                              Date de naissance
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-col items-stretch w-[54%] ml-5 max-md:w-full max-md:ml-0">
                          <div className="flex grow flex-col items-stretch max-md:mt-9">
                            <div className="text-black text-lg">Repasseur</div>
                            <div className="text-black text-lg whitespace-nowrap mt-8">
                              (+225)0151831681 / 78759944
                            </div>
                            <div className="text-black text-lg mt-9">
                              Abidjan, Yopougon
                            </div>
                            <div className="text-black text-lg mt-9">
                              26 Juin 2002
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch flex items-stretch justify-between gap-5 mt-10 max-md:max-w-full max-md:flex-wrap">
                      <div className="flex grow basis-[0%] flex-col items-stretch">
                        <div className="text-black text-xl font-semibold">
                          Date de recrutement
                        </div>
                        <div className="text-black text-xl font-semibold mt-10">
                          Mot de passe{" "}
                        </div>
                      </div>
                      <div className="flex grow basis-[0%] flex-col items-stretch self-start">
                        <div className="text-black text-lg">
                          10 Decmbre 2023
                        </div>
                        <div className="text-black text-lg mt-10 max-md:mt-10">
                          Ang*****************
                        </div>
                      </div>
                    </div>
                    <div className="text-black text-sm font-light self-stretch mt-8 max-md:max-w-full">
                      <span className="">NB</span>
                    </div>
                    <div className="flex w-[463px] max-w-full items-stretch justify-between gap-5 mt-16 self-end max-md:flex-wrap max-md:mt-10">
                      <div className="justify-between flex gap-2.5 pl-7 pr-1 py-3.5 rounded-3xl items-start max-md:pl-5">
                        <div className="text-black text-xl font-semibold grow whitespace-nowrap">
                          Voir le MDP
                        </div>
                      </div>
                      <div className="justify-between items-stretch bg-black flex gap-2.5 px-5 py-3 rounded-[30px] max-md:px-5">
                        <div className="text-white text-xl font-semibold grow whitespace-nowrap self-start">
                          Modifier le MDP
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-stretch w-[32%] ml-5 max-md:w-full max-md:ml-0">
                  <div className="flex flex-col max-md:mt-10">
                    <div className="text-black text-center text-xl self-stretch">
                      Nombre de tache achever à la date d’aujourd'hui{" "}
                    </div>{" "}
                    <div className="text-black text-6xl font-semibold self-center whitespace-nowrap mt-6 max-md:text-4xl">
                      3
                    </div>{" "}
                    <div className="text-black text-center text-xl self-center max-w-[292px] mt-12 max-md:mt-10">
                      Nombre total de tache depuis son embauche
                    </div>{" "}
                    <div className="text-black text-8xl font-semibold self-center whitespace-nowrap mt-10 max-md:text-4xl">
                      15
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
