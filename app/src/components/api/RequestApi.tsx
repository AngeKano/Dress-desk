
import axios from "../../api/axios";

export const RequestApi = () => {
  return <div>RequestApi</div>;
};

// Add command and Details

const REGISTER_URL_COMMANDE = "/commande";
const REGISTER_URL_DETAILS_COMMANDE = "/details-commande";
const REGISTER_URL_FACTURE = "/facture";
export const _onSubmitAddCommand = async (props: any) => {
  //Variable use to add command
  const commandeStatut = props.commandeStatut;
  const commandeDateDepot = props.commandeDateDepot;
  const clientEmail = props.clientEmail;

  //UseSate   NumeroCommand
  const clientName = props.clientName;
  const nbrCommand = props.nbrCommand;

  // let numeroCommande = "com-" + clientName + "-" + nbrCommand;
  //Variable use to add details of command
  const detailsCommandeQuantite = props.detailsCommandeQuantite;
  const detailsCommandeNote = props.detailsCommandeNote;
  const articleservice = props.articleservice;
  let numeroCommande;

  // Start facture
  let commande;

  try {
    const resCommande = await axios.post(
      REGISTER_URL_COMMANDE,
      JSON.stringify({ commandeStatut, commandeDateDepot, clientEmail }),
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${sessionStorage.getItem("accessToken")}`,
        },
        withCredentials: true,
      }
    );
    console.log("Add command succeseful ✅ IdCommand: ", resCommande.data);

    numeroCommande = resCommande.data.numeroCommande;
    commande = resCommande.data.numeroCommande;
    console.log(
      "Contenue Variable : --",
      detailsCommandeQuantite,
      detailsCommandeNote,
      numeroCommande,
      articleservice,

      "Type de variable : --",
      typeof detailsCommandeQuantite,
      typeof detailsCommandeNote,
      typeof numeroCommande,
      typeof articleservice
    );
    const resDetailsCommande = await axios.post(
      REGISTER_URL_DETAILS_COMMANDE,
      JSON.stringify({
        detailsCommandeQuantite,
        detailsCommandeNote,
        numeroCommande,
        articleservice,
      }),
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${sessionStorage.getItem("accessToken")}`,
        },
        withCredentials: true,
      }
    );
    console.log(
      "Add details of command succeseful ✅ Content Details: ",
      resDetailsCommande
    );
    const resFacture = await axios.post(
      REGISTER_URL_FACTURE,
      JSON.stringify({
        commande,
      }),
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${sessionStorage.getItem("accessToken")}`,
        },
        withCredentials: true,
      }
    );
    console.log(
      "Add facture of command succeseful ✅ Content Facture: ",
      resFacture
    );
    return resCommande.status;
  } catch (err) {
    console.log("Impossible d'enregistrer une commande 🔴");
    console.log(err);
  }
};

///Add Employe

export const _onSubmitAddEmp = async (props: any) => {
  const REGISTER_URL_EMPLOYES = "/auth/register-employe";
  //Variable use to add Employe
  const userEmail = props.userEmail;
  const userPassword = props.userPassword;
  const userNames = props.userNames;
  const employeFonction = props.employeFonction;
  const employeDateEmbauche = props.employeDateEmbauche;
  const employeSalaire = props.employeSalaire;
  const employeStatut = props.employeStatut;
  try {
    const resEmploye = await axios.post(
      REGISTER_URL_EMPLOYES,
      JSON.stringify({
        userEmail,
        userPassword,
        userNames,
        employeFonction,
        employeDateEmbauche,
        employeSalaire,
        employeStatut,
      }),
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${sessionStorage.getItem("accessToken")}`,
        },
        withCredentials: true,
      }
    );
    console.log("Add command succeseful ✅ IdCommand: ", resEmploye.data);
    return resEmploye.status;
  } catch (err) {
    console.log("Impossible d'enregistrer une commande 🔴");
    console.log(err);
  }
};

///Attribution

export const _onAttribution = async (props: any) => {
  let REGISTER_URL_ATTRIBUTION = "/tache-employe";
  let REGISTER_URL_STATUS_COMMAND = `/commande/${sessionStorage.getItem(
    "idCommandTache"
  )}`;
  // TACHE
  const tacheEmployeDescription = props.tacheEmployeDescription;
  const tacheEmployeStatut = props.tacheEmployeStatut;
  const commande = props.commande;
  const employe = props.employe;

  // COMMAND

  const commandeStatut = "En Attente";
  const commandeDateDepot = props.command.commandeDateDepot;
  const clientEmail = props.command.client.userEmail;

  console.log(props);
  try {
    const resAttrib = await axios.post(
      REGISTER_URL_ATTRIBUTION,
      JSON.stringify({
        tacheEmployeDescription,
        tacheEmployeStatut,
        commande,
        employe,
      }),
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${sessionStorage.getItem("accessToken")}`,
        },
        withCredentials: true,
      }
    );
    console.log("Add command Attribution ✅: ", resAttrib.data);
    ///COMMAND
    const resStatusCommand = await axios.put(
      REGISTER_URL_STATUS_COMMAND,
      JSON.stringify({
        commandeStatut,
        commandeDateDepot,
        clientEmail,
      }),
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${sessionStorage.getItem("accessToken")}`,
        },
        withCredentials: true,
      }
    );
    console.log("Add command Attribution ✅: ", resStatusCommand.data);
    // EMPLOYE
    return resAttrib.status;
  } catch (err) {
    console.log("Impossible d'enregistrer une commande 🔴");
    console.log(err);
  }
};

// COMMAND
export const _onSubTerminer = async (props: any) => {
  let REGISTER_URL_TACHE_TERMINER = `/tache-employe/${props.idTacheEmploye}`;
  let REGISTER_URL_STATUS_COMMAND = `/commande/${props.idCommande}`;
  const commandeStatut = "Terminé";
  const commandeDateDepot = props.commandeDateDepot;
  const clientEmail = props.userEmail;
  console.log(props);
  try {
    const resStatusCommand = await axios.put(
      REGISTER_URL_STATUS_COMMAND,
      JSON.stringify({
        commandeStatut,
        commandeDateDepot,
        clientEmail,
      }),
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${sessionStorage.getItem("accessToken")}`,
        },
        withCredentials: true,
      }
    );
    console.log("Add command change to validé ✅: ", resStatusCommand.data);
    // EMPLOYE
    const resAttrib = await axios.delete(REGISTER_URL_TACHE_TERMINER, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${sessionStorage.getItem("accessToken")}`,
      },
      withCredentials: true,
    });
    console.log("Add command Attribution ✅: ", resAttrib.data);
    // navigate("/TaskList");
    return resAttrib.status;
  } catch (err) {
    console.log("Impossible d'enregistrer une commande 🔴");
    console.log(err);
  }
};

export default function () {
  return <p>Dadd</p>;
}
