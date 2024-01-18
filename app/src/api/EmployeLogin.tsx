import axios from "./axios";

export const EmployeLogin = async (props: any) => {
  const LOGIN_URL = "/auth/login";
  const userNumber = props.userNumber;
  const userPassword = props.userPassword;
  try {
    await axios
      .post(LOGIN_URL, JSON.stringify({ userNumber, userPassword }), {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      })
      .then((res) =>
        res.data.errorMessage == null
          ? (sessionStorage.setItem("accessToken", res.data.token),
            sessionStorage.setItem("userNumber", userNumber),
            sessionStorage.setItem("poste", "Employe"),
            props.navigate("/Dashboard"))
          : (props.setUserNumber(String),
            props.setUserPassword(String),
            props.setError(true))
      )
      .catch((err) => {
        return err;
      });
  } catch (err) {
    return err;
  }
};
