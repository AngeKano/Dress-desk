import React, { useContext } from "react";
import { ButtonNav } from "./ButtonNav";
import { AuthContext, useAuth } from "../../Context/AuthContext";

export const Nav = (props: any) => {
  const { userEmail, setAuthUser, userPassword, setPwd, setAccessToken } =
    useContext(AuthContext);
  return (
    <div className="flex flex-col items-stretch w-[18%] max-md:w-full max-md:ml-0">
      <div className="bg-white flex w-full grow flex-col pl-4 pr-3 py-11">
        <div className="self-center flex items-stretch gap-1.5">
          <img src="/Backimage/slug.png" width={28.11} height={26.44} alt="" />
          <span className="font-Monument text-black text-2xl self-center grow whitespace-nowrap my-auto">
            DRESS
          </span>
        </div>
        <div className="bg-stone-300 self-stretch shrink-0 h-px mt-7 max-md:mt-5" />
        <div className="flex flex-col justify-between h-screen">
          <div className="my-5">
            <ButtonNav
              title="Dashboard"
              href="/Dashboard"
              active={props.Lien == "Dashboard" ? true : false}
              icon={
                props.Lien == "Dashboard"
                  ? "/icons/dashboard.svg"
                  : "/icons/dashDark.svg  "
              }
            />
            <ButtonNav
              title="Liste Tache"
              href="/TaskList"
              icon={
                props.Lien == "Liste Tache"
                  ? "/icons/listeWit.svg"
                  : "/icons/liste.svg"
              }
              active={props.Lien == "Liste Tache" ? true : false}
            />
            <ButtonNav
              title="Employés"
              href="/EmpList"
              icon={
                props.Lien == "Employés"
                  ? "/icons/UsersWit.svg"
                  : "/icons/Users.svg"
              }
              active={props.Lien == "Employés" ? true : false}
            />
            <ButtonNav
              title="Services"
              href="/Services"
              icon="/icons/box.svg"
              active={props.Lien == "Services" ? true : false}
            />
            <ButtonNav
              title="Notifications"
              href="/Notifications"
              icon="/icons/notification.svg"
              active={props.Lien == "Notifications" ? true : false}
            />
          </div>

          <div className="flex flex-col justify-center items-center">
            <img src="/users/7.png" width={70} height={70} alt="" />
            <span className="text-black font-Poppins text-2xl font-light self-center whitespace-nowrap ">
              {sessionStorage.getItem("userEmail")}
            </span>
            <span className="text-black font-Poppins text-2xl font-semibold self-center whitespace-nowrap ">
              Réceptionniste
            </span>
          </div>

          <div>
            <ButtonNav
              title="Paramètre"
              href="/Paramètre"
              icon="/icons/parametre.svg"
            />
            <ButtonNav
              title="Deconnexion"
              href="/Login"
              icon="/icons/deconnexion.svg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
