import axios from "../axios";

export const GetArticleService = (props: any) => {
  const GET_ALL_URL = "/article-service/voir-articleservice";

  axios
    .get(GET_ALL_URL, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${sessionStorage.getItem("accessToken")}`,
      },
      withCredentials: true,
    })
    .then((res) => props.setListeArticService(res.data))
    .catch((err) => {
      return err;
    });
};
