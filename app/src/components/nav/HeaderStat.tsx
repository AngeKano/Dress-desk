
import { Stats } from "./items/Stats";

export const HeaderStat = () => {
  return (
    <>
      <div className="bg-stone-300 self-stretch w-full shrink-0 h-px mt-7 max-md:mr-1.5" />
      <div className="self-center flex w-[859px] max-w-full items-stretch justify-between gap-5 mt-9 max-md:flex-wrap">
        <Stats
          title="Terminer"
          icon="/icons/dash/ok.svg"
          color="text-green-500"
          nbTotal={18}
        />
        <Stats
          title="En cours"
          icon="/icons/dash/Time.svg"
          color="text-sky-500"
          nbTotal={10}
        />
        <Stats
          title="Disponible"
          icon="/icons/dash/Users.svg"
          color="text-purple-500"
          nbTotal={3}
        />
        <Stats
          title="Livraison"
          icon="/icons/dash/box.svg"
          color="text-zinc-500"
          nbTotal={11}
        />
      </div>
      <div className="bg-stone-300 self-stretch w-full shrink-0 h-px mt-9 max-md:mr-1.5" />
    </>
  );
};
