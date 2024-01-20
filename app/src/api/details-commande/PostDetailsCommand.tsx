import axios from "../axios";

const PostDetailsCommand = async (props: any) => {
  const POST_URL = "/details-commande/nouveau-details-commande";
  const detailsCommandeQuantite = props.detailsCommandeQuantite;
  const detailsCommandeNote = props.detailsCommandeNote;
  const numeroCommande = props.numeroCommande;
  const articleservice = props.articleservice;

  try { 
    await axios
      .post(
        POST_URL,
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
      )
      .catch((err) => {
        return err;
      });
  } catch (err) {
    return err;
  }
};

export default PostDetailsCommand;
