import axios from "./axios";

export const AdminLogin = async (props: any) => {
  const LOGIN_URL = "/auth/login";
  const userNumber = props.userNumber;
  const userPassword = props.userPassword;
  try {
    const res = await axios.post(
      LOGIN_URL,
      JSON.stringify({ userNumber, userPassword }),
      {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      }
    );
    console.log(res);
    sessionStorage.setItem("userEmail", userNumber);
    sessionStorage.setItem("accessToken", res.data.token);
    return res.status;
  } catch (err) {
    return err;
  }
};
