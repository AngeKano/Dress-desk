import { useContext, useEffect, useState } from "react";
import { Nav } from "../../components/nav/Nav";
import { HeaderNav } from "../../components/nav/HeaderNav";
import { HeaderTxt } from "../../components/nav/HeaderTxt";
import { ItemsEmp } from "../../components/nav/items/ItemsEmp";
import axios from "../../api/axios";
import { ItemCmdTache } from "../../components/nav/items/ItemCmdTache";
import { _onAttribution } from "../../components/api/RequestApi";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthContext";

export const TaskAttrib = () => {
  const { employe, setEmploye } = useContext(AuthContext);

  const [command, setCommand] = useState({
    idCommande: 28,
    commandeStatut: "Null",
    commandeDateDepot: [2023, 12, 31],
    numeroCommande: "Null",
    detailsCommandes: [
      {
        idDetailsCommande: 5,
        detailsCommandeQuantite: 5,
        detailsCommandeNote: "qsqs sdsd",
        prixTotal: 750.0,
      },
    ],
    paiements: [],
    client: {
      idUser: 52,
      userPassword:
        "$2a$10$BPhh6yIBHCaee54uLLrxmuSuvTntoS0a30rIwIOTsP1EmElIjpbJK",
      userEmail: "chrishine@example.com",
      userNames: "chrishine",
      statutConnexion: "déconnecté",
      dateInscription: [2024, 1, 3],
      role: "CLIENT",
      clientAdresse: "Daloa",
      clientTelephone: "+2250768790582",
      commandes: [],
    },
  });
  const navigate = useNavigate();

  const [tacheEmployeDescription, setTacheEmployeDescription] = useState("NàN");
  const [tacheEmployeStatut, setTacheEmployeStatut] = useState("En Attente");
  const [commande, setCommande] = useState();

  const [listeEmp, setListeEmp] = useState([]);
  let REGISTER_URL_TACHE_LISTE = `/commande/${sessionStorage.getItem(
    "idCommandTache"
  )}`;
  let REGISTER_URL_LISTE_EMP = "/employe";
  useEffect(() => {
    axios
      .get(REGISTER_URL_TACHE_LISTE, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${sessionStorage.getItem("accessToken")}`,
        },
        withCredentials: true,
      })
      .then((res) => {
        setCommand(res.data);
        setCommande(res.data.numeroCommande);
      })
      // .then(() => console.log(command))
      .catch((e) => console.log(e));
  }, []);
  //Employes
  useEffect(() => {
    axios
      .get(REGISTER_URL_LISTE_EMP, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${sessionStorage.getItem("accessToken")}`,
        },
        withCredentials: true,
      })
      .then((res) => setListeEmp(res.data))
      // .then(() => console.log(listeEmp))
      .catch((e) => console.log(e));
  }, []);
  //submit

  const _onSubmit = async () => {
    try {
      const res = await _onAttribution({
        // Api Employes
        tacheEmployeDescription: tacheEmployeDescription,
        tacheEmployeStatut: tacheEmployeStatut,
        commande: commande,
        employe: employe,

        //Command

        command: command,
      });
      navigate("/TaskList");
    } catch (Err) {
      console.log(Err);
    }
  };
  return (
    <div className="bg-slate-300">
      {sessionStorage.getItem("IdEmployeTache")}
      <div className=" flex max-md:flex-col max-md:items-stretch max-md:gap-0">
        <Nav Lien="Liste Tache" />
        <div className="flex flex-col items-stretch w-[82%] max-md:w-full max-md:ml-0">
          <div className="bg-white flex grow flex-col w-full py-10 border-l-stone-300 border-l border-solid items-end max-md:max-w-full">
            <HeaderNav />
            <div className="self-stretch flex flex-col mt-10 pl-14 pr-20 max-md:max-w-full max-md:px-5">
              <HeaderTxt
                title="Liste des taches"
                descript="Liste total des commandes de la journée"
              />
              <div className="flex gap-2.5 mt-6 self-start items-start">
                <span className="text-zinc-600 text-xs font-[275] self-stretch grow whitespace-nowrap">
                  Liste tache
                </span>

                <span className="text-zinc-600 text-xs font-[275] self-stretch grow whitespace-nowrap">
                  Attribution de tache
                </span>
              </div>
              <span className="text-black text-2xl font-semibold self-stretch mt-10 max-md:max-w-full max-md:mt-10">
                Tache sélectionnée
              </span>

              <ItemCmdTache
                key={command.idCommande}
                idCommande={command.idCommande}
                numeroCommande={command.numeroCommande}
                detailsCommandes={command.detailsCommandes}
                commandeStatut={command.commandeStatut}
                commandeDateDepot={command.commandeDateDepot}
                userClient={command.client.userNames}
              />

              <span className="text-black text-2xl font-semibold self-stretch mt-16 max-md:max-w-full max-md:mt-10">
                Employé disponible
              </span>
              {listeEmp.map(function (index: any, key: any) {
                return index.employeStatut == "Libre" ? (
                  <ItemsEmp Employe={index} />
                ) : null;
              })}

              <div className="flex items-center justify-between gap-5 mr-4 mt-28 self-end max-md:mr-2.5 max-md:mt-10">
                <a
                  href="/TaskList"
                  className="text-black text-xl font-semibold my-auto"
                >
                  <span>Annuler</span>
                </a>
                <button
                  onClick={() => _onSubmit()}
                  className="text-white text-xl font-semibold whitespace-nowrap justify-center items-stretch bg-black self-stretch grow px-5 py-3 rounded-[30px] max-md:pr-5"
                >
                  <span>Enregistrer</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
