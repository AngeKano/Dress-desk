import { Status } from "../../status/Status";

export const ItemsCommd = (props: any) => {
  console.log(props.command);
  return (
    <a
      key={props.key}
      href="/DetailCommand"
      onClick={() => props.setIdCommandSpc(props.command.idCommande)}
      className="justify-between items-center self-stretch flex gap-2 mt-8 pr-2 max-md:max-w-full"
    >
      <div className="rounded-lg bg-zinc-200 w-10 h-10 flex items-center justify-center">
        {props.command.idCommande}
      </div>
      <span className="text-black text-lg font-medium">
        {props.command.numeroCommande}
      </span>
      <img src={`/users/2.png`} width={70} height={70} alt="" />
      <span className="text-black text-lg font-medium self-center ">
        {props.command.client.userNom}
      </span>
      <span className="text-black text-lg font-semibold self-center">
        {props.command.detailsCommandes.length != 0
          ? props.command.detailsCommandes.map((index: any, key: any) => (
              <span>{key < 1 ? index.detailsCommandeQuantite : null}</span>
            ))
          : "null"}
      </span>
      <Status type={props.command.commandeStatut} />
      <span className="text-zinc-600 text-lg font-semibold justify-center items-stretch bg-neutral-200 self-center px-2.5 py-px rounded-full">
        {props.command.commandeDateDepot[0] +
          "-" +
          props.command.commandeDateDepot[1] +
          "-" +
          props.command.commandeDateDepot[2]}
      </span>
      <img src="/icons/dash/dots.svg" alt="" />
    </a>
  );
};
