import React, { useState } from "react";
import { Layout } from "../components/Layout";

export const Work: React.FC = () => {
  const electron = (window as any).electron;
const [Nom,setNom] = useState()

  return (
    <div className="bg-white">
    
    <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
      <div className="flex flex-col items-stretch w-[41%] max-md:w-full max-md:ml-0">
        <div className="flex-col overflow-hidden relative flex grow justify-center items-center px-16 py-12 max-md:max-w-full max-md:mt-10 max-md:px-5">
          <img loading="lazy" srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/541aa97b6a769c01052dd7225d786c538174c8ff21391cd4353e342ea902c360?apiKey=43028ea351e04a60a58ebccc886c8606&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/541aa97b6a769c01052dd7225d786c538174c8ff21391cd4353e342ea902c360?apiKey=43028ea351e04a60a58ebccc886c8606&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/541aa97b6a769c01052dd7225d786c538174c8ff21391cd4353e342ea902c360?apiKey=43028ea351e04a60a58ebccc886c8606&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/541aa97b6a769c01052dd7225d786c538174c8ff21391cd4353e342ea902c360?apiKey=43028ea351e04a60a58ebccc886c8606&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/541aa97b6a769c01052dd7225d786c538174c8ff21391cd4353e342ea902c360?apiKey=43028ea351e04a60a58ebccc886c8606&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/541aa97b6a769c01052dd7225d786c538174c8ff21391cd4353e342ea902c360?apiKey=43028ea351e04a60a58ebccc886c8606&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/541aa97b6a769c01052dd7225d786c538174c8ff21391cd4353e342ea902c360?apiKey=43028ea351e04a60a58ebccc886c8606&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/541aa97b6a769c01052dd7225d786c538174c8ff21391cd4353e342ea902c360?apiKey=43028ea351e04a60a58ebccc886c8606&"className="absolute h-full w-full object-cover object-center inset-0" alt="" />
          <div className="relative justify-center items-stretch bg-white flex gap-3 mt-96 mb-80 px-0.5 max-md:my-10">
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/08c649d63072ec6b50832a7f27cd554c3c785c105d50fc35496e26bb8da7ac26?apiKey=43028ea351e04a60a58ebccc886c8606&" className="aspect-[1.06] object-contain object-center w-[52px] overflow-hidden shrink-0 max-w-full" alt="" />
            <div className="text-black text-4xl self-center grow whitespace-nowrap my-auto">DRESS</div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-stretch w-[59%] ml-5 max-md:w-full max-md:ml-0">
        <div className="flex flex-col my-auto px-5 max-md:max-w-full max-md:mt-10">
          <div className="text-black text-3xl font-extrabold self-stretch max-md:max-w-full">Connexion a votre espace</div>
          <div className="text-zinc-600 text-base font-light self-stretch mt-4 max-md:max-w-full">Entrez vos identifiants et mot de passe de l’entreprise pour accéder à votre espace de travail. Veillez à ceux que vos informations ne soit pas partagé</div>
          <div className="text-black text-2xl font-medium self-stretch mt-16 max-md:max-w-full max-md:mt-10">Identifiant</div>
          <div className="text-zinc-600 text-sm font-light self-stretch mt-3.5 max-md:max-w-full">votre identifiant est unique</div>
          <div className="text-neutral-500 text-lg bg-zinc-100 self-stretch justify-center mt-5 pl-8 pr-16 py-5 rounded-[100px] items-start max-md:max-w-full max-md:px-5">
            <input type="text" id="username" aria-label="Identifiant" role="textbox" className="input-style" />
            <label htmlFor="username">Ex: KANG@2023147</label>
          </div>
          <div className="text-black text-2xl font-medium self-stretch mt-10 max-md:max-w-full">Mot de passe</div>
          <div className="text-zinc-600 text-sm font-light self-stretch mt-2 max-md:max-w-full">Gardez le bien en tete celui ci</div>
          <div className="text-neutral-500 text-lg bg-zinc-100 self-stretch justify-center mt-6 pl-8 pr-16 py-5 rounded-[100px] items-start max-md:max-w-full max-md:px-5">
            <input type="password" id="password" aria-label="Mot de passe" role="textbox" className="input-style" />
            <label htmlFor="password">Au moins 8 caractère aplha-numerique</label>
          </div>
          <button type="button" className="text-white text-2xl font-semibold bg-black self-stretch justify-center items-center mt-14 px-16 py-6 rounded-[100px] max-md:max-w-full max-md:mt-10 max-md:px-5">Employés</button>
          <div className="text-black text-center text-lg font-light underline self-center max-w-[401px] mt-7 max-md:max-w-full">
            Vous avez oubliez vos informations de connexion,{" "}
            <a href="#" className="font-semibold underline" aria-label="le signaler à la direction" role="link">le signaler à la direction</a>
          </div>
        </div>
      </div>
    </div>
  </div>

    // <div className="bg-red-600">
    //   Page de work <br />
    //   th homdir @ {electron.homeDir()} <br />
    //   The Os is arch {electron.arch()} <br />
    //   The Os is arch {electron.osVersion()} <br />
    // </div>
  );
};
