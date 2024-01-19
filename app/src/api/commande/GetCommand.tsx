import { ListFormat } from "typescript";
import axios from "../axios";

export const GetCommand =  (props: any) => {
  // GET ALL COMMAND
  const GET_ALL_URL = "/commande/voir-commande";

   axios
    .get(GET_ALL_URL, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${sessionStorage.getItem("accessToken")}`,
      },
      withCredentials: true,
    })
    .then((res) => props.setListeCommand(res.data))
    // .then(() => console.log(props.listCommand))
    // .then(
    //   () => (
    //     props.setNbrCommndeTerminé(0),
    //     props.setNbrCommndeCours(0),
    //     props.listCommand.map((index: any) =>
    //       index.commandeStatut == "En traitement"
    //         ? props.setNbrCommndeCours(
    //             (nbrCommndeCours: any) => nbrCommndeCours + 1
    //           )
    //         : props.setNbrCommndeTerminé(
    //             (nbrCommndeTerminé: any) => nbrCommndeTerminé + 1
    //           )
    //     )
    //   )
    // )
    .catch((err) => {
      console.log(err);
      return err;
    });
};
