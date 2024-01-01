import React from "react";
import { Nav } from "../../components/nav/Nav";
import { HeaderNav } from "../../components/nav/HeaderNav";
import { HeaderTxt } from "../../components/nav/HeaderTxt";
import { HeaderStat } from "../../components/nav/HeaderStat";
import { ItemEmpCard } from "../../components/nav/items/ItemEmpCard";

export const EmpList = () => {
  return (
    <div className="bg-slate-300">
      <div className="flex max-md:flex-col max-md:items-stretch max-md:gap-0">
        <Nav Lien="Employés" />
        <div className="flex flex-col items-stretch w-[82%] max-md:w-full max-md:ml-0">
          <div className="bg-white flex grow flex-col w-full pt-9 pb-6 border-l-stone-300 border-l border-solid items-end max-md:max-w-full">
            <HeaderNav />
            <div className="self-stretch flex flex-col mt-10 pl-14 pr-20 max-md:max-w-full max-md:px-5">
              <HeaderTxt
                title="Liste des employés"
                descript="Liste total des employés de l’entreprise"
              />
              <HeaderStat />
              <div className="bg-white self-stretch flex flex-col items-stretch mt-6 pb-2 max-md:max-w-full">
                <div className="grid grid-cols-3 gap-x-3 gap-y-3 max-md:max-w-full">
                  <ItemEmpCard />
                  <ItemEmpCard />
                  <ItemEmpCard />
                  <ItemEmpCard />
                  <ItemEmpCard />
                  <ItemEmpCard />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
