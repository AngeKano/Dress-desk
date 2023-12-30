import React from "react";

export const TaskAttrib = () => {
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
          <div className="bg-white flex grow flex-col w-full py-10 border-l-stone-300 border-l border-solid items-end max-md:max-w-full">
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
            <div className="self-stretch flex flex-col mt-10 pl-14 pr-20 max-md:max-w-full max-md:px-5">
              <div className="self-stretch flex w-full justify-between gap-5 pr-8 items-start max-md:max-w-full max-md:flex-wrap max-md:pr-5">
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
              <div className="flex gap-2.5 mt-6 self-start items-start">
                <div className="text-zinc-600 text-xs font-[275] self-stretch grow whitespace-nowrap">
                  Dasboard
                </div>

                <div className="text-zinc-600 text-xs font-[275] self-stretch grow whitespace-nowrap">
                  Attribution de tache
                </div>
              </div>
              <div className="text-black text-2xl font-semibold self-stretch mt-10 max-md:max-w-full max-md:mt-10">
                Tache sélectionnée
              </div>
              <div className="justify-between items-start self-stretch flex w-full gap-5 mt-7 max-md:max-w-full max-md:flex-wrap">
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
              <div className="text-black text-2xl font-semibold self-stretch mt-16 max-md:max-w-full max-md:mt-10">
                Employé disponible
              </div>
              <div className="justify-between items-start self-stretch flex w-full gap-5 mt-10 max-md:max-w-full max-md:flex-wrap">
                <div className="text-black text-lg font-medium self-center my-auto">
                  Ange Kano
                </div>
                <div className="self-center flex grow basis-[0%] flex-col justify-center items-stretch my-auto">
                  <div className="text-black text-sm font-light whitespace-nowrap bg-gray-200 justify-center items-stretch p-4 rounded-[121px]">
                    EDGTSPQDRESS151223000
                  </div>
                </div>
                <div className="text-black text-lg font-semibold self-center my-auto">
                  5
                </div>
                <div className="self-center flex grow basis-[0%] flex-col justify-center items-stretch my-auto">
                  <div className="bg-green-600 bg-opacity-20 flex justify-between gap-0.5 px-3 py-2.5 rounded-[100px] items-start">
                    <div className="text-green-600 text-xl font-semibold grow whitespace-nowrap">
                      Disponible
                    </div>
                  </div>
                </div>
                <div className="justify-center self-center flex gap-2.5 my-auto pl-7 pr-3 py-3.5 rounded-3xl items-start max-md:pl-5">
                  <div className="text-black text-xl font-semibold self-stretch grow whitespace-nowrap">
                    Sélectionner
                  </div>
                </div>
              </div>
              <div className="justify-between items-start self-stretch flex w-full gap-5 mt-5 max-md:max-w-full max-md:flex-wrap">
                <div className="text-black text-lg font-medium self-center my-auto">
                  Ange Kano
                </div>
                <div className="self-center flex grow basis-[0%] flex-col justify-center items-stretch my-auto">
                  <div className="text-black text-sm font-light whitespace-nowrap bg-gray-200 justify-center items-stretch p-4 rounded-[121px]">
                    EDGTSPQDRESS151223000
                  </div>
                </div>
                <div className="text-black text-lg font-semibold self-center my-auto">
                  5
                </div>
                <div className="self-center flex grow basis-[0%] flex-col justify-center items-stretch my-auto">
                  <div className="bg-green-600 bg-opacity-20 flex justify-between gap-0.5 px-3 py-2.5 rounded-[100px] items-start">
                    <div className="text-green-600 text-xl font-semibold grow whitespace-nowrap">
                      Disponible
                    </div>
                  </div>
                </div>
                <div className="justify-center items-center bg-black self-center flex gap-2.5 my-auto px-5 py-3.5 rounded-[30px]">
                  <div className="text-white text-xl font-semibold self-stretch grow whitespace-nowrap">
                    Sélectionner
                  </div>
                </div>
              </div>
              <div className="justify-between items-start self-stretch flex w-full gap-5 mt-5 max-md:max-w-full max-md:flex-wrap">
                <div className="text-black text-lg font-medium self-center my-auto">
                  Ange Kano
                </div>
                <div className="self-center flex grow basis-[0%] flex-col justify-center items-stretch my-auto">
                  <div className="text-black text-sm font-light whitespace-nowrap bg-gray-200 justify-center items-stretch p-4 rounded-[121px]">
                    EDGTSPQDRESS151223000
                  </div>
                </div>
                <div className="text-black text-lg font-semibold self-center my-auto">
                  5
                </div>
                <div className="self-center flex grow basis-[0%] flex-col justify-center items-stretch my-auto">
                  <div className="bg-green-600 bg-opacity-20 flex justify-between gap-0.5 px-3 py-2.5 rounded-[100px] items-start">
                    <div className="text-green-600 text-xl font-semibold grow whitespace-nowrap">
                      Disponible
                    </div>
                  </div>
                </div>
                <div className="justify-center self-center flex gap-2.5 my-auto pl-7 pr-3 py-3.5 rounded-3xl items-start max-md:pl-5">
                  <div className="text-black text-xl font-semibold self-stretch grow whitespace-nowrap">
                    Sélectionner
                  </div>
                </div>
              </div>
              <div className="justify-between items-start self-stretch flex w-full gap-5 mt-5 max-md:max-w-full max-md:flex-wrap">
                <div className="text-black text-lg font-medium self-center my-auto">
                  Ange Kano
                </div>
                <div className="self-center flex grow basis-[0%] flex-col justify-center items-stretch my-auto">
                  <div className="text-black text-sm font-light whitespace-nowrap bg-gray-200 justify-center items-stretch p-4 rounded-[121px]">
                    EDGTSPQDRESS151223000
                  </div>
                </div>
                <div className="text-black text-lg font-semibold self-center my-auto">
                  5
                </div>
                <div className="self-center flex grow basis-[0%] flex-col justify-center items-stretch my-auto">
                  <div className="bg-green-600 bg-opacity-20 flex justify-between gap-0.5 px-3 py-2.5 rounded-[100px] items-start">
                    <div className="text-green-600 text-xl font-semibold grow whitespace-nowrap">
                      Disponible
                    </div>
                  </div>
                </div>
                <div className="justify-center self-center flex gap-2.5 my-auto pl-7 pr-3 py-3.5 rounded-3xl items-start max-md:pl-5">
                  <div className="text-black text-xl font-semibold self-stretch grow whitespace-nowrap">
                    Sélectionner
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between gap-5 mr-4 mt-28 self-end max-md:mr-2.5 max-md:mt-10">
                <div className="text-black text-xl font-semibold my-auto">
                  Annuler
                </div>
                <div className="text-white text-xl font-semibold whitespace-nowrap justify-center items-stretch bg-black self-stretch grow px-5 py-3 rounded-[30px] max-md:pr-5">
                  Enregistrer
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
