import React from "react";
import { ButtonNav } from "./ButtonNav";
import { useAuth } from "../../Context/AuthContext";

export const Nav = () => {
    const { userEmail, setAuthUser, userPassword, setPwd, setAccessToken } =
    useAuth();
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
        <div className="my-5">
          <ButtonNav
            title="Dashboard"
            href="/Dashboard"
            icon="/icons/dashboard.svg"
            active
          />
          <ButtonNav
            title="Liste Tache"
            href="/TaskList"
            icon="/icons/liste.svg"
          />
          <ButtonNav title="Employés" href="/EmpList" icon="/icons/Users.svg" />
          <ButtonNav title="Services" href="/Services" icon="/icons/box.svg" />
          <ButtonNav
            title="Notifications"
            href="/Notifications"
            icon="/icons/notification.svg"
          />
        </div>

        <div className="flex flex-col justify-center items-center">
          <img src="/users/7.png" width={70} height={70} alt="" />
          <span className="text-black font-Poppins text-2xl font-light self-center whitespace-nowrap ">
            {userEmail}
          </span>
          <span className="text-black font-Poppins text-2xl font-semibold self-center whitespace-nowrap ">
            Réceptionniste
          </span>
        </div>

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
  );
};
