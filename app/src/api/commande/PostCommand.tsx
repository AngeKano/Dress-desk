import axios from "../axios";

export const PostCommand = async (props: any) => {
  const userNumber = props.userNumber;
  const POST_URL = "/commande/nouvelle-commande";

  try {
    await axios
      .post(POST_URL, JSON.stringify({ userNumber }), {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${sessionStorage.getItem("accessToken")}`,
        },
        withCredentials: true,
      })
      .catch((err) => {
        return err;
      });
  } catch (err) {
    return err;
  }
  return <div>PostCommand</div>;
};
