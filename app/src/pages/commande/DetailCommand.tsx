import React, { useEffect, useState } from "react";
import { Nav } from "../../components/nav/Nav";
import { HeaderNav } from "../../components/nav/HeaderNav";
import { HeaderTxt } from "../../components/nav/HeaderTxt";
import { Status } from "../../components/status/Status";
import axios from "../../api/axios";

export const DetailCommand = (props: any) => {
  const [detailCommand, setDetailCommand] = useState({
    idCommande: 0,
    commandeStatut: "En traitement",
    commandeDateDepot: [0, 0, 0],
    numeroCommande: "com-Null-0",
    detailsCommandes: [
      {
        idDetailsCommande: 3,
        detailsCommandeQuantite: 2,
        detailsCommandeNote: "ssd sds",
        prixTotal: 200.0,
      },
    ],
    paiements: [],
    client: {
      idUser: 52,
      userPassword: "Null",
      userEmail: "Null",
      userNames: "Null",
      statutConnexion: "Null",
      dateInscription: [2024, 1, 3],
      role: "NULL",
      clientAdresse: "Null",
      clientTelephone: "+2250000000000",
      commandes: [],
    },
  });
  const REGISTER_URL = `/commande/${sessionStorage.getItem("idCommande")}`;
  useEffect(() => {
    axios
      .get(REGISTER_URL, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${sessionStorage.getItem("accessToken")}`,
        },
        withCredentials: true,
      })
      .then((res) => setDetailCommand(res.data));
  }, []);
  return (
    <div className="bg-slate-300">
      <div className=" flex max-md:flex-col max-md:items-stretch max-md:gap-0">
        <Nav Lien="Dashboard" />
        <div className="flex flex-col items-stretch w-[82%] max-md:w-full max-md:ml-0">
          <div className="bg-white flex grow flex-col w-full pl-14 pr-20 py-10 border-l-stone-300 border-l border-solid max-md:max-w-full max-md:px-5">
            <HeaderNav />
            <HeaderTxt
              title="Details commande"
              descript="Information relative à la commande sélectionné"
            />
            <div className="self-stretch mr-5 max-md:max-w-full max-md:mr-2.5">
              <div className="flex items-center justify-center max-md:flex-col max-md:items-stretch max-md:gap-0">
                <div className="flex flex-col items-stretch w-[47%] max-md:w-full max-md:ml-0">
                  <div className="flex grow flex-col items-stretch max-md:mt-10">
                    <div className="flex gap-2.5 mt-5 self-start items-start">
                      <div className="text-zinc-600 text-xs font-[275] self-stretch grow ">
                        Dasboard
                      </div>
                      <div className="text-zinc-600 text-xs font-[275] self-stretch grow ">
                        Details commande
                      </div>
                    </div>
                    <div className="flex items-center justify-center gap-5 ml-5 mt-10 self-start max-md:ml-2.5">
                      <img src="/users/2.png" alt="" />
                      <div className="flex grow flex-col items-stretch self-start">
                        <div className="text-black text-2xl font-semibold">
                          {detailCommand.client.userNames}
                        </div>
                        <div className="text-black text-lg font-light">
                          {detailCommand.client.userEmail}
                        </div>
                        <div className="text-black text-lg font-light">
                          {detailCommand.client.clientTelephone}
                        </div>
                        <div className="text-black text-lg font-light">
                          {detailCommand.client.clientAdresse}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-stretch self-center justify-center w-[53%] ml-5 max-md:w-full ">
                  <div className="flex flex-col items-end justify-center max-md:max-w-full">
                    <div className="flex items-center justify-center gap-5 mt-28 max-md:max-w-full max-md:flex-wrap max-md:mt-10">
                      <button className="justify-between items-stretch flex gap-2.5 px-7 py-2 rounded-3xl max-md:px-5">
                        <img src="/icons/Edit.svg" alt="" />
                        <span className="text-black text-xl font-semibold grow whitespace-nowrap self-start">
                          Modifier
                        </span>
                      </button>
                      <button className="justify-center items-center bg-red-600 flex gap-2.5 px-5 py-2 rounded-[30px] max-md:px-5">
                        <img src="/icons/annuler.svg" alt="" />
                        <span className="text-white text-xl font-semibold self-stretch grow whitespace-nowrap">
                          Supprimer
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch flex justify-between mt-14 mx-5 items-start max-md:max-w-full max-md:flex-wrap max-md:mr-2.5 max-md:mt-10">
              <div className="flex flex-col items-stretch">
                <div className="flex items-stretch justify-between gap-5">
                  <div className="text-black text-2xl font-semibold self-center grow whitespace-nowrap my-auto">
                    Repassage de vêtement
                  </div>
                </div>
                <div className="text-black text-lg font-medium mt-7">
                  Numéro de commande
                </div>
                <div className="text-black text-lg font-medium mt-7 max-md:mt-10">
                  Nombre de vetement
                </div>
                <div className="text-black text-lg font-medium mt-7">
                  Date du dépôt des vêtements
                </div>
                <div className="text-black text-lg font-medium mt-7 max-md:mt-10">
                  Statuts de la commande
                </div>
                <div className="text-black text-lg font-medium mt-7 max-md:mt-10">
                  Employés en charge
                </div>
              </div>
              <div className="flex flex-col mt-1">
                <div className="text-zinc-600 text-2xl font-semibold whitespace-nowrap self-end">
                  <span className="text-4xl">
                    {detailCommand.detailsCommandes[0].prixTotal}
                  </span>
                  <span className="font-medium text-zinc-600">FCFA</span>
                </div>
                <span className="text-black text-xl font-medium self-end mt-7 max-md:mt-10">
                  {detailCommand.numeroCommande}
                </span>
                <div className="self-stretch flex flex-col mt-7 pl-20 items-end max-md:pl-5">
                  <span className="text-black text-lg font-semibold ">
                    {detailCommand.detailsCommandes[0].detailsCommandeQuantite}
                  </span>
                  <span className="text-black text-lg font-semibold self-end mt-7 max-md:ml-0.5">
                    {detailCommand.commandeDateDepot[0] +
                      "-" +
                      detailCommand.commandeDateDepot[1] +
                      "-" +
                      detailCommand.commandeDateDepot[2]}
                  </span>
                </div>
                <div className=" self-end flex items-stretch justify-between gap-2.5 mt-7   rounded-[100px] max-md:px-5">
                  <Status type={detailCommand.commandeStatut} />
                </div>
                <div className="self-stretch flex items-stretch justify-between gap-2 mt-7">
                  <img src="/Users/5.png" width={40} height={40} alt="" />
                  <div className="text-black text-lg font-medium self-center grow whitespace-nowrap ">
                    Marc Aurel
                  </div>
                </div>
              </div>
            </div>
            <div className="text-black text-lg font-medium whitespace-nowrap ml-5 mt-8 self-start max-md:ml-2.5">
              Descriptions de la commande :
            </div>
            <textarea
              placeholder="Description"
              value={detailCommand.detailsCommandes[0].detailsCommandeNote}
              className="text-black text-lg bg-gray-200 self-stretch mt-3.5 mx-5 pl-6 pr-16 pt-6 pb-10 rounded-3xl items-start max-md:max-w-full max-md:mr-2.5 max-md:px-5"
            ></textarea>
          </div>
        </div>
      </div>
    </div>
  );
};
