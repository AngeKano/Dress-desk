import{ useContext } from "react";
import Auth from "../Context/Auth";

const AuthenticatedRoute = ({ path, component }) => {
  const { isAuthenticated } = useContext(Auth);
  return isAuthenticated ? (
    <Route exact path={path} component={component} />
  ) : (
    <Redirect to="/Login" />
  );
};

export default AuthenticatedRoute;
