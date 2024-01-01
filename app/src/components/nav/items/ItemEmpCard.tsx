import React from "react";

export const ItemEmpCard = () => {
  return (
    <a href="/DetailEmp" className="flex flex-col items-stretch  max-md:w-full max-md:ml-0">
      <div className="bg-zinc-50 flex w-full flex-col items-center px-3 py-6 rounded-3xl">
        <div className="flex gap-3 self-start items-center justify-center">
          <img src="/Users/6.png" width={70} height={70} alt="" />
          <div className="self-stretch flex grow flex-col items-stretch">
            <div className="flex items-stretch justify-between gap-5">
              <div className="flex flex-col items-stretch">
                <div className="text-black text-2xl font-semibold whitespace-nowrap">
                  Ange kano
                </div>
                <div className="text-black text-sm mt-2">Livreur</div>
              </div>
            </div>
            <div className="text-zinc-600 text-sm font-light mt-2">
              (+225)0151831681
            </div>
            <div className="text-zinc-600 text-sm font-light mt-2">
              Abidjan,Yopougon
            </div>
          </div>
        </div>
        <div className="self-stretch flex items-stretch justify-between gap-2.5 mt-6">
          <div className="flex grow  flex-col justify-center items-center">
            <span className="text-black text-sm font-light bg-gray-200 justify-center items-center p-3 rounded-full">
              EDGTSPQDRESS151223000
            </span>
          </div>
          <div className="flex grow flex-col justify-center items-stretch self-start">
            <div className="bg-fuchsia-800 bg-opacity-20 flex justify-center p-2 rounded-full items-center max-md:pr-5">
              <span className="text-fuchsia-800 text-xl font-semibold">
                Occupé
              </span>
            </div>
          </div>
        </div>
      </div>
    </a>
  );
};
