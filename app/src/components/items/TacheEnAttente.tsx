import React from "react";
import { ItemAttente } from "./ItemAttente";

export const TacheEnAttente = () => {
  return (
    <div className="justify-start items-stretch bg-zinc-50 flex flex-col w-full px-4 py-7 rounded-3xl max-md:max-w-full max-md:mt-10">
      <div className="flex w-full items-center justify-between max-md:max-w-full max-md:flex-wrap">
        <div className="flex items-stretch gap-3.5 my-auto">
          <img src="/icons/load.svg" alt="" />
          <span className="text-black text-2xl font-bold self-center grow whitespace-nowrap my-auto">
            En attente
          </span>
        </div>
        <div className=" bg-black self-stretch flex justify-center items-center w-9 h-9 rounded-full">
          <span className="text-white text-xl font-bold">1</span>
        </div>
      </div>
      <ItemAttente/>
    </div>
  );
};
