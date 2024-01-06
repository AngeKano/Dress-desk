import React from "react";

export const Status = (props: any) => {
  return props.type == "En traitement" ? (
    <div className="flex  flex-col justify-center items-center">
      <div className="bg-sky-500 bg-opacity-20 flex items-stretch justify-between gap-2.5 px-3 py-1 rounded-full">
        <img src="icons/dash/timeBlue.svg" alt="" />
        <div className="text-sky-700 text-lg font-semibold self-center grow  my-auto">
          En cours
        </div>
      </div>
    </div>
  ) : props.type == "En Attente" ? (
    <div className="flex   flex-col justify-center items-center">
      <div className="bg-stone-300 bg-opacity-20 flex items-stretch justify-between gap-2.5 px-3 py-1 rounded-full">
        <img src="icons/dash/Load.svg" alt="" />
        <div className="text-black text-lg font-semibold self-center grow my-auto">
          En Attente
        </div>
      </div>
    </div>
  ) : props.type == "validé" || props.type == "Terminé" ? (
    <div className="flex  flex-col justify-center items-center">
      <div className="bg-green-500 bg-opacity-20 flex items-stretch justify-between gap-2.5 px-3 py-1 rounded-full">
        <img src="icons/dash/valid.svg" alt="" />
        <div className="text-green-600 text-lg font-semibold self-center grow my-auto">
          Validé
        </div>
      </div>
    </div>
  ) : props.type == "Livraison" ? (
    <div className="flex  flex-col justify-center items-center">
      <div className="bg-yellow-500 bg-opacity-20 flex items-stretch justify-between gap-2.5 px-3 py-1 rounded-full">
        <img src="icons/dash/boxYellow.svg" alt="" />
        <div className="text-yellow-500 text-lg font-semibold self-center grow  my-auto">
          Livraison
        </div>
      </div>
    </div>
  ) : props.type == "Disponible" ? (
    <div className="flex  flex-col justify-center items-center">
      <div className="bg-green-500 bg-opacity-20 flex items-stretch justify-between gap-2.5 px-3 py-1 rounded-full">
        <img src="icons/dash/valid.svg" alt="" />
        <div className="text-green-600 text-lg font-semibold self-center grow my-auto">
          Disponible
        </div>
      </div>
    </div>
  ) : null;
};
