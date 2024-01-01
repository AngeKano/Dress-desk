import React from "react";
import { Nav } from "../../components/nav/Nav";
import { HeaderNav } from "../../components/nav/HeaderNav";
import { HeaderTxt } from "../../components/nav/HeaderTxt";
import { ItemsCommd } from "../../components/nav/items/ItemsCommd";
import { Status } from "../../components/status/Status";
import { ItemsEmp } from "../../components/nav/items/ItemsEmp";

export const TaskAttrib = () => {
  return (
    <div className="bg-slate-300">
      <div className=" flex max-md:flex-col max-md:items-stretch max-md:gap-0">
        <Nav Lien="Liste Tache" />
        <div className="flex flex-col items-stretch w-[82%] max-md:w-full max-md:ml-0">
          <div className="bg-white flex grow flex-col w-full py-10 border-l-stone-300 border-l border-solid items-end max-md:max-w-full">
            <HeaderNav />
            <div className="self-stretch flex flex-col mt-10 pl-14 pr-20 max-md:max-w-full max-md:px-5">
              <HeaderTxt
                title="Liste des taches"
                descript="Liste total des commandes de la journée"
              />
              <div className="flex gap-2.5 mt-6 self-start items-start">
                <span className="text-zinc-600 text-xs font-[275] self-stretch grow whitespace-nowrap">
                  Liste tache
                </span>

                <span className="text-zinc-600 text-xs font-[275] self-stretch grow whitespace-nowrap">
                  Attribution de tache
                </span>
              </div>
              <span className="text-black text-2xl font-semibold self-stretch mt-10 max-md:max-w-full max-md:mt-10">
                Tache sélectionnée
              </span>
              <ItemsCommd />

              <span className="text-black text-2xl font-semibold self-stretch mt-16 max-md:max-w-full max-md:mt-10">
                Employé disponible
              </span>

              <ItemsEmp />
              <ItemsEmp />
              <ItemsEmp />

              <div className="flex items-center justify-between gap-5 mr-4 mt-28 self-end max-md:mr-2.5 max-md:mt-10">
                <a
                  href="/TaskList"
                  className="text-black text-xl font-semibold my-auto"
                >
                  <span>Annuler</span>
                </a>
                <a href="/TaskList" className="text-white text-xl font-semibold whitespace-nowrap justify-center items-stretch bg-black self-stretch grow px-5 py-3 rounded-[30px] max-md:pr-5">
                  <span>Enregistrer</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
