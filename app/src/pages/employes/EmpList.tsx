import React from "react";

export const EmpList = () => {
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
            <div className="justify-between items-stretch self-stretch flex gap-3.5 mt-6 px-8 py-3 rounded-3xl max-md:px-5">
              <div className="text-black text-right text-xl font-semibold self-center grow whitespace-nowrap my-auto">
                Liste Tache
              </div>
            </div>
            <div className="justify-between bg-black self-stretch flex gap-5 mt-6 px-8 py-3 rounded-[30px] items-start max-md:px-5">
              <div className="text-white text-right text-xl font-semibold">
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
          <div className="bg-white flex grow flex-col w-full pt-9 pb-6 border-l-stone-300 border-l border-solid items-end max-md:max-w-full">
            <div className="flex justify-between gap-5 mr-28 items-start max-md:max-w-full max-md:flex-wrap max-md:mr-2.5">
              <div className="text-neutral-500 text-lg whitespace-nowrap border grow justify-center items-stretch pl-6 pr-16 py-4 rounded-3xl border-solid border-zinc-300 max-md:pl-5 max-md:pr-6">
                Recherche...
              </div>

              <div className="justify-between items-stretch bg-black self-stretch flex gap-2.5 px-8 py-3 rounded-[30px] max-md:px-5">
                <div className="text-white text-xl font-semibold grow whitespace-nowrap self-start">
                  Assistance
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-col mt-10 px-6 max-md:max-w-full max-md:px-5">
              <div className="self-center flex w-full max-w-[1032px] justify-between gap-5 items-start max-md:max-w-full max-md:flex-wrap">
                <div className="flex flex-col items-stretch">
                  <div className="text-black text-3xl font-semibold whitespace-nowrap">
                    Liste des employés{" "}
                  </div>
                  <div className="text-black text-sm font-light whitespace-nowrap mt-2">
                    Liste total des employés de l’entreprise
                  </div>
                </div>
                <div className="flex items-center justify-between gap-5 mt-3">
                  <div className="text-zinc-500 text-lg font-medium my-auto">
                    Lundi 16 mars 2023{" "}
                  </div>
                </div>
              </div>
              <div className="bg-stone-300 w-[1039px] shrink-0 max-w-full h-px ml-5 mt-7 self-start" />
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
              <div className="bg-stone-300 w-[1039px] shrink-0 max-w-full h-px ml-5 mt-9 self-start" />
              <div className="bg-white self-stretch flex flex-col items-stretch mt-6 pb-2 max-md:max-w-full">
                <div className="max-md:max-w-full">
                  <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                    <div className="flex flex-col items-stretch w-[33%] max-md:w-full max-md:ml-0">
                      <div className="flex grow flex-col justify-center items-stretch max-md:mt-5">
                        <div className="bg-zinc-50 flex w-full flex-col items-center px-2.5 py-6 rounded-3xl">
                          <div className="flex gap-3 items-start">
                            <div className="self-stretch flex grow basis-[0%] flex-col items-stretch">
                              <div className="flex items-stretch justify-between gap-5">
                                <div className="flex flex-col items-stretch">
                                  <div className="text-black text-2xl font-semibold whitespace-nowrap">
                                    Ange kano
                                  </div>
                                  <div className="text-black text-sm mt-2">
                                    Livreur
                                  </div>
                                </div>
                              </div>
                              <div className="text-zinc-600 text-sm font-light mt-2">
                                (+225)0151831681
                              </div>
                              <div className="text-zinc-600 text-sm font-light mt-2">
                                Abidjan,Yopougon
                              </div>
                            </div>
                          </div>
                          <div className="self-stretch flex items-stretch justify-between gap-2.5 mt-6">
                            <div className="flex grow basis-[0%] flex-col justify-center items-stretch">
                              <div className="text-black text-sm font-light whitespace-nowrap bg-gray-200 justify-center items-stretch p-4 rounded-[121px]">
                                EDGTSPQDRESS151223000
                              </div>
                            </div>
                            <div className="flex grow basis-[0%] flex-col justify-center items-stretch self-start">
                              <div className="bg-fuchsia-800 bg-opacity-20 flex justify-between gap-1.5 px-5 py-3 rounded-[100px] items-start max-md:pr-5">
                                <div className="text-fuchsia-800 text-xl font-semibold grow whitespace-nowrap">
                                  Occupé
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0">
                      <div className="flex grow flex-col justify-center items-stretch max-md:mt-5">
                        <div className="bg-zinc-50 flex w-full flex-col items-center pl-2.5 pr-0.5 py-6 rounded-3xl">
                          <div className="flex gap-3 items-start">
                            <div className="self-stretch flex grow basis-[0%] flex-col items-stretch">
                              <div className="flex items-stretch justify-between gap-5">
                                <div className="flex flex-col items-stretch">
                                  <div className="text-black text-2xl font-semibold whitespace-nowrap">
                                    Dorgeles Aka
                                  </div>
                                  <div className="text-black text-sm mt-2">
                                    Repasseur
                                  </div>
                                </div>
                              </div>
                              <div className="text-zinc-600 text-sm font-light mt-1">
                                (+225)0151831681
                              </div>
                              <div className="text-zinc-600 text-sm font-light mt-2">
                                Abidjan,Yopougon
                              </div>
                            </div>
                          </div>
                          <div className="self-stretch flex items-stretch justify-between gap-2.5 mt-6">
                            <div className="flex grow basis-[0%] flex-col justify-center items-stretch">
                              <div className="text-black text-sm font-light whitespace-nowrap bg-gray-200 justify-center items-stretch px-4 py-4 rounded-[121px]">
                                EDXXTSPQDRESS151213000
                              </div>
                            </div>
                            <div className="flex grow basis-[0%] flex-col justify-center items-stretch self-start">
                              <div className="bg-green-600 bg-opacity-20 flex justify-between gap-0.5 px-3 py-3 rounded-[100px] items-start">
                                <div className="text-green-600 text-xl font-semibold grow whitespace-nowrap">
                                  Disponible
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0">
                      <div className="flex grow flex-col justify-center items-stretch max-md:mt-5">
                        <div className="bg-zinc-50 flex w-full flex-col items-center px-2.5 py-6 rounded-3xl">
                          <div className="flex gap-3 items-start">
                            <div className="self-stretch flex grow basis-[0%] flex-col items-stretch">
                              <div className="flex items-stretch justify-between gap-5">
                                <div className="flex flex-col items-stretch">
                                  <div className="text-black text-2xl font-semibold whitespace-nowrap">
                                    Ange kano
                                  </div>
                                  <div className="text-black text-sm mt-2">
                                    Livreur
                                  </div>
                                </div>
                              </div>
                              <div className="text-zinc-600 text-sm font-light mt-2">
                                (+225)0151831681
                              </div>
                              <div className="text-zinc-600 text-sm font-light mt-2">
                                Abidjan,Yopougon
                              </div>
                            </div>
                          </div>
                          <div className="self-stretch flex items-stretch justify-between gap-2.5 mt-6">
                            <div className="flex grow basis-[0%] flex-col justify-center items-stretch">
                              <div className="text-black text-sm font-light whitespace-nowrap bg-gray-200 justify-center items-stretch p-4 rounded-[121px]">
                                EDGTSPQDRESS151223000
                              </div>
                            </div>
                            <div className="flex grow basis-[0%] flex-col justify-center items-stretch self-start">
                              <div className="bg-fuchsia-800 bg-opacity-20 flex justify-between gap-1.5 px-5 py-3 rounded-[100px] items-start max-md:pr-5">
                                <div className="text-fuchsia-800 text-xl font-semibold grow whitespace-nowrap">
                                  Occupé
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-5 max-md:max-w-full">
                  <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                    <div className="flex flex-col items-stretch w-[33%] max-md:w-full max-md:ml-0">
                      <div className="flex grow flex-col justify-center items-stretch max-md:mt-5">
                        <div className="bg-zinc-50 flex w-full flex-col items-center px-2.5 py-6 rounded-3xl">
                          <div className="flex gap-3 items-start">
                            <div className="self-stretch flex grow basis-[0%] flex-col items-stretch">
                              <div className="flex items-stretch justify-between gap-5">
                                <div className="flex flex-col items-stretch">
                                  <div className="text-black text-2xl font-semibold whitespace-nowrap">
                                    Ange kano
                                  </div>
                                  <div className="text-black text-sm mt-2">
                                    Livreur
                                  </div>
                                </div>
                              </div>
                              <div className="text-zinc-600 text-sm font-light mt-2">
                                (+225)0151831681
                              </div>
                              <div className="text-zinc-600 text-sm font-light mt-2">
                                Abidjan,Yopougon
                              </div>
                            </div>
                          </div>
                          <div className="self-stretch flex items-stretch justify-between gap-2.5 mt-6">
                            <div className="flex grow basis-[0%] flex-col justify-center items-stretch">
                              <div className="text-black text-sm font-light whitespace-nowrap bg-gray-200 justify-center items-stretch p-4 rounded-[121px]">
                                EDGTSPQDRESS151223000
                              </div>
                            </div>
                            <div className="flex grow basis-[0%] flex-col justify-center items-stretch self-start">
                              <div className="bg-fuchsia-800 bg-opacity-20 flex justify-between gap-1.5 px-5 py-3 rounded-[100px] items-start max-md:pr-5">
                                <div className="text-fuchsia-800 text-xl font-semibold grow whitespace-nowrap">
                                  Occupé
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0">
                      <div className="flex grow flex-col justify-center items-stretch max-md:mt-5">
                        <div className="bg-zinc-50 flex w-full flex-col items-center px-2.5 py-6 rounded-3xl">
                          <div className="flex gap-3 items-start">
                            <div className="self-stretch flex grow basis-[0%] flex-col items-stretch">
                              <div className="flex items-stretch justify-between gap-5">
                                <div className="flex flex-col items-stretch">
                                  <div className="text-black text-2xl font-semibold whitespace-nowrap">
                                    Ange kano
                                  </div>
                                  <div className="text-black text-sm mt-2">
                                    Livreur
                                  </div>
                                </div>
                              </div>
                              <div className="text-zinc-600 text-sm font-light mt-2">
                                (+225)0151831681
                              </div>
                              <div className="text-zinc-600 text-sm font-light mt-2">
                                Abidjan,Yopougon
                              </div>
                            </div>
                          </div>
                          <div className="self-stretch flex items-stretch justify-between gap-2.5 mt-6">
                            <div className="flex grow basis-[0%] flex-col justify-center items-stretch">
                              <div className="text-black text-sm font-light whitespace-nowrap bg-gray-200 justify-center items-stretch p-4 rounded-[121px]">
                                EDGTSPQDRESS151223000
                              </div>
                            </div>
                            <div className="flex grow basis-[0%] flex-col justify-center items-stretch self-start">
                              <div className="bg-fuchsia-800 bg-opacity-20 flex justify-between gap-1.5 px-5 py-3 rounded-[100px] items-start max-md:pr-5">
                                <div className="text-fuchsia-800 text-xl font-semibold grow whitespace-nowrap">
                                  Occupé
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0">
                      <div className="flex grow flex-col justify-center items-stretch max-md:mt-5">
                        <div className="bg-zinc-50 flex w-full flex-col items-center pl-2.5 pr-0.5 py-6 rounded-3xl">
                          <div className="flex gap-3 items-start">
                            <div className="self-stretch flex grow basis-[0%] flex-col items-stretch">
                              <div className="flex items-stretch justify-between gap-5">
                                <div className="flex flex-col items-stretch">
                                  <div className="text-black text-2xl font-semibold whitespace-nowrap">
                                    Ange kano
                                  </div>
                                  <div className="text-black text-sm mt-2">
                                    Livreur
                                  </div>
                                </div>
                              </div>
                              <div className="text-zinc-600 text-sm font-light mt-2">
                                (+225)0151831681
                              </div>
                              <div className="text-zinc-600 text-sm font-light mt-2">
                                Abidjan,Yopougon
                              </div>
                            </div>
                          </div>
                          <div className="self-stretch flex items-stretch justify-between gap-2.5 mt-6">
                            <div className="flex grow basis-[0%] flex-col justify-center items-stretch">
                              <div className="text-black text-sm font-light whitespace-nowrap bg-gray-200 justify-center items-stretch pl-3.5 pr-5 py-4 rounded-[121px]">
                                SDFTSPQDRESS151723000
                              </div>
                            </div>
                            <div className="flex grow basis-[0%] flex-col justify-center items-stretch self-start">
                              <div className="bg-green-600 bg-opacity-20 flex justify-between gap-0.5 px-3 py-3 rounded-[100px] items-start">
                                <div className="text-green-600 text-xl font-semibold grow whitespace-nowrap">
                                  Disponible
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-5 max-md:max-w-full">
                  <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                    <div className="flex flex-col items-stretch w-[33%] max-md:w-full max-md:ml-0">
                      <div className="flex grow flex-col justify-center items-stretch max-md:mt-5">
                        <div className="bg-zinc-50 flex w-full flex-col items-center px-2.5 py-6 rounded-3xl">
                          <div className="flex gap-3 items-start">
                            <div className="self-stretch flex grow basis-[0%] flex-col items-stretch">
                              <div className="flex items-stretch justify-between gap-5">
                                <div className="flex flex-col items-stretch">
                                  <div className="text-black text-2xl font-semibold whitespace-nowrap">
                                    Ange kano
                                  </div>
                                  <div className="text-black text-sm mt-2">
                                    Livreur
                                  </div>
                                </div>
                              </div>
                              <div className="text-zinc-600 text-sm font-light mt-2">
                                (+225)0151831681
                              </div>
                              <div className="text-zinc-600 text-sm font-light mt-2">
                                Abidjan,Yopougon
                              </div>
                            </div>
                          </div>
                          <div className="self-stretch flex items-stretch justify-between gap-2.5 mt-6">
                            <div className="flex grow basis-[0%] flex-col justify-center items-stretch">
                              <div className="text-black text-sm font-light whitespace-nowrap bg-gray-200 justify-center items-stretch p-4 rounded-[121px]">
                                EDGTSPQDRESS151223000
                              </div>
                            </div>
                            <div className="flex grow basis-[0%] flex-col justify-center items-stretch self-start">
                              <div className="bg-fuchsia-800 bg-opacity-20 flex justify-between gap-1.5 px-5 py-3 rounded-[100px] items-start max-md:pr-5">
                                <div className="text-fuchsia-800 text-xl font-semibold grow whitespace-nowrap">
                                  Occupé
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0">
                      <div className="flex grow flex-col justify-center items-stretch max-md:mt-5">
                        <div className="bg-zinc-50 flex w-full flex-col items-center pl-2.5 pr-0.5 py-6 rounded-3xl">
                          <div className="flex gap-3 items-start">
                            <div className="self-stretch flex grow basis-[0%] flex-col items-stretch">
                              <div className="flex items-stretch justify-between gap-5">
                                <div className="flex flex-col items-stretch">
                                  <div className="text-black text-2xl font-semibold whitespace-nowrap">
                                    Dorgeles Aka
                                  </div>
                                  <div className="text-black text-sm mt-2">
                                    Repasseur
                                  </div>
                                </div>
                              </div>
                              <div className="text-zinc-600 text-sm font-light mt-1">
                                (+225)0151831681
                              </div>
                              <div className="text-zinc-600 text-sm font-light mt-2">
                                Abidjan,Yopougon
                              </div>
                            </div>
                          </div>
                          <div className="self-stretch flex items-stretch justify-between gap-2.5 mt-6">
                            <div className="flex grow basis-[0%] flex-col justify-center items-stretch">
                              <div className="text-black text-sm font-light whitespace-nowrap bg-gray-200 justify-center items-stretch px-4 py-4 rounded-[121px]">
                                EDXXTSPQDRESS151213000
                              </div>
                            </div>
                            <div className="flex grow basis-[0%] flex-col justify-center items-stretch self-start">
                              <div className="bg-green-600 bg-opacity-20 flex justify-between gap-0.5 px-3 py-3 rounded-[100px] items-start">
                                <div className="text-green-600 text-xl font-semibold grow whitespace-nowrap">
                                  Disponible
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0">
                      <div className="flex grow flex-col justify-center items-stretch max-md:mt-5">
                        <div className="bg-zinc-50 flex w-full flex-col items-center pl-2.5 pr-0.5 py-6 rounded-3xl">
                          <div className="flex gap-3 items-start">
                            <div className="self-stretch flex grow basis-[0%] flex-col items-stretch">
                              <div className="flex items-stretch justify-between gap-5">
                                <div className="flex flex-col items-stretch">
                                  <div className="text-black text-2xl font-semibold whitespace-nowrap">
                                    Ange kano
                                  </div>
                                  <div className="text-black text-sm mt-2">
                                    Livreur
                                  </div>
                                </div>
                              </div>
                              <div className="text-zinc-600 text-sm font-light mt-2">
                                (+225)0151831681
                              </div>
                              <div className="text-zinc-600 text-sm font-light mt-2">
                                Abidjan,Yopougon
                              </div>
                            </div>
                          </div>
                          <div className="self-stretch flex items-stretch justify-between gap-2.5 mt-6">
                            <div className="flex grow basis-[0%] flex-col justify-center items-stretch">
                              <div className="text-black text-sm font-light whitespace-nowrap bg-gray-200 justify-center items-stretch pl-3.5 pr-5 py-4 rounded-[121px]">
                                SDFTSPQDRESS151723000
                              </div>
                            </div>
                            <div className="flex grow basis-[0%] flex-col justify-center items-stretch self-start">
                              <div className="bg-green-600 bg-opacity-20 flex justify-between gap-0.5 px-3 py-3 rounded-[100px] items-start">
                                <div className="text-green-600 text-xl font-semibold grow whitespace-nowrap">
                                  Disponible
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
    </div>
  );
};
