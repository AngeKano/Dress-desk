import { useContext } from "react";
import { Status } from "../../status/Status";
import { AuthContext } from "../../../Context/AuthContext";

export const ItemsEmp = (props: any) => {
  const { employe, setEmploye } = useContext(AuthContext);
  return (
    <div className="justify-between items-center self-stretch flex w-full gap-5 mt-10 max-md:max-w-full max-md:flex-wrap">
      <img src="/Users/6.png" width={70} height={70} alt="" />
      <span className="text-black text-lg font-medium self-center my-auto">
        {props.Employe.userNames}
      </span>

      <span className="text-black text-lg font-semibold self-center my-auto">
        {props.Employe.tacheEmployes.length}
      </span>
      <Status type={props.Employe.employeStatut} />
      {employe == props.Employe.userNames ? (
        <button
          onClick={
            () => setEmploye(props.Employe.userNames)
          }
          className="justify-center bg-black self-center flex gap-2.5 my-auto pl-7 pr-3 py-3.5 rounded-full items-center max-md:pl-5"
        >
          <img src="/icons/select.svg" alt="" />
          <span className="text-white text-xl font-semibold self-stretch grow whitespace-nowrap">
            Sélectionner
          </span>
        </button>
      ) : (
        <button
          onClick={
            () => {
              setEmploye(props.Employe.userNames);
            }
          }
          className="justify-center self-center flex gap-2.5 my-auto pl-7 pr-3 py-3.5 rounded-3xl items-center max-md:pl-5"
        >
          <img src="/icons/PlusDark.svg" alt="" />
          <span className="text-black text-xl font-semibold self-stretch grow whitespace-nowrap">
            Sélectionner
          </span>
        </button>
      )}
    </div>
  );
};
