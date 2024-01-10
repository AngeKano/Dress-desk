import { useEffect, useState } from "react";
import { Nav } from "../../components/nav/Nav";
import { HeaderNav } from "../../components/nav/HeaderNav";
import { HeaderTxt } from "../../components/nav/HeaderTxt";
import { HeaderStat } from "../../components/nav/HeaderStat";
import { TacheEnAttente } from "../../components/items/TacheEnAttente";
import { TacheEnCours } from "../../components/items/TacheEnCours";
import axios from "../../api/axios";

export const TaskList = () => {
  const [listeCommand, setListeCommand] = useState([]);
  const [listAttente, setListAttente] = useState([{}]);
  const [listEnCours, setListEnCours] = useState([{}]);
  const REGISTER_URL_COMMANDE = "/commande";
  const REGISTER_URL_TACHE_LISTE = "/tache-employe";
  useEffect(() => {
    axios
      .get(REGISTER_URL_COMMANDE, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${sessionStorage.getItem("accessToken")}`,
        },
        withCredentials: true,
      })
      .then((res) => setListeCommand(res.data))
      .catch((e) => console.log(e));
  }, []);
  useEffect(() => {
    axios
      .get(REGISTER_URL_TACHE_LISTE, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${sessionStorage.getItem("accessToken")}`,
        },
        withCredentials: true,
      })
      .then((res) => setListEnCours(res.data))
      .catch((e) => console.log(e));
  }, []);
  
  useEffect(() => {
    setListAttente([{}]);
    listeCommand.map((index: any, key: any) =>
      index.commandeStatut == "En traitement"
        ? setListAttente((oldArray) => [...oldArray, index])
        : null
    );
  }, [listeCommand]);

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
                    <TacheEnAttente liste={listAttente} />
                  </div>
                  {/* En cours */}
                  <div className="flex flex-col items-stretch w-[49%] ml-5 max-md:w-full max-md:ml-0">
                    <TacheEnCours liste={listEnCours} />
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
