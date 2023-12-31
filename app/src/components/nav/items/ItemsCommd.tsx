import React from "react";
import { Status } from "../../status/Status";

export const ItemsCommd = (props: any) => {
  return (
    <a href="/DetailCommand"  className="justify-between items-center self-stretch flex gap-2 mt-8 pr-2 max-md:max-w-full">
      <div className="rounded-lg bg-zinc-200 w-10 h-10 flex items-center justify-center">
        <img src="/icons/dash/dress.svg" alt="" />
      </div>
      <span className="text-black text-lg font-medium">{props.service}</span>
      <img src="/users/2.png" width={70} height={70} alt="" />
      <span className="text-black text-lg font-medium self-center ">
        {props.client}
      </span>
      <span className="text-black text-lg font-semibold self-center">
        {props.nbrHbt}
      </span>
      <Status type="En cours" />
      <span className="text-zinc-600 text-lg font-semibold justify-center items-stretch bg-neutral-200 self-center px-2.5 py-px rounded-full">
        {props.date}
      </span>
      <img src="/icons/dash/dots.svg" alt="" />
    </a>
  );
};
