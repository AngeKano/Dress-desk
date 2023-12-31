import React, { useState } from "react";
import { Nav } from "../../components/nav/Nav";
import { HeaderNav } from "../../components/nav/HeaderNav";
import { HeaderTxt } from "../../components/nav/HeaderTxt";

export const AddCommand = () => {
  const [nbr, setNbr] = useState(1);
  const [nomClient, setNomClient] = useState("");
  return (
    <div className="bg-slate-300">
      <div className="flex max-md:flex-col max-md:items-stretch max-md:gap-0">
        <Nav Lien="Dashboard" />
        <div className="flex flex-col items-stretch w-[82%] max-md:w-full max-md:ml-0">
          <div className="bg-white flex grow flex-col w-full pl-12 pr-16 py-10 border-l-stone-300 border-l border-solid max-md:max-w-full max-md:px-5">
            <HeaderNav />
            <HeaderTxt
              title="Ajouter une commande"
              descript="Remplissez les champs pour démarrer de le processus de
              commande"
            />
            <div className="self-stretch max-md:max-w-full">
              <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                <div className="flex flex-col items-stretch w-[52%] max-md:w-full max-md:ml-0">
                  <div className="flex flex-col mt-5 max-md:max-w-full max-md:mt-10">
                    <div className="flex gap-2.5 self-start items-start">
                      <span className="text-zinc-600 text-xs font-[275] whitespace-nowrap">
                        Dasboard
                      </span>
                      <span className="text-zinc-600 text-xs font-[275] self-stretch grow whitespace-nowrap">
                        Ajouter une commande
                      </span>
                    </div>
                    <span className="text-black text-lg font-medium self-stretch mt-11 max-md:max-w-full max-md:mt-10">
                      Nom du client
                    </span>
                    <span className="text-zinc-600 text-sm font-light self-stretch max-md:max-w-full">
                      Les nom et l’identifiant du client sont unique
                    </span>
                    <input
                      value={nomClient}
                      onChange={(e) => setNomClient(e.target.value)}
                      placeholder="James"
                      className="bg-gray-100 px-5 flex w-[255px] shrink-0 max-w-full h-11 flex-col mt-3.5 rounded-[121px] self-start"
                    />
                    <div className="flex gap-2.5 mt-3 self-start items-start">
                      <span className="text-black text-sm font-light self-stretch grow whitespace-nowrap">
                        Utilisateur de l’application mobille
                      </span>
                    </div>
                    <span className="text-black text-lg font-medium self-stretch mt-14 max-md:max-w-full max-md:mt-10">
                      Numéro de commande
                    </span>
                    <div className="text-zinc-600 text-sm font-light self-stretch max-md:max-w-full">
                      Identifiant de la commande, Numéro utiliser lors du
                      retrait ou de la livraison
                    </div>
                    <div className="flex items-stretch justify-between gap-5 mt-5 self-start">
                      <div className="text-black text-md font-medium bg-gray-200 grow justify-center items-center px-11 py-2 rounded-full max-md:px-5">
                        com-
                        {!nomClient.toLowerCase()
                          ? "null"
                          : nomClient.toLowerCase()}
                        -1
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-stretch w-[48%] ml-5 max-md:w-full max-md:ml-0">
                  <div className="flex grow flex-col items-stretch max-md:max-w-full max-md:mt-10">
                    <div className="flex flex-col  pl-20 max-md:max-w-full max-md:mt-10 max-md:pl-5">
                      <div className="text-black text-lg font-medium self-center whitespace-nowrap mt-20 max-md:mt-10">
                        Nombre de vêtement
                      </div>
                      <div className="text-zinc-600 text-sm font-light self-center whitespace-nowrap max-md:ml-2.5">
                        Le nombre total de vêtement apporter pour service
                      </div>
                      <div className="self-center flex items-center justify-between gap-5 mt-6">
                        <button
                          onClick={() => {
                            setNbr(nbr + 1);
                          }}
                          className="rounded-full p-3 items-center justify-center bg-zinc-200"
                        >
                          {""}
                          <img src="/icons/Plus.svg" alt="" />
                        </button>
                        <span className="text-black text-xl font-medium my-auto">
                          {nbr}
                        </span>
                        <button
                          onClick={() => {
                            nbr > 1 ? setNbr(nbr - 1) : setNbr(nbr);
                          }}
                          className="rounded-full p-3 items-center justify-center bg-zinc-200"
                        >
                          {""}
                          <img src="/icons/Moins.svg" alt="" />
                        </button>
                      </div>
                      <span className="text-black text-lg font-medium ml-10 mt-12 self-center max-md:ml-2.5 max-md:mt-10">
                        Montant
                      </span>
                      <div className="text-zinc-600 text-sm font-light ml-4 self-center max-md:ml-2.5">
                        le montant totale à payer pour le service
                      </div>
                      <div className="text-black text-sm self-center font-light mt-7 max-md:mt-10">
                        <span className="font-semibold text-4xl">
                          {nbr * 100}
                        </span>{" "}
                        <span className="text-xl">FCFA</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-black text-lg font-medium self-stretch mt-11 max-md:max-w-full max-md:mt-10">
              Description de la commande (facultatif)
            </div>
            <div className="text-zinc-600 text-sm font-light self-stretch max-md:max-w-full">
              Rajouter des détails sur les spécificité de la commande et les
              information nécessaire pour son traitement
            </div>
            <textarea
              aria-label="Description"
              className="bg-gray-100 p-3 self-stretch flex shrink-0 h-[199px] flex-col mt-5 rounded-3xl max-md:max-w-full"
            />
            <div className="flex items-center justify-between gap-5 mr-6 mt-14 self-end max-md:max-w-full max-md:flex-wrap max-md:mr-2.5 max-md:mt-10">
              <button className="text-black text-xl font-semibold grow  ">
                Annuler
              </button>
              <button className="justify-between items-stretch self-stretch flex gap-2.5 px-7 py-2 rounded-3xl max-md:px-5">
                <div className="text-black text-xl font-semibold grow  self-start">
                  Validation
                </div>
              </button>
              <button className="text-white text-xl font-semibold  justify-center items-center bg-black self-stretch grow px-5 py-2 rounded-[30px] max-md:pr-5">
                Enregistrer
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
