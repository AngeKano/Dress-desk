import React from "react";

export const ItemAttente = () => {
  return (
    <div className="justify-center bg-white mt-7 px-5 py-6 rounded-3xl max-md:max-w-full max-md:pl-5">
      <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
        <div className="flex flex-col items-stretch w-[58%] max-md:w-full max-md:ml-0">
          <div className="flex grow flex-col items-stretch max-md:mt-10">
            <span className="text-black text-2xl font-bold">
              Repassage de vêtement
            </span>
            <span className="text-black text-lg whitespace-nowrap mt-10 max-md:mt-10">
              Nombre de vetement
            </span>
            <span className="text-black text-lg mt-10">Montant</span>
            <div className="flex items-stretch justify-between gap-4 mt-8">
              <span className="text-zinc-600 text-base my-auto">Ange Kano</span>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-stretch w-[42%] ml-5 max-md:w-full max-md:ml-0">
          <div className="flex grow flex-col items-stretch max-md:mt-10">
            <div className="flex flex-col items-stretch pl-14 max-md:pl-5">
              <img
                src="/icons/dotSmall.svg"
                width={25}
                height={10}
                className="self-end"
                alt=""
              />
              <div className="text-black text-xl font-semibold mt-24 self-end max-md:mt-10">
                <span className="text-lg">X5</span>
              </div>
              <span className="text-zinc-600 text-xl font-semibold whitespace-nowrap mt-9">
                500 <span className="text-sm text-zinc-600">FCFA</span>
              </span>
            </div>
            <a href="/TaskAttrib" className="justify-between bg-black flex gap-2.5 mt-8 px-4 py-2 rounded-full items-center">
              <img src="/icons/UsersWit.svg" alt="" />
              <span className="text-white text-lg font-semibold self-stretch grow whitespace-nowrap">
                Attribuer
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
