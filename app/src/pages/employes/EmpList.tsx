import React, { useEffect, useState } from "react";
import { Nav } from "../../components/nav/Nav";
import { HeaderNav } from "../../components/nav/HeaderNav";
import { HeaderTxt } from "../../components/nav/HeaderTxt";
import { HeaderStat } from "../../components/nav/HeaderStat";
import { ItemEmpCard } from "../../components/nav/items/ItemEmpCard";
import axios from "../../api/axios";

export const EmpList = () => {
  const [listEmploye, setListEmploye] = useState([]);
  const REGISTER_URL = "/employe";
  useEffect(() => {
    axios
      .get(REGISTER_URL, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${sessionStorage.getItem("accessToken")}`,
        },
        withCredentials: true,
      })
      .then((res) => setListEmploye(res.data))
      .then((res) => console.log(listEmploye))
      .catch((e) => console.log(e));
  }, []);

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
                <div className="self-stretch flex items-center justify-between gap-5 mb-6 pr-5 max-md:max-w-full max-md:flex-wrap max-md:mr-1.5 max-md:mt-10 max-md:pr-5">
                  <div className="flex flex-col items-stretch my-auto">
                    <span className="text-black text-xl font-semibold">
                      Employés
                    </span>
                    <span className="text-gray-500 text-sm font-light whitespace-nowrap ">
                      Listes des employés de l'entreprise
                    </span>
                  </div>
                  <a
                    href="/AddEmp"
                    className="rounded-full p-2 flex items-center justify-center bg-[#00FF29]"
                  >
                    <img src="icons/dash/plusCommd.svg" alt="" />
                  </a>
                </div>
                <div className="grid grid-cols-3 gap-x-3 gap-y-3 max-md:max-w-full">
                  {/* Liste des employés */}
                  {listEmploye.length != 0 ? (
                    listEmploye.map((index: any, key: any) => (
                      <ItemEmpCard
                        idEmploye={index.idEmploye}
                        employeNames={index.employeNames}
                        employeFonction={index.employeFonction}
                        employeSalaire={index.employeSalaire}
                        employeStatut={index.employeStatut}
                      />
                    ))
                  ) : (
                    <span className="self-center font-light mt-10 text-zinc-500 ">
                      Aucun Employé enregistré
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
