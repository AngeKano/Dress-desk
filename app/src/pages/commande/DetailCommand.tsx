import React from "react";

export const DetailCommand = (props: any) => {
  return (
    <div className="bg-slate-300">
      <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
        <div className="flex flex-col items-stretch w-[18%] max-md:w-full max-md:ml-0">
          <div className="bg-white flex w-full grow flex-col mx-auto pl-4 pr-3 py-11">
            <div className="self-center flex items-stretch gap-1.5">
              <div className="text-black text-2xl self-center grow whitespace-nowrap my-auto">
                DRESS{props.title}
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
          <div className="bg-white flex grow flex-col w-full pl-14 pr-20 py-10 border-l-stone-300 border-l border-solid max-md:max-w-full max-md:px-5">
            <div className="self-stretch mr-5 max-md:max-w-full max-md:mr-2.5">
              <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                <div className="flex flex-col items-stretch w-[47%] max-md:w-full max-md:ml-0">
                  <div className="flex grow flex-col items-stretch mt-20 max-md:mt-10">
                    <div className="text-black text-3xl font-semibold">
                      Details commande
                    </div>
                    <div className="text-black text-sm font-light mt-4">
                      Information relative à la commande sélectionné
                    </div>
                    <div className="flex gap-2.5 mt-8 self-start items-start">
                      <div className="text-zinc-600 text-xs font-[275] self-stretch grow whitespace-nowrap">
                        Dasboard
                      </div>

                      <div className="text-zinc-600 text-xs font-[275] self-stretch grow whitespace-nowrap">
                        Details commande
                      </div>
                    </div>
                    <div className="flex items-stretch justify-between gap-5 ml-5 mt-10 self-start max-md:ml-2.5">
                      <div className="flex grow basis-[0%] flex-col items-stretch mt-3.5 self-start">
                        <div className="text-black text-2xl font-semibold">
                          Ange Kano
                        </div>
                        <div className="text-black text-lg font-light whitespace-nowrap mt-2.5">
                          AngeKano002@gmail.com
                        </div>
                        <div className="text-black text-lg font-light mt-2.5">
                          +225 0151831681
                        </div>
                        <div className="text-black text-lg font-light mt-3.5">
                          Abidjan, Yopougon
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-stretch w-[53%] ml-5 max-md:w-full max-md:ml-0">
                  <div className="flex flex-col items-stretch max-md:max-w-full max-md:mt-10">
                    <div className="flex w-full justify-between gap-5 items-start max-md:max-w-full max-md:flex-wrap">
                      <div className="text-neutral-500 text-lg whitespace-nowrap border grow justify-center items-stretch pl-6 pr-16 py-4 rounded-3xl border-solid border-zinc-300 max-md:pl-5 max-md:pr-6">
                        Recherche...
                      </div>

                      <div className="justify-between items-stretch bg-black self-stretch flex gap-2.5 px-8 py-3 rounded-[30px] max-md:px-5">
                        <div className="text-white text-xl font-semibold grow whitespace-nowrap self-start">
                          Assistance
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col mt-14 pl-16 items-end max-md:max-w-full max-md:mt-10 max-md:pl-5">
                      <div className="flex items-center justify-between gap-5">
                        <div className="text-zinc-500 text-lg font-medium my-auto">
                          Lundi 16 mars 2023{" "}
                        </div>
                      </div>
                      <div className="self-stretch flex items-stretch justify-between gap-5 mt-28 max-md:max-w-full max-md:flex-wrap max-md:mt-10">
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
            <div className="self-stretch flex justify-between gap-5 mt-14 mx-5 items-start max-md:max-w-full max-md:flex-wrap max-md:mr-2.5 max-md:mt-10">
              <div className="flex flex-col items-stretch">
                <div className="flex items-stretch justify-between gap-5">
                  <div className="text-black text-2xl font-semibold self-center grow whitespace-nowrap my-auto">
                    Repassage de vêtement
                  </div>
                </div>
                <div className="text-black text-lg font-medium mt-10">
                  Numéro de commande
                </div>
                <div className="text-black text-lg font-medium mt-10 max-md:mt-10">
                  Nombre de vetement
                </div>
                <div className="text-black text-lg font-medium mt-10">
                  Date du dépôt des vêtements
                </div>
                <div className="text-black text-lg font-medium mt-12 max-md:mt-10">
                  Statuts de la commande{" "}
                </div>
                <div className="text-black text-lg font-medium mt-14 max-md:mt-10">
                  Personne en charge
                </div>
              </div>
              <div className="flex flex-col mt-1">
                <div className="text-zinc-600 text-2xl font-semibold whitespace-nowrap self-end">
                  <span className="text-4xl">500 </span>
                  <span className="font-medium text-zinc-600">FCFA</span>
                </div>
                <div className="text-black text-sm font-light self-stretch whitespace-nowrap mt-12 max-md:mt-10">
                  EDGTSPQDRESS151223000
                </div>
                <div className="self-stretch flex flex-col mt-10 pl-20 items-end max-md:pl-5">
                  <div className="text-black text-2xl font-semibold whitespace-nowrap">
                    x5
                  </div>
                  <div className="text-black text-2xl font-semibold self-stretch whitespace-nowrap mt-9 max-md:ml-0.5">
                    15/12/23
                  </div>
                </div>
                <div className="bg-sky-500 bg-opacity-20 self-stretch flex items-stretch justify-between gap-2.5 mt-7 px-6 py-2.5 rounded-[100px] max-md:px-5">
                  <div className="text-sky-700 text-lg font-semibold self-center grow whitespace-nowrap my-auto">
                    En cours
                  </div>
                </div>
                <div className="self-stretch flex items-stretch justify-between gap-2 mt-6">
                  <div className="text-black text-lg font-medium self-center grow whitespace-nowrap my-auto">
                    Marc Aurel
                  </div>
                </div>
              </div>
            </div>
            <div className="text-black text-lg font-medium whitespace-nowrap ml-5 mt-8 self-start max-md:ml-2.5">
              Descriptions de la commande :{" "}
            </div>
            <div className="text-black text-lg bg-gray-200 self-stretch mt-3.5 mx-5 pl-6 pr-16 pt-6 pb-10 rounded-3xl items-start max-md:max-w-full max-md:mr-2.5 max-md:px-5">
              Pantalons 2 <br />
              Chemise 3 : <br />1 blanche
              <br />2 Noirs
              <br />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
