import React, { useContext } from "react";
import { Nav } from "../../components/nav/Nav";
import { HeaderNav } from "../../components/nav/HeaderNav";
import { HeaderTxt } from "../../components/nav/HeaderTxt";
import { Stats } from "../../components/nav/items/Stats";
import { HeaderStat } from "../../components/nav/HeaderStat";
import { TacheEnAttente } from "../../components/items/TacheEnAttente";
import { Status } from "../../components/status/Status";
import { AuthContext } from "../../Context/AuthContext";
import { TacheEnCours } from "../../components/items/TacheEnCours";

export const TaskList = () => {
  const {
    userEmail,
    setAuthUser,
    userPassword,
    setPwd,
    setAccessToken,
    accessToken,
  } = useContext(AuthContext);
  return (
    <div className="bg-slate-300">
      <div className=" flex max-md:flex-col max-md:items-stretch max-md:gap-0">
        <Nav Lien="Liste Tache" />
        <p>{userEmail} qsd sd sd sdsd</p>
        <p>{accessToken}</p>
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
                    <TacheEnAttente />
                  </div>
                  {/* En cours */}
                  <div className="flex flex-col items-stretch w-[49%] ml-5 max-md:w-full max-md:ml-0">
                    <TacheEnCours />
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
