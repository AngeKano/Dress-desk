import React from "react";
import { Status } from "../../status/Status";

export const ItemsEmp = () => {
  return (
    <div className="justify-between items-center self-stretch flex w-full gap-5 mt-10 max-md:max-w-full max-md:flex-wrap">
      <img src="/Users/1.png" width={70} height={70} alt="" />
      <span className="text-black text-lg font-medium self-center my-auto">
        Ange Kano
      </span>

      <span className="text-black text-lg font-semibold self-center my-auto">
        5
      </span>
      <Status type="Disponible" />
      <button className="justify-center self-center flex gap-2.5 my-auto pl-7 pr-3 py-3.5 rounded-3xl items-center max-md:pl-5">
        <img src="/icons/PlusDark.svg" alt="" />
        <span className="text-black text-xl font-semibold self-stretch grow whitespace-nowrap">
          Sélectionner
        </span>
      </button>
    </div>
  );
};
