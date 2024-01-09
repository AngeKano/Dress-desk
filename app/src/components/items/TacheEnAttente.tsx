
import { ItemAttente } from "./ItemAttente";

export const TacheEnAttente = (props: any) => {
  return (
    <div className="justify-start items-stretch bg-zinc-50 flex flex-col w-full px-4 py-7 rounded-3xl  max-md:mt-10">
      <div className="flex w-full items-center justify-between max-md:max-w-full max-md:flex-wrap">
        
        <div className="flex items-stretch gap-3.5 my-auto">
          <img src="/icons/time.svg" alt="" />
          <span className="text-black text-2xl font-bold self-center grow whitespace-nowrap my-auto">
            En cours
          </span>
        </div>
        <div className=" bg-sky-200 self-stretch flex justify-center items-center w-9 h-9 rounded-full">
          <span className="text-sky-500 text-xl font-bold">
            {props.liste.length - 1}
          </span>
        </div>
      </div>
      {props.liste.map(function (index: any, key: any) {
        return index.detailsCommandes != undefined ? (
          <ItemAttente command={index} />
        ) : null;
      })}
    </div>
  );
};
