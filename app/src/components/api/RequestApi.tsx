import React, { useState } from "react";
import axios from "../../api/axios";
import { useNavigate } from "react-router-dom";

export const RequestApi = () => {
  return <div>RequestApi</div>;
};

// Add command and Details

const REGISTER_URL_COMMANDE = "/commande";
const REGISTER_URL_DETAILS_COMMANDE = "/details-commande";
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
    return resCommande.status;
  } catch (err) {
    console.log("Impossible d'enregistrer une commande 🔴");
    console.log(err);
  }
};

///Add Employe

export const _onSubmitAddEmp = async (props: any) => {
  const REGISTER_URL_EMPLOYES = "/employe";

  //Variable use to add Employe
  const employeNames = props.employeNames;
  const employeFonction = props.employeFonction;
  const employeSalaire = props.employeSalaire;

  const employeDateEmbauche = props.employeDateEmbauche;
  const employeStatut = props.employeStatut;

  try {
    const resEmploye = await axios.post(
      REGISTER_URL_EMPLOYES,
      JSON.stringify({
        employeNames,
        employeFonction,
        employeSalaire,
        employeDateEmbauche,
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
