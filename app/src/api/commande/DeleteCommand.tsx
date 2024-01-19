import axios from "../axios";

export const DeleteCommand = async (props: any) => {
  const DELETE_URL = `/commande/supprimer-commande/${sessionStorage.getItem(
    "idCommand"
  )}`;

  try {
    await axios
      .delete(DELETE_URL, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${sessionStorage.getItem("accessToken")}`,
        },
        withCredentials: true,
      })
      .then(() => props.navigate("/Dashboard"))
      .catch((err) => {
        return err;
      });
  } catch (err) {
    return err;
  }
};
