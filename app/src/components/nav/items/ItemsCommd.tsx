import React from "react";
import { Status } from "../../status/Status";

export const ItemsCommd = (props: any) => {
  return (
    <a
      key={props.key}
      href="/DetailCommand"
      onClick={() => sessionStorage.setItem("idCommande", props.idCommande)}
      className="justify-between items-center self-stretch flex gap-2 mt-8 pr-2 max-md:max-w-full"
    >
      <div className="rounded-lg bg-zinc-200 w-10 h-10 flex items-center justify-center">
        {props.idCommande}
      </div>
      <span className="text-black text-lg font-medium">
        {props.numeroCommande}
      </span>
      <img src={`/users/3.png`} width={70} height={70} alt="" />
      <span className="text-black text-lg font-medium self-center ">
        {/* {props.client} */}
      </span>
      <span className="text-black text-lg font-semibold self-center">
        {props.detailsCommandes.lenght != 0
          ? props.detailsCommandes.map((index: any, key: any) => (
              <span>{key < 1 ? index.detailsCommandeQuantite : null}</span>
            ))
          : "null"}
      </span>
      <Status type={props.commandeStatut} />
      <span className="text-zinc-600 text-lg font-semibold justify-center items-stretch bg-neutral-200 self-center px-2.5 py-px rounded-full">
        {props.commandeDateDepot[0] +
          "-" +
          props.commandeDateDepot[1] +
          "-" +
          props.commandeDateDepot[2]}
      </span>
      <img src="/icons/dash/dots.svg" alt="" />
    </a>
  );
};
