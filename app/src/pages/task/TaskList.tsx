import React from "react";
import { Nav } from "../../components/nav/Nav";
import { HeaderNav } from "../../components/nav/HeaderNav";
import { HeaderTxt } from "../../components/nav/HeaderTxt";
import { Stats } from "../../components/nav/items/Stats";
import { HeaderStat } from "../../components/nav/HeaderStat";
import { TacheEnAttente } from "../../components/items/TacheEnAttente";

export const TaskList = () => {
  return (
    <div className="bg-slate-300">
      <div className=" flex max-md:flex-col max-md:items-stretch max-md:gap-0">
        <Nav Lien="Liste Tache" />
        <div className="flex flex-col items-stretch w-[82%] max-md:w-full max-md:ml-0">
          <div className="bg-white flex grow flex-col w-full pl-10 pr-20 pt-9 border-l-stone-300 border-l border-solid items-end max-md:max-w-full max-md:px-5">
            <HeaderNav />
            <HeaderTxt
              title="Liste des taches"
              descript="Liste total des commandes de la journée"
            />
            <div className="self-stretch flex flex-col mr-6 max-md:max-w-full max-md:mr-2.5">
              <HeaderStat />
              <div className="w-[974px] max-w-full mt-8 self-end">
                <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                  {/* En attente */}
                  <div className="flex flex-col items-stretch w-[51%] max-md:w-full max-md:ml-0">
                    <TacheEnAttente />
                  </div>
                  {/* En cours */}
                  <div className="flex flex-col items-stretch w-[49%] ml-5 max-md:w-full max-md:ml-0">
                    <div className="justify-start items-stretch bg-zinc-50 flex flex-col w-full px-4 py-7 rounded-3xl max-md:max-w-full max-md:mt-10">
                      <div className="flex w-full items-center justify-between max-md:max-w-full max-md:flex-wrap">
                        <div className="flex items-stretch gap-3.5 my-auto">
                          <img src="/icons/time.svg" alt="" />
                          <span className="text-black text-2xl font-bold self-center grow whitespace-nowrap my-auto">
                            En cours
                          </span>
                        </div>
                        <div className=" bg-sky-200 self-stretch flex justify-center items-center w-11 h-11 rounded-full">
                          <span className="text-sky-500 text-2xl font-bold">
                            2
                          </span>
                        </div>
                      </div>
                      <div className="justify-center bg-white mt-7 px-5 py-6 rounded-3xl max-md:max-w-full max-md:pl-5">
                        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                          <div className="flex flex-col items-stretch w-[58%] max-md:w-full max-md:ml-0">
                            <div className="flex grow flex-col items-stretch max-md:mt-10">
                              <span className="text-black text-2xl font-bold">
                                Repassage de vêtement
                              </span>
                              <span className="text-black text-lg whitespace-nowrap mt-10 max-md:mt-10">
                                Nombre de vetement
                              </span>
                              <span className="text-black text-lg mt-10">
                                Montant
                              </span>
                              <div className="flex items-stretch justify-between gap-4 mt-8">
                                <span className="text-zinc-600 text-base my-auto">
                                  Ange Kano
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-col items-stretch w-[42%] ml-5 max-md:w-full max-md:ml-0">
                            <div className="flex grow flex-col items-stretch max-md:mt-10">
                              <div className="flex flex-col items-stretch pl-14 max-md:pl-5">
                                <div className="flex items-center justify-center ">
                                  <img
                                    src="/icons/dotSmall.svg"
                                    width={25}
                                    height={10}
                                    className="self-end"
                                    alt=""
                                  />
                                  <button aria-label="Annuler" className="flex flex-col items-center justify-center bg-red-500 rounded-full w-7 h-7 ">
                                    <img
                                      src="/icons/exit.svg"
                                      width={10}
                                      height={10}
                                      className="self-end"
                                      alt=""
                                    />
                                  </button>
                                </div>

                                <div className="text-black text-xl font-semibold mt-24 self-end max-md:mt-10">
                                  <span className="text-lg">X5</span>
                                </div>
                                <span className="text-zinc-600 text-xl font-semibold whitespace-nowrap mt-9">
                                  500{" "}
                                  <span className="text-sm text-zinc-600">
                                    FCFA
                                  </span>
                                </span>
                              </div>
                              <button className="justify-between bg-black flex gap-2.5 mt-8 px-4 py-2 rounded-full items-center">
                                <img src="/icons/UsersWit.svg" alt="" />
                                <span className="text-white text-lg font-semibold self-stretch grow whitespace-nowrap">
                                  Attribuer
                                </span>
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
          </div>
        </div>
      </div>
    </div>
  );
};
