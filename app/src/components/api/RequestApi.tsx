import React, { useState } from "react";
import axios from "../../api/axios";
import { useNavigate } from "react-router-dom";

export const RequestApi = () => {
  return <div>RequestApi</div>;
};

// Add command and Details

const REGISTER_URL_COMMANDE = "/commande";
const REGISTER_URL_DETAILS_COMMANDE = "/details-commande";
export const _onSubmitAdd = async (props: any) => {
  //Variable use to add command
  const commandeStatut = props.commandeStatut;
  const commandeDateDepot = props.commandeDateDepot;
  const clientNames = props.clientNames;

  //UseSate IdCommand
  let fkCommandeDetailsCommande;

  //Variable use to add details of command
  const detailsCommandeQuantite = props.detailsCommandeQuantite;
  const detailsCommandeNote = props.detailsCommandeNote;
  const articleService = props.articleService;

  try {
    const resCommande = await axios.post(
      REGISTER_URL_COMMANDE,
      JSON.stringify({ commandeStatut, commandeDateDepot, clientNames }),
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${sessionStorage.getItem("accessToken")}`,
        },
        withCredentials: true,
      }
    );
    console.log(
      "Add command succeseful ✅ IdCommand: ",
      resCommande.data.idCommande
    );

    fkCommandeDetailsCommande = resCommande.data.idCommande;
    const resDetailsCommande = await axios.post(
      REGISTER_URL_DETAILS_COMMANDE,
      JSON.stringify({
        detailsCommandeQuantite,
        detailsCommandeNote,
        fkCommandeDetailsCommande,
        articleService,
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

    return resCommande.status;
  } catch (err) {
    console.log("Impossible d'enregistrer une commande 🔴");
    console.log(err);
  }
};
