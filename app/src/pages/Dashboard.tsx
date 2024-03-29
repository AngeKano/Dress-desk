import { useContext, useEffect } from "react";
import { Nav } from "../components/nav/Nav";
import { HeaderNav } from "../components/nav/HeaderNav";
import { HeaderTxt } from "../components/nav/HeaderTxt";
import { HeaderStat } from "../components/nav/HeaderStat";
import { ItemsCommd } from "../components/nav/items/ItemsCommd";
import { AuthContext } from "../Context/AuthContext";
import { GetCommand } from "../api/commande/GetCommand";

export const Dashboard = () => {
  const {
    listCommand,
    setIdCommandSpc,
    setListeCommand,
    setNbrCommndeTerminé,
    setNbrCommndeCours,
  } = useContext(AuthContext);

  useEffect(
    () =>
      GetCommand({
        setListeCommand: setListeCommand,
      }),
    []
  );

  useEffect(() => {
    setNbrCommndeTerminé(0);
    setNbrCommndeCours(0);
    listCommand.map((index: any) =>
      index.commandeStatut == "En cours d'attribution"
        ? setNbrCommndeCours((nbrCommndeCours: any) => nbrCommndeCours + 1)
        : setNbrCommndeTerminé(
            (nbrCommndeTerminé: any) => nbrCommndeTerminé + 1
          )
    );
  }, [listCommand]);

  return (
    <div className="bg-slate-300">
      <div className=" flex max-md:flex-col max-md:items-stretch max-md:gap-0">
        <Nav Lien="Dashboard" />
        <div className="flex flex-col items-stretch w-[82%] max-md:w-full ">
          <div className="bg-white flex grow flex-col w-full pl-12 pr-20 py-11 border-l-stone-300 border-l border-solid max-md:max-w-full max-md:px-5">
            <HeaderNav />
            <HeaderTxt
              title="Dashboard"
              descript="Board de suivie des activités de l’entreprise"
            />
            <HeaderStat />
            <div className="self-stretch flex items-center justify-between gap-5 mt-10 pr-5 max-md:max-w-full max-md:flex-wrap max-md:mr-1.5 max-md:mt-10 max-md:pr-5">
              <div className="flex flex-col items-stretch my-auto">
                <span className="text-black text-xl font-semibold">
                  Commandes
                </span>
                <span className="text-gray-500 text-sm font-light whitespace-nowrap ">
                  Listes de 10 dernières commandes
                </span>
              </div>
              <a
                href="/AddCommand"
                className="rounded-full p-2 flex items-center justify-center bg-[#00FF29]"
              >
                <img src="icons/dash/plusCommd.svg" alt="" />
              </a>
            </div>

            {/* Listes */}

            {listCommand.length != 0 ? (
              listCommand
                .reverse()
                .map((index: any) => (
                  <ItemsCommd
                    key={index.idCommande}
                    command={index}
                    setIdCommandSpc={setIdCommandSpc}
                  />
                ))
            ) : (
              <span className="self-center font-light mt-10 text-zinc-500 ">
                Aucune commande
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
