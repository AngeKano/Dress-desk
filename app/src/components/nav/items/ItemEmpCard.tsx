import { StatusEmp } from "../../status/StatusEmp";

export const ItemEmpCard = (props: any) => {
  return (
    <a
      href="/DetailEmp"
      onClick={() => sessionStorage.setItem("idEmploye", props.idEmploye)}
      className="flex flex-col items-stretch  max-md:w-full max-md:ml-0"
    >
      <div className="bg-zinc-50 flex w-full flex-col items-center px-3 py-6 rounded-3xl">
        <div className="flex gap-3 self-start items-center justify-center">
          <img src="/Users/6.png" width={70} height={70} alt="" />
          <div className="self-stretch flex grow flex-col items-stretch">
            <div className="flex items-stretch justify-between gap-5">
              <div className="flex flex-col items-stretch">
                <div className="text-black text-2xl font-semibold whitespace-nowrap">
                  {props.employeNames}
                </div>
                <div className="text-black text-sm mt-2">
                  {props.employeFonction}
                </div>
              </div>
            </div>
            <div className="text-zinc-600 text-sm font-light mt-2">
              {props.employeEmail}
            </div>
            <div className="text-zinc-600 text-sm font-light mt-2">
              Abidjan,Yopougon
            </div>
          </div>
        </div>
        <div className="self-stretch flex items-stretch justify-between gap-2.5 mt-6">
          <div className="flex grow  flex-col justify-center items-center">
            <span className="text-black text-sm font-light bg-gray-200 justify-center items-center p-3 rounded-full">
              {props.employeSalaire} FCFA
            </span>
          </div>
          <div className="flex grow flex-col justify-center items-stretch self-start">
            <StatusEmp employeStatut={props.employeStatut} />
          </div>
        </div>
      </div>
    </a>
  );
};
