import { useContext } from "react";
import { Stats } from "./items/Stats";
import { AuthContext } from "../../Context/AuthContext";

export const HeaderStat = (props: any) => {
  const {
    nbrCommndeTerminé,
    setNbrCommndeTerminé,
    nbrCommndeCours,
    setNbrCommndeCours,
    nbrDispo,
  } = useContext(AuthContext);
  return (
    <>
      <div className="bg-stone-300 self-stretch w-full shrink-0 h-px mt-7 max-md:mr-1.5" />
      <div className="self-center flex w-[859px] max-w-full items-stretch justify-between gap-5 mt-9 max-md:flex-wrap">
        <Stats
          title="Terminer"
          icon="/icons/dash/ok.svg"
          color="text-green-500"
          nbTotal={nbrCommndeTerminé}
        />
        <Stats
          title="En cours"
          icon="/icons/dash/Time.svg"
          color="text-sky-500"
          nbTotal={nbrCommndeCours}
        />
        <Stats
          title="Disponible"
          icon="/icons/dash/Users.svg"
          color="text-purple-500"
          nbTotal={nbrDispo}
        />
        <Stats
          title="Livraison"
          icon="/icons/dash/box.svg"
          color="text-zinc-500"
          nbTotal={0}
        />
      </div>
      <div className="bg-stone-300 self-stretch w-full shrink-0 h-px mt-9 max-md:mr-1.5" />
    </>
  );
};
