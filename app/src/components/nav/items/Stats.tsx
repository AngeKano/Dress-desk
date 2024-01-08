
export const Stats = (props: any) => {
  return (
    <div className="justify-center items-center flex grow basis-[0%] flex-col">
      <div className="justify-between items-center flex gap-5">
        <div className="flex-col overflow-hidden bg-zinc-200 flex aspect-square w-[52px] h-[52px] rounded-full justify-center items-center">
          <img src={props.icon} alt="" />
        </div>
        <div className="self-center flex grow basis-[0%] flex-col items-stretch my-auto">
          <div className="text-black text-xl font-medium whitespace-nowrap">
            {props.title}
          </div>
          <div className="flex items-stretch justify-between mt-4 gap-3">
            <span className={(props.color)+" text-2xl font-semibold grow whitespace-nowrap"}>
              {props.nbTotal}
            </span>
            <span className="text-stone-300 text-xs self-center grow whitespace-nowrap my-auto">
              +2 taches
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
