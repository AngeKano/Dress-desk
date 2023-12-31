import React from "react";

export const HeaderNav = () => {
  return (
    <div className="flex justify-between gap-5 mr-7 self-end items-start max-md:max-w-full max-md:flex-wrap max-md:mr-2.5">
      <input
        placeholder="Recherche..."
        className="font-Poppins text-neutral-500 text-lg whitespace-nowrap border grow justify-center items-stretch pl-6 py-2 rounded-full border-solid border-zinc-300 max-md:pl-5 max-md:pr-6"
      />
      <div className="justify-between items-stretch bg-black self-stretch flex gap-2.5 px-8 py-2 rounded-full max-md:px-5">
        <img src="/Icons/info.svg" alt="" />
        <span  className="font-Poppins text-white text-xl font-semibold grow whitespace-nowrap self-start">
          Assistance
        </span>
      </div>
    </div>
  );
};
