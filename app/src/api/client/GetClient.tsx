import axios from "../axios";

export const GetClient = (props: any) => {
  const GET_ALL_URL = "/client/voir-informations";
  axios
    .get(GET_ALL_URL, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${sessionStorage.getItem("accessToken")}`,
      },
      withCredentials: true,
    })
    .then((res) =>
      res.data.map((index: any) =>
        props.userNumber == index.userNumber
          ? props.setClientName(index.userNom)
          : props.setClientName("Null")
      )
    )
    .then(() => console.log(props.userNumber))
    .catch((err) => {
      console.log(err);
      return err;
    });
};
