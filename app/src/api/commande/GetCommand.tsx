import axios from "../axios";

export const GetCommand = (props: any) => {
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
    .catch((err) => {
      console.log(err);
      return err;
    });
};

export const GetCommandSpc = (props: any) => {
  // GET SPECIFIES COMMAND

  const GET_SPC_URL = `/commande/voir-commande/${props.idCommand}`;

  axios
    .get(GET_SPC_URL, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${sessionStorage.getItem("accessToken")}`,
      },
      withCredentials: true,
    })
    .then((res) => props.setCommandSpc(res.data))
    .then(() => props.navigate("/DetailCommand"))
    .catch((err) => {
      console.log(err);
      return err;
    });
};
