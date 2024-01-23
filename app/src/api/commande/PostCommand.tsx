import axios from "../axios";
import PostDetailsCommand from "../details-commande/PostDetailsCommand";

export const PostCommand = async (props: any) => {
  const userNumber = props.userNumber;
  const POST_URL = "/commande/nouvelle-commande";

  let numeroCommande = "";

  try {
    await axios
      .post(POST_URL, JSON.stringify({ userNumber }), {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${sessionStorage.getItem("accessToken")}`,
        },
        withCredentials: true,
      })
      .then((res) => (numeroCommande = res.data.numeroCommande))
      .then(() =>
        PostDetailsCommand({
          detailsCommandeQuantite: props.detailsCommandeQuantite,
          detailsCommandeNote: props.detailsCommandeNote,
          numeroCommande: numeroCommande,
          articleservice: props.articleservice,
          navigate:props.navigate
        })
      )
      .catch((err) => {
        return err;
      });
  } catch (err) {
    return err;
  }
};
