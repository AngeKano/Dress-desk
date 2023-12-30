import React from "react";

export const TaskList = () => {
  return (
    <div className="bg-slate-300">
      <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
        <div className="flex flex-col items-stretch w-[18%] max-md:w-full max-md:ml-0">
          <div className="bg-white flex w-full grow flex-col mx-auto pl-4 pr-3 py-11">
            <div className="self-center flex items-stretch gap-1.5">
              <div className="text-black text-2xl self-center grow whitespace-nowrap my-auto">
                DRESS
              </div>
            </div>
            <div className="bg-stone-300 self-stretch shrink-0 h-px mt-12 max-md:mt-10" />
            <div className="justify-between items-stretch self-stretch flex gap-2.5 mt-10 px-8 py-3 rounded-3xl max-md:mt-10 max-md:px-5">
              <div className="text-black text-xl font-semibold self-center grow whitespace-nowrap my-auto">
                Dashboard
              </div>
            </div>
            <div className="justify-between items-stretch bg-black self-stretch flex gap-3.5 mt-6 px-8 py-3 rounded-[30px] max-md:px-5">
              <div className="text-white text-right text-xl font-semibold self-center grow whitespace-nowrap my-auto">
                Liste Tache
              </div>
            </div>
            <div className="justify-center self-center flex gap-2.5 mt-6 pl-7 pr-4 py-3 rounded-3xl items-start max-md:pl-5">
              <div className="text-black text-xl font-semibold self-stretch grow whitespace-nowrap">
                Employés
              </div>
            </div>
            <div className="justify-between items-stretch self-stretch flex gap-2.5 mt-6 px-10 py-3 rounded-3xl max-md:px-5">
              <div className="text-black text-xl font-semibold">Services</div>
            </div>
            <div className="justify-between items-stretch self-stretch flex gap-2.5 mt-6 px-8 py-3 rounded-3xl max-md:px-5">
              <div className="text-black text-xl font-semibold self-center grow whitespace-nowrap my-auto">
                Notifications
              </div>
            </div>

            <div className="text-black text-2xl font-light self-center whitespace-nowrap mt-2">
              Mlle Elodie
            </div>
            <div className="text-black text-2xl font-semibold self-center whitespace-nowrap mt-4">
              Réceptionniste
            </div>
            <div className="justify-between items-stretch self-stretch flex gap-2.5 mt-44 px-8 py-2.5 rounded-3xl max-md:mt-10 max-md:px-5">
              <div className="text-black text-xl font-semibold self-center grow whitespace-nowrap my-auto">
                Paramètre
              </div>
            </div>
            <div className="justify-between items-stretch self-stretch flex gap-2.5 mt-8 px-8 py-3 rounded-3xl max-md:px-5">
              <div className="text-black text-xl font-semibold grow whitespace-nowrap self-start">
                Deconnexion
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-stretch w-[82%] ml-5 max-md:w-full max-md:ml-0">
          <div className="bg-white flex grow flex-col w-full pl-10 pr-20 pt-9 border-l-stone-300 border-l border-solid items-end max-md:max-w-full max-md:px-5">
            <div className="flex justify-between gap-5 mr-6 items-start max-md:max-w-full max-md:flex-wrap max-md:mr-2.5">
              <div className="text-neutral-500 text-lg whitespace-nowrap border grow justify-center items-stretch pl-6 pr-16 py-4 rounded-3xl border-solid border-zinc-300 max-md:pl-5 max-md:pr-6">
                Recherche...
              </div>

              <div className="justify-between items-stretch bg-black self-stretch flex gap-2.5 px-8 py-3 rounded-[30px] max-md:px-5">
                <div className="text-white text-xl font-semibold grow whitespace-nowrap self-start">
                  Assistance
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-col mr-6 mt-10 max-md:max-w-full max-md:mr-2.5">
              <div className="self-stretch flex w-full justify-between gap-5 pr-3 items-start max-md:max-w-full max-md:flex-wrap">
                <div className="flex flex-col items-stretch">
                  <div className="text-black text-3xl font-semibold">
                    Liste des taches
                  </div>
                  <div className="text-black text-sm font-light whitespace-nowrap mt-4">
                    Liste total des commandes de la journée{" "}
                  </div>
                </div>
                <div className="flex items-center justify-between gap-5 mt-3">
                  <div className="text-zinc-500 text-lg font-medium my-auto">
                    Lundi 16 mars 2023{" "}
                  </div>
                </div>
              </div>
              <div className="bg-stone-300 self-stretch shrink-0 h-px mt-7 max-md:max-w-full" />
              <div className="self-center flex w-[859px] max-w-full items-stretch justify-between gap-5 mt-9 max-md:flex-wrap">
                <div className="justify-between items-stretch flex gap-3">
                  <div className="self-center flex grow basis-[0%] flex-col items-stretch my-auto">
                    <div className="text-black text-xl font-medium whitespace-nowrap">
                      Terminer
                    </div>
                    <div className="flex items-stretch justify-between gap-px mt-4">
                      <div className="text-green-500 text-2xl font-semibold grow whitespace-nowrap">
                        18
                      </div>

                      <div className="text-stone-300 text-xs self-center grow whitespace-nowrap my-auto">
                        +2 taches
                      </div>
                    </div>
                  </div>
                </div>
                <div className="justify-between items-stretch flex gap-3">
                  <div className="self-center flex grow basis-[0%] flex-col items-stretch my-auto">
                    <div className="text-black text-xl font-medium whitespace-nowrap">
                      En cours
                    </div>
                    <div className="flex items-stretch justify-between gap-px mt-4">
                      <div className="text-sky-500 text-2xl font-semibold grow whitespace-nowrap">
                        10
                      </div>

                      <div className="text-stone-300 text-xs self-center grow whitespace-nowrap my-auto">
                        +1 taches
                      </div>
                    </div>
                  </div>
                </div>
                <div className="justify-between items-stretch flex gap-3">
                  <div className="self-center flex grow basis-[0%] flex-col items-stretch my-auto">
                    <div className="text-black text-xl font-medium whitespace-nowrap">
                      Disponible
                    </div>
                    <div className="text-purple-500 text-2xl font-semibold mt-2.5">
                      3
                    </div>
                  </div>
                </div>
                <div className="items-stretch flex justify-between gap-3">
                  <div className="self-center flex grow basis-[0%] flex-col items-stretch my-auto">
                    <div className="text-black text-xl font-medium whitespace-nowrap">
                      Livraison
                    </div>
                    <div className="text-zinc-600 text-2xl font-semibold mt-4">
                      11
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-stone-300 self-stretch shrink-0 h-px mt-9 max-md:max-w-full" />
              <div className="w-[974px] max-w-full mt-8 self-end">
                <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                  <div className="flex flex-col items-stretch w-[51%] max-md:w-full max-md:ml-0">
                    <div className="justify-center items-stretch bg-zinc-50 flex grow flex-col w-full pt-9 px-4 rounded-3xl max-md:max-w-full max-md:mt-10">
                      <div className="flex w-full items-center justify-between gap-5 max-md:max-w-full max-md:flex-wrap">
                        <div className="flex items-stretch gap-3.5 my-auto">
                          <div className="text-black text-2xl font-bold self-center grow whitespace-nowrap my-auto">
                            En attente
                          </div>
                        </div>
                        <div className="text-white text-2xl font-bold whitespace-nowrap self-stretch aspect-square justify-center items-stretch px-5 py-4 rounded-[50%]">
                          3
                        </div>
                      </div>
                      <div className="justify-center bg-white mt-9 px-5 py-6 rounded-3xl max-md:max-w-full max-md:pl-5">
                        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                          <div className="flex flex-col items-stretch w-[58%] max-md:w-full max-md:ml-0">
                            <div className="flex grow flex-col items-stretch max-md:mt-10">
                              <div className="text-black text-2xl font-bold">
                                Repassage de vêtement{" "}
                              </div>
                              <div className="text-black text-lg whitespace-nowrap mt-10 max-md:mt-10">
                                Nombre de vetement
                              </div>
                              <div className="text-black text-lg mt-10">
                                Montant
                              </div>
                              <div className="flex items-stretch justify-between gap-4 mt-8">
                                <div className="text-zinc-600 text-base my-auto">
                                  Ange Kano
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-col items-stretch w-[42%] ml-5 max-md:w-full max-md:ml-0">
                            <div className="flex grow flex-col items-stretch mt-2 max-md:mt-10">
                              <div className="flex flex-col items-stretch pl-14 max-md:pl-5">
                                <div className="text-black text-xl font-semibold whitespace-nowrap mt-20 self-end max-md:mt-10">
                                  <span className="text-lg">X</span>
                                </div>
                                <div className="text-zinc-600 text-xl font-semibold whitespace-nowrap mt-9">
                                  500{" "}
                                  <span className="text-sm text-zinc-600">
                                    FCFA
                                  </span>
                                </div>
                              </div>
                              <div className="justify-between bg-black flex gap-2.5 mt-8 px-5 py-3.5 rounded-[30px] items-start">
                                <div className="text-white text-lg font-semibold self-stretch grow whitespace-nowrap">
                                  Attribuer
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="justify-center bg-white mt-9 px-5 py-8 rounded-3xl max-md:max-w-full max-md:px-5">
                        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                          <div className="flex flex-col items-stretch w-9/12 max-md:w-full max-md:ml-0">
                            <div className="flex grow flex-col items-stretch max-md:mt-10">
                              <div className="text-black text-2xl font-bold">
                                Repassage de vêtement{" "}
                              </div>
                              <div className="text-black text-lg whitespace-nowrap mt-10 max-md:mt-10">
                                Nombre de vetement
                              </div>
                              <div className="text-black text-lg mt-10">
                                Montant
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-col items-stretch w-3/12 ml-5 max-md:w-full max-md:ml-0">
                            <div className="flex grow flex-col items-stretch mt-2 max-md:mt-10">
                              <div className="flex flex-col items-center pl-16 max-md:pl-5">
                                <div className="text-black text-lg font-semibold self-stretch whitespace-nowrap mt-20 max-md:mt-10">
                                  X3
                                </div>
                              </div>
                              <div className="text-zinc-600 text-xl font-semibold whitespace-nowrap mt-10">
                                300{" "}
                                <span className="text-sm text-zinc-600">
                                  FCFA
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-stretch w-[49%] ml-5 max-md:w-full max-md:ml-0">
                    <div className="items-stretch bg-zinc-50 flex grow flex-col w-full pt-9 px-4 rounded-3xl max-md:max-w-full max-md:mt-10">
                      <div className="flex w-full items-center justify-between gap-5">
                        <div className="flex items-stretch gap-3.5 my-auto">
                          <div className="text-black text-2xl font-bold self-center grow whitespace-nowrap my-auto">
                            En cours
                          </div>
                        </div>
                        <div className="text-sky-700 text-2xl font-bold whitespace-nowrap self-stretch aspect-square justify-center items-stretch px-5 py-4 rounded-[50%]">
                          2
                        </div>
                      </div>
                      <div className="justify-center items-stretch bg-white flex w-full flex-col mt-9 px-2.5 py-6 rounded-3xl">
                        <div className="flex w-full justify-between gap-5 px-px items-start">
                          <div className="text-black text-2xl font-bold w-[266px] mt-1.5">
                            Repassage de vêtement{" "}
                          </div>
                          <div className="flex items-center gap-4"></div>
                        </div>
                        <div className="flex justify-between gap-5 mt-10 items-start">
                          <div className="flex grow basis-[0%] flex-col items-stretch">
                            <div className="text-black text-lg whitespace-nowrap">
                              Nombre de vetement
                            </div>
                            <div className="text-black text-lg mt-10">
                              Montant
                            </div>
                            <div className="flex items-stretch justify-between gap-4 mt-8">
                              <div className="text-zinc-600 text-base my-auto">
                                Ange Kano
                              </div>
                            </div>
                          </div>
                          <div className="self-stretch flex grow basis-[0%] flex-col items-stretch">
                            <div className="flex flex-col pl-20 items-end max-md:pl-5">
                              <div className="text-black text-xl font-semibold whitespace-nowrap">
                                <span className="text-lg">X</span>
                              </div>
                              <div className="text-zinc-600 text-xl font-semibold self-stretch whitespace-nowrap mt-10">
                                500{" "}
                                <span className="text-sm text-zinc-600">
                                  FCFA
                                </span>
                              </div>
                            </div>
                            <div className="flex items-stretch justify-between gap-5 mt-8">
                              <div className="self-center flex grow basis-[0%] flex-col justify-center items-stretch my-auto">
                                <div className="bg-sky-500 bg-opacity-20 flex items-stretch justify-between gap-2 px-2 py-1.5 rounded-[100px]">
                                  <div className="text-sky-700 text-sm font-semibold self-center grow whitespace-nowrap my-auto">
                                    En cours
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="justify-center bg-white mt-9 px-3 py-6 rounded-3xl">
                        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                          <div className="flex flex-col items-stretch w-[76%] max-md:w-full max-md:ml-0">
                            <div className="flex grow flex-col items-stretch mt-1.5 max-md:mt-10">
                              <div className="text-black text-2xl font-bold">
                                Repassage de vêtement{" "}
                              </div>
                              <div className="text-black text-lg whitespace-nowrap mt-11 max-md:mt-10">
                                Nombre de vetement
                              </div>
                              <div className="text-black text-lg mt-10">
                                Montant
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-col items-stretch w-[24%] ml-5 max-md:w-full max-md:ml-0">
                            <div className="flex grow flex-col items-end max-md:mt-10">
                              <div className="self-stretch flex items-center justify-between gap-4 pr-6 max-md:pr-5"></div>
                              <div className="text-black text-xl font-semibold whitespace-nowrap mt-20 max-md:mt-10">
                                <span className="text-lg">X</span>
                              </div>
                              <div className="text-zinc-600 text-xl font-semibold self-stretch whitespace-nowrap mt-10">
                                500{" "}
                                <span className="text-sm text-zinc-600">
                                  FCFA
                                </span>
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
    </div>
  );
};
