import React from "react";

export const AddEmp = () => {
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
          <div className="bg-white flex grow flex-col w-full pl-12 pr-16 py-10 border-l-stone-300 border-l border-solid items-end max-md:max-w-full max-md:px-5">
            <div className="flex justify-between gap-5 items-start max-md:max-w-full max-md:flex-wrap">
              <div className="text-neutral-500 text-lg whitespace-nowrap border grow justify-center items-stretch pl-6 pr-16 py-4 rounded-3xl border-solid border-zinc-300 max-md:pl-5 max-md:pr-6">
                Recherche...
              </div>

              <div className="justify-between items-stretch bg-black self-stretch flex gap-2.5 px-8 py-3 rounded-[30px] max-md:px-5">
                <div className="text-white text-xl font-semibold grow whitespace-nowrap self-start">
                  Assistance
                </div>
              </div>
            </div>
            <div className="self-stretch flex w-full justify-between gap-5 mt-10 items-start max-md:max-w-full max-md:flex-wrap">
              <div className="flex flex-col items-stretch">
                <div className="text-black text-3xl font-semibold">
                  Ajouter un employé
                </div>
                <div className="text-black text-sm font-light whitespace-nowrap mt-2">
                  Remplissez les champs pour enregistrer un nouvel employé
                </div>
              </div>
              <div className="flex items-center gap-5 mt-3">
                <div className="text-zinc-500 text-lg font-medium grow whitespace-nowrap my-auto">
                  Lundi 16 mars 2023{" "}
                </div>
              </div>
            </div>
            <div className="self-stretch mt-6 max-md:max-w-full">
              <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                <div className="flex flex-col items-stretch w-[70%] max-md:w-full max-md:ml-0">
                  <div className="max-md:max-w-full max-md:mt-10">
                    <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                      <div className="flex flex-col items-stretch w-[57%] max-md:w-full max-md:ml-0">
                        <div className="flex grow flex-col max-md:mt-2.5">
                          <div className="self-stretch flex items-center justify-between gap-3.5">
                            <div className="text-zinc-600 text-xs font-[275]">
                              Liste des employes
                            </div>

                            <div className="text-zinc-600 text-xs font-[275]">
                              Ajouter une commande
                            </div>
                          </div>
                          <div className="text-black text-lg font-medium self-stretch mt-11 max-md:mt-10">
                            Nom complet{" "}
                          </div>
                          <div className="text-zinc-600 text-sm font-light self-stretch whitespace-nowrap mt-3">
                            Les nom et l’identifiant de l’employe sont unique
                          </div>
                          <div className="bg-gray-200 self-stretch flex shrink-0 h-11 flex-col mt-3.5 rounded-[121px]" />
                          <div className="text-black text-lg font-medium self-stretch mt-7">
                            Poste
                          </div>
                          <div className="text-zinc-600 text-sm font-light self-stretch mt-4">
                            Rôle principale joué dans l’entreprise
                          </div>
                          <div className="bg-gray-200 self-stretch flex shrink-0 h-11 flex-col mt-3.5 rounded-[121px]" />
                          <div className="text-black text-lg font-medium self-stretch mt-6">
                            Numéro de téléphone
                          </div>
                          <div className="text-zinc-600 text-sm font-light self-stretch mt-3">
                            Entrer uniquement le numéro principale
                          </div>
                          <div className="flex items-center gap-3.5 ml-3 mt-3.5 pr-2 self-start max-md:ml-2.5">
                            <div className="text-black text-lg underline grow whitespace-nowrap my-auto">
                              + 225
                            </div>
                            <div className="bg-gray-200 self-stretch flex w-[255px] shrink-0 max-w-full h-11 flex-col rounded-[121px]" />
                          </div>
                          <div className="text-black text-lg font-medium self-stretch mt-7">
                            Lieu d’habitation
                          </div>
                          <div className="text-zinc-600 text-sm font-light self-stretch mt-4">
                            Zone actuelle de résidence
                          </div>
                          <div className="bg-gray-200 self-stretch flex shrink-0 h-11 flex-col mt-4 rounded-[121px]" />
                          <div className="text-black text-lg font-medium self-stretch mt-6">
                            Numéro de CNI
                          </div>
                          <div className="text-zinc-600 text-sm font-light self-stretch mt-4">
                            A enregistrer sous réserve de la pièce physique
                          </div>
                          <div className="bg-gray-200 self-stretch flex shrink-0 h-11 flex-col mt-3 rounded-[121px]" />
                        </div>
                      </div>
                      <div className="flex flex-col items-stretch w-[43%] ml-5 max-md:w-full max-md:ml-0">
                        <div className="flex grow flex-col items-stretch mt-96 max-md:mt-10">
                          <div className="text-black text-lg font-medium whitespace-nowrap">
                            Date de naissance
                          </div>
                          <div className="text-zinc-600 text-sm font-light mt-3.5">
                            Format XX/XX/XXXX
                          </div>
                          <div className="bg-gray-200 flex shrink-0 h-11 flex-col mt-4 rounded-[121px]" />
                          <div className="text-black text-lg font-medium whitespace-nowrap mt-6">
                            Autres document
                          </div>
                          <div className="text-zinc-600 text-sm font-light mt-4">
                            Pièce équivalente comme: Passeport, récépissé ou
                            autres...
                          </div>
                          <div className="bg-gray-200 flex shrink-0 h-11 flex-col mt-3.5 rounded-[121px]" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-stretch w-[30%] ml-5 max-md:w-full max-md:ml-0">
                  <div className="flex grow flex-col mt-14 max-md:mt-10">
                    <div className="self-stretch flex flex-col items-center pl-5 pr-16 max-md:pr-5">
                      <div className="text-black text-3xl font-semibold self-stretch mt-10">
                        Ange Kano
                      </div>
                      <div className="text-black text-lg font-medium self-stretch whitespace-nowrap mt-9">
                        Identifiant de l’employé
                      </div>
                    </div>
                    <div className="text-zinc-600 text-center text-sm font-light self-stretch mt-2.5">
                      Générer automatiquement à partir des informations de
                      l’employé
                    </div>
                    <div className="self-stretch flex items-stretch justify-between gap-5 mt-5 pr-1.5">
                      <div className="flex grow basis-[0%] flex-col justify-center items-stretch">
                        <div className="text-black text-sm font-light bg-gray-200 justify-center items-stretch p-4 rounded-[121px]">
                          EDGTSPQDRESS151223000
                        </div>
                      </div>
                    </div>
                    <div className="text-black text-lg font-medium self-stretch mt-14 max-md:mt-10">
                      Mot de passe de l’employé
                    </div>
                    <div className="self-stretch flex items-stretch justify-between gap-5 mt-6 pr-1.5">
                      <div className="bg-gray-200 flex grow basis-[0%] flex-col justify-center items-center pl-5 pr-16 py-5 rounded-[121px] max-md:pr-5"></div>
                    </div>
                    <div className="flex items-center justify-between gap-5 ml-5 mt-40 self-start max-md:ml-2.5 max-md:mt-10">
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
        </div>
      </div>
    </div>
  );
};
