import React from "react";

export const Dashboard = () => {
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
            <div className="justify-between items-stretch bg-black self-stretch flex gap-2.5 mt-10 px-8 py-3 rounded-[30px] max-md:mt-10 max-md:px-5">
              <div className="text-white text-xl font-semibold self-center grow whitespace-nowrap my-auto">
                Dashboard
              </div>
            </div>
            <div className="justify-between items-stretch self-stretch flex gap-3.5 mt-6 px-8 py-3 rounded-3xl max-md:px-5">
              <div className="text-black text-right text-xl font-semibold self-center grow whitespace-nowrap my-auto">
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
          <div className="bg-white flex grow flex-col w-full pl-12 pr-20 py-11 border-l-stone-300 border-l border-solid max-md:max-w-full max-md:px-5">
            <div className="flex justify-between gap-5 mr-7 self-end items-start max-md:max-w-full max-md:flex-wrap max-md:mr-2.5">
              <div className="text-neutral-500 text-lg whitespace-nowrap border grow justify-center items-stretch pl-6 pr-16 py-4 rounded-3xl border-solid border-zinc-300 max-md:pl-5 max-md:pr-6">
                Recherche...
              </div>

              <div className="justify-between items-stretch bg-black self-stretch flex gap-2.5 px-8 py-3 rounded-[30px] max-md:px-5">
                <div className="text-white text-xl font-semibold grow whitespace-nowrap self-start">
                  Assistance
                </div>
              </div>
            </div>
            <div className="self-stretch flex w-full justify-between gap-5 mt-11 pr-5 items-start max-md:max-w-full max-md:flex-wrap max-md:mr-1.5 max-md:mt-10">
              <div className="flex flex-col items-stretch">
                <div className="text-black text-3xl font-semibold">
                  Dashboard
                </div>
                <div className="text-black text-sm font-light whitespace-nowrap mt-4">
                  Board de suivie des activités de l’entreprise
                </div>
              </div>
              <div className="flex items-center justify-between gap-5 mt-2.5">
                <div className="text-zinc-500 text-lg font-medium my-auto">
                  Lundi 16 mars 2023{" "}
                </div>
              </div>
            </div>
            <div className="bg-stone-300 self-stretch w-full shrink-0 h-px mt-7 max-md:mr-1.5" />
            <div className="self-center flex w-[859px] max-w-full items-stretch justify-between gap-5 mt-9 max-md:flex-wrap">
              <div className="justify-center items-stretch flex grow basis-[0%] flex-col">
                <div className="justify-between items-stretch flex gap-3">
                  <div className="flex-col overflow-hidden relative flex aspect-square w-[52px] justify-center items-center"></div>
                  <div className="self-center flex grow basis-[0%] flex-col items-stretch my-auto">
                    <div className="text-black text-xl font-medium whitespace-nowrap">
                      Terminer
                    </div>
                    <div className="flex items-stretch justify-between gap-px mt-4">
                      <div className="text-green-500 text-2xl font-semibold grow whitespace-nowrap">
                        18
                      </div>
                      <div className="flex-col overflow-hidden self-center relative flex aspect-[1.6666666666666667] w-2.5 justify-center items-center my-auto"></div>
                      <div className="text-stone-300 text-xs self-center grow whitespace-nowrap my-auto">
                        +2 taches
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="justify-center items-stretch flex grow basis-[0%] flex-col">
                <div className="justify-between items-stretch flex gap-3">
                  <div className="flex-col overflow-hidden relative flex aspect-square w-[52px] justify-center items-center"></div>
                  <div className="self-center flex grow basis-[0%] flex-col items-stretch my-auto">
                    <div className="text-black text-xl font-medium whitespace-nowrap">
                      En cours
                    </div>
                    <div className="flex items-stretch justify-between gap-px mt-4">
                      <div className="text-sky-500 text-2xl font-semibold grow whitespace-nowrap">
                        10
                      </div>
                      <div className="flex-col overflow-hidden self-center relative flex aspect-[1.6666666666666667] w-2.5 justify-center items-center my-auto"></div>
                      <div className="text-stone-300 text-xs self-center grow whitespace-nowrap my-auto">
                        +1 taches
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="justify-center items-stretch flex grow basis-[0%] flex-col">
                <div className="justify-between items-stretch flex gap-3">
                  <div className="flex-col overflow-hidden relative flex aspect-square w-[52px] justify-center items-center"></div>
                  <div className="self-center flex grow basis-[0%] flex-col items-stretch my-auto">
                    <div className="text-black text-xl font-medium whitespace-nowrap">
                      Disponible
                    </div>
                    <div className="text-purple-500 text-2xl font-semibold mt-2.5">
                      3
                    </div>
                  </div>
                </div>
              </div>
              <div className="items-stretch flex grow basis-[0%] flex-col justify-center">
                <div className="items-stretch flex justify-between gap-3">
                  <div className="flex-col overflow-hidden relative flex aspect-square w-[52px] justify-center items-center"></div>
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
            </div>
            <div className="bg-stone-300 self-stretch w-full shrink-0 h-px mt-9 max-md:mr-1.5" />
            <div className="self-stretch flex items-center justify-between gap-5 mt-16 pr-5 max-md:max-w-full max-md:flex-wrap max-md:mr-1.5 max-md:mt-10 max-md:pr-5">
              <div className="flex flex-col items-stretch my-auto">
                <div className="text-black text-xl font-semibold">
                  Commandes{" "}
                </div>
                <div className="text-black text-sm font-light whitespace-nowrap mt-3">
                  Listes de 10 dernières commandes{" "}
                </div>
              </div>
            </div>
            <div className="justify-between items-start self-stretch flex gap-5 mt-8 pr-2 max-md:max-w-full max-md:flex-wrap max-md:mr-1.5">
              <div className="text-black text-lg font-medium my-auto">
                Repassage de vêtement{" "}
              </div>

              <div className="text-black text-lg font-medium self-center my-auto">
                Ange Kano
              </div>
              <div className="text-black text-lg font-semibold self-center my-auto">
                5
              </div>
              <div className="self-center flex grow basis-[0%] flex-col justify-center items-stretch my-auto">
                <div className="bg-sky-500 bg-opacity-20 flex items-stretch justify-between gap-2.5 px-5 py-2.5 rounded-[100px]">
                  <div className="text-sky-700 text-lg font-semibold self-center grow whitespace-nowrap my-auto">
                    En cours
                  </div>
                </div>
              </div>
              <div className="text-zinc-600 text-lg font-semibold whitespace-nowrap justify-center items-stretch bg-neutral-200 self-center aspect-[2.1785714285714284] my-auto px-2.5 py-px rounded-3xl">
                lun 7
              </div>
            </div>
            <div className="justify-between items-start self-stretch flex w-full gap-5 mt-5 pr-4 max-md:flex-wrap max-md:mr-1.5">
              <div className="text-black text-lg font-medium my-auto">
                Repassage de vêtement{" "}
              </div>

              <div className="text-black text-lg font-medium self-center my-auto">
                Ange Kano
              </div>
              <div className="text-black text-lg font-semibold self-center my-auto">
                5
              </div>
              <div className="justify-center items-stretch bg-stone-300 self-center flex gap-3 my-auto px-3.5 py-3 rounded-[100px]">
                <div className="text-black text-lg font-semibold self-center my-auto">
                  En attente
                </div>
              </div>
              <div className="text-zinc-600 text-lg font-semibold whitespace-nowrap justify-center items-stretch bg-neutral-200 self-center my-auto px-2.5 py-px rounded-3xl">
                mar 10
              </div>
            </div>
            <div className="justify-between items-start self-stretch flex gap-5 mt-5 pr-1.5 max-md:max-w-full max-md:flex-wrap max-md:mr-1.5">
              <div className="text-black text-lg font-medium my-auto">
                Repassage de vêtement{" "}
              </div>

              <div className="text-black text-lg font-medium self-center my-auto">
                Ange Kano
              </div>
              <div className="text-black text-lg font-semibold self-center my-auto">
                5
              </div>
              <div className="self-center flex grow basis-[0%] flex-col justify-center items-stretch my-auto">
                <div className="bg-green-500 bg-opacity-20 flex justify-between gap-2 px-5 py-3.5 rounded-[100px] items-start">
                  <div className="text-green-600 text-xl font-semibold grow whitespace-nowrap">
                    Valider
                  </div>
                </div>
              </div>
              <div className="text-zinc-600 text-lg font-semibold whitespace-nowrap justify-center items-stretch bg-neutral-200 self-center my-auto px-2.5 py-px rounded-3xl">
                mer 19
              </div>
            </div>
            <div className="justify-between items-start self-stretch flex gap-5 mt-5 pr-2 max-md:max-w-full max-md:flex-wrap max-md:mr-1.5">
              <div className="text-black text-lg font-medium my-auto">
                Repassage de vêtement{" "}
              </div>

              <div className="text-black text-lg font-medium self-center my-auto">
                Ange Kano
              </div>
              <div className="text-black text-lg font-semibold self-center my-auto">
                5
              </div>
              <div className="self-center flex grow basis-[0%] flex-col justify-center items-stretch my-auto">
                <div className="bg-sky-500 bg-opacity-20 flex items-stretch justify-between gap-2.5 px-5 py-2.5 rounded-[100px]">
                  <div className="text-sky-700 text-lg font-semibold self-center grow whitespace-nowrap my-auto">
                    En cours
                  </div>
                </div>
              </div>
              <div className="text-zinc-600 text-lg font-semibold whitespace-nowrap justify-center items-stretch bg-neutral-200 self-center aspect-[2.1785714285714284] my-auto px-2.5 py-px rounded-3xl">
                lun 7
              </div>
            </div>
            <div className="justify-between items-start self-stretch flex w-full gap-5 mt-5 mb-12 max-md:max-w-full max-md:flex-wrap max-md:mr-1.5 max-md:mb-10">
              <div className="text-black text-lg font-medium my-auto">
                Repassage de vêtement{" "}
              </div>

              <div className="text-black text-lg font-medium self-center my-auto">
                Ange Kano
              </div>
              <div className="text-black text-lg font-semibold self-center my-auto">
                5
              </div>
              <div className="justify-center items-stretch bg-yellow-500 bg-opacity-20 self-center flex gap-3 my-auto px-4 py-3 rounded-[100px]">
                <div className="text-yellow-500 text-lg font-semibold self-center my-auto">
                  Livraison
                </div>
              </div>
              <div className="text-zinc-600 text-lg font-semibold whitespace-nowrap justify-center items-stretch bg-neutral-200 self-center my-auto px-2.5 py-px rounded-3xl">
                mar 10
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
