import React from "react";
import { Nav } from "../../components/nav/Nav";
import { HeaderNav } from "../../components/nav/HeaderNav";
import { HeaderTxt } from "../../components/nav/HeaderTxt";

export const DetailEmp = () => {
  return (
    <div className="bg-slate-300">
      <div className=" flex max-md:flex-col max-md:items-stretch max-md:gap-0">
        <Nav Lien="Employés" />
        <div className="flex flex-col items-stretch w-[82%] max-md:w-full max-md:ml-0">
          <div className="bg-white flex grow flex-col items-stretch w-full pl-14 pr-20 py-11 border-l-stone-300 border-l border-solid max-md:max-w-full max-md:px-5">
            <HeaderNav />
            <HeaderTxt
              title="Liste des employés"
              descript="Liste des employés "
            />
            <div className="mr-6 max-md:max-w-full max-md:mr-2.5">
              <div className="gap-5 flex items-center justify-center max-md:flex-col max-md:items-stretch max-md:gap-0">
                <div className="flex flex-col items-stretch w-[48%] max-md:w-full max-md:ml-0">
                  <div className="flex grow flex-col items-stretch mt-7 max-md:mt-7">
                    <div className="flex items-center  gap-5 ">
                      <span className="text-zinc-600 text-xs font-[275]">
                        Liste des employés
                      </span>
                      <span className="text-zinc-600 text-xs font-[275]">
                        Details employé
                      </span>
                    </div>
                    <div className="flex items-stretch justify-between gap-4 mt-7 max-md:mt-5">
                      <img src="/Users/8.png" alt="" />
                      <div className="self-center flex grow basis-[0%] flex-col items-stretch my-auto">
                        <span className="text-black text-2xl font-semibold">
                          Ange Kano
                        </span>
                        <div className="flex self-start items-center justify-center gap-5 mt-3.5">
                          <div className="flex grow flex-col justify-center items-center">
                            <span className="text-black text-sm font-light bg-gray-200 justify-center items-center p-3 rounded-full">
                              EDGTSPQDRESS151223000
                            </span>
                          </div>
                          <img src="/icons/Edit.svg" alt="" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-stretch w-[52%] ml-5 max-md:w-full max-md:ml-0">
                  <div className="flex flex-col items-stretch max-md:max-w-full max-md:mt-10">
                    <div className="flex flex-col mt-14 pl-20 items-center justify-center max-md:max-w-full max-md:mt-10 max-md:pl-5">
                      <div className="self-center flex items-center justify-center gap-5 max-md:mt-10">
                        <a
                          href="/AddEmp"
                          className="justify-between items-stretch flex gap-2.5 px-7 py-3 rounded-3xl max-md:px-5"
                        >
                          <img src="/icons/Edit.svg" alt="" />
                          <span className="text-black text-xl font-semibold grow whitespace-nowrap self-start">
                            Modifier
                          </span>
                        </a>
                        <button className="justify-between items-center bg-red-600 flex gap-2.5 px-5 py-2 rounded-[30px] max-md:px-5">
                          <img src="icons/exit.svg" alt="" />
                          <span className="text-white text-xl font-semibold self-stretch grow whitespace-nowrap">
                            Supprimer
                          </span>
                        </button>
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
                            <span className="text-black text-xl font-semibold">
                              Poste
                            </span>
                            <span className="text-black text-xl font-semibold mt-10">
                              Numéro de telephone
                            </span>
                            <span className="text-black text-xl font-semibold mt-8">
                              Lieu de résidence
                            </span>
                            <span className="text-black text-xl font-semibold mt-10">
                              Date de naissance
                            </span>
                          </div>
                        </div>
                        <div className="flex flex-col items-stretch w-[54%] ml-5 max-md:w-full max-md:ml-0">
                          <div className="flex grow flex-col items-stretch max-md:mt-9">
                            <span className="text-black text-lg">
                              Repasseur
                            </span>
                            <span className="text-black text-lg whitespace-nowrap mt-8">
                              (+225)0151831681 / 78759944
                            </span>
                            <span className="text-black text-lg mt-9">
                              Abidjan, Yopougon
                            </span>
                            <span className="text-black text-lg mt-9">
                              26 Juin 2002
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch flex items-stretch justify-between gap-5 mt-10 max-md:max-w-full max-md:flex-wrap">
                      <div className="flex grow basis-[0%] flex-col items-stretch">
                        <span className="text-black text-xl font-semibold">
                          Date de recrutement
                        </span>
                        <span className="text-black text-xl font-semibold mt-10">
                          Mot de passe{" "}
                        </span>
                      </div>
                      <div className="flex grow basis-[0%] flex-col items-stretch self-start">
                        <span className="text-black text-lg">
                          10 Decmbre 2023
                        </span>
                        <span className="text-black text-lg mt-10 max-md:mt-10">
                          Ang*****************
                        </span>
                      </div>
                    </div>
                    <div className="text-black text-sm font-light self-stretch mt-8 max-md:max-w-full">
                      <span className="">
                        NB: Mot de passe est modifiable que par l’admin ou autre
                        personne en charge de gérer les effectifs de
                        l’entreprise sous autorisation de l’admin{" "}
                      </span>
                    </div>
                    <div className="flex w-[463px] max-w-full items-stretch justify-between gap-5 mt-16 self-end max-md:flex-wrap max-md:mt-10">
                      <button className="justify-between items-center flex px-5 py-2 rounded-full ">
                        <span className="text-black text-xl font-semibold">
                          Voir le MDP
                        </span>
                      </button>
                      <button className="justify-center items-center bg-black flex px-5 py-2 rounded-full max-md:px-5">
                        <span className="text-white text-xl font-semibold self-center">
                          Modifier le MDP
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-stretch w-[32%] ml-5 max-md:w-full max-md:ml-0">
                  <div className="flex flex-col max-md:mt-10">
                    <span className="text-black text-center text-xl self-stretch">
                      Nombre de tache achever à la date d’aujourd'hui
                    </span>
                    <span className="text-black text-6xl font-semibold self-center whitespace-nowrap mt-6 max-md:text-4xl">
                      3
                    </span>
                    <span className="text-black text-center text-xl self-center max-w-[292px] mt-12 max-md:mt-10">
                      Nombre total de tache depuis son embauche
                    </span>
                    <span className="text-black text-8xl font-semibold self-center whitespace-nowrap mt-10 max-md:text-4xl">
                      15
                    </span>
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
