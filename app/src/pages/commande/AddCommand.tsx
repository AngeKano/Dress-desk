import React from 'react'

export const AddCommand = () => {
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
          <div className="bg-white flex grow flex-col w-full pl-12 pr-16 py-10 border-l-stone-300 border-l border-solid max-md:max-w-full max-md:px-5">
            <div className="self-stretch max-md:max-w-full">
              <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                <div className="flex flex-col items-stretch w-[52%] max-md:w-full max-md:ml-0">
                  <div className="flex flex-col mt-20 max-md:max-w-full max-md:mt-10">
                    <div className="text-black text-3xl font-semibold self-stretch max-md:max-w-full">
                      Ajouter une commande
                    </div>
                    <div className="text-black text-sm font-light self-stretch mt-2 max-md:max-w-full">
                      Remplissez les champs pour démarrer de le processus de
                      commande
                    </div>
                    <div className="flex gap-2.5 mt-7 self-start items-start">
                      <div className="text-zinc-600 text-xs font-[275] whitespace-nowrap">
                        Dasboard
                      </div>
                     
                      <div className="text-zinc-600 text-xs font-[275] self-stretch grow whitespace-nowrap">
                        Ajouter une commande
                      </div>
                    </div>
                    <div className="text-black text-lg font-medium self-stretch mt-11 max-md:max-w-full max-md:mt-10">
                      Nom du client
                    </div>
                    <div className="text-zinc-600 text-sm font-light self-stretch mt-4 max-md:max-w-full">
                      Les nom et l’identifiant du client sont unique
                    </div>
                    <div className="bg-gray-200 flex w-[255px] shrink-0 max-w-full h-11 flex-col mt-3.5 rounded-[121px] self-start" />
                    <div className="flex gap-2.5 mt-6 self-start items-start">
                    
                      <div className="text-black text-sm font-light self-stretch grow whitespace-nowrap">
                        Utilisateur de l’application mobille
                      </div>
                    </div>
                    <div className="text-black text-lg font-medium self-stretch mt-14 max-md:max-w-full max-md:mt-10">
                      Numéro de commande
                    </div>
                    <div className="text-zinc-600 text-sm font-light self-stretch mt-4 max-md:max-w-full">
                      Identifiant de la commande, Numéro utiliser lors du
                      retrait ou de la livraison{" "}
                    </div>
                    <div className="flex items-stretch justify-between gap-5 mt-9 self-start">
                      <div className="text-black text-sm font-light whitespace-nowrap bg-gray-200 grow justify-center items-stretch px-11 py-4 rounded-[121px] max-md:px-5">
                        EDGTSPQDRESS151223000
                      </div>
                     
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-stretch w-[48%] ml-5 max-md:w-full max-md:ml-0">
                  <div className="flex grow flex-col items-stretch max-md:max-w-full max-md:mt-10">
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
                    <div className="flex flex-col mt-14 pl-20 max-md:max-w-full max-md:mt-10 max-md:pl-5">
                      <div className="flex items-center gap-5 self-end">
                        <div className="text-zinc-500 text-lg font-medium grow whitespace-nowrap my-auto">
                          Lundi 16 mars 2023{" "}
                        </div>
                       
                      </div>
                      <div className="text-black text-lg font-medium self-center whitespace-nowrap mt-20 max-md:mt-10">
                        Nombre de vêtement
                      </div>
                      <div className="text-zinc-600 text-sm font-light whitespace-nowrap ml-4 mt-4 self-start max-md:ml-2.5">
                        Le nombre total de vêtement apporter pour service
                      </div>
                      <div className="self-center flex items-center justify-between gap-5 ml-12 mt-6">
                     
                        <div className="text-black text-xl font-medium my-auto">
                          1
                        </div>
                      
                      </div>
                      <div className="text-black text-lg font-medium ml-10 mt-12 self-start max-md:ml-2.5 max-md:mt-10">
                        Montant{" "}
                      </div>
                      <div className="text-zinc-600 text-sm font-light ml-4 mt-4 self-start max-md:ml-2.5">
                        le montant totale à payer pour le service{" "}
                      </div>
                      <div className="text-black text-sm font-light ml-12 mt-10 max-md:mt-10">
                        <span className="font-semibold text-4xl">100</span>{" "}
                        <span className="text-xl">FCFA</span>
                      </div>
                      <div className="flex w-full items-stretch justify-between gap-5 ml-4 mt-11 self-start max-md:ml-2.5 max-md:mt-10">
                        <div className="flex justify-between gap-1.5 items-start">
                         
                          <div className="text-black text-sm font-light">
                            Orange Monney
                          </div>
                        </div>
                        <div className="flex justify-between gap-2 items-start">
                         
                          <div className="text-black text-sm font-light">
                            Moov Monney
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-black text-lg font-medium self-stretch mt-11 max-md:max-w-full max-md:mt-10">
              Description de la commande (facultatif)
            </div>
            <div className="text-zinc-600 text-sm font-light self-stretch mt-3 max-md:max-w-full">
              Rajouter des détails sur les spécificité de la commande et les
              information nécessaire pour son traitement{" "}
            </div>
            <div className="bg-gray-200 self-stretch flex shrink-0 h-[199px] flex-col mt-5 rounded-3xl max-md:max-w-full" />
            <div className="flex items-center justify-between gap-5 mr-6 mt-14 self-end max-md:max-w-full max-md:flex-wrap max-md:mr-2.5 max-md:mt-10">
              <div className="text-black text-xl font-semibold grow whitespace-nowrap my-auto">
                Annuler
              </div>
              <div className="justify-between items-stretch self-stretch flex gap-2.5 px-7 py-3 rounded-3xl max-md:px-5">
               
                <div className="text-black text-xl font-semibold grow whitespace-nowrap self-start">
                  Validation
                </div>
              </div>
              <div className="text-white text-xl font-semibold whitespace-nowrap justify-center items-stretch bg-black self-stretch grow px-5 py-3 rounded-[30px] max-md:pr-5">
                Enregistrer
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
