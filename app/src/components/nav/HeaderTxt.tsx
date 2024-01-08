
export const HeaderTxt = (props: any) => {
  let yourDate = new Date();
  return (
    <div className="self-stretch flex w-full justify-between gap-5 mt-11 pr-5 items-start max-md:max-w-full max-md:flex-wrap max-md:mr-1.5 max-md:mt-10">
      <div className="flex flex-col items-stretch">
        <span className="font-Poppins text-black text-3xl font-semibold">
          {props.title}
        </span>
        <div className="font-Poppins text-gray-500 text-sm font-light whitespace-nowrap ">
          {props.descript}
        </div>
      </div>
      <div className="flex items-center justify-between gap-5 mt-2.5">
        <span className="text-zinc-500 text-lg font-medium my-auto">
          {yourDate.toISOString().split("T")[0]}
        </span>
        <div className="bg-zinc-100 rounded-full p-3">
          <img src="/icons/dash/date.svg" alt="" />
        </div>
      </div>
    </div>
  );
};
