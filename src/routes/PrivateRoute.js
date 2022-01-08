import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { isAuth } from "../redux/auth/auth-selectors";

export default function PrivateRoute({
  children,
  restricted = false,
  redirectTo = "/register",
  ...routeProps
}) {
  const isLoggedIn = useSelector(isAuth);
  return <div>{isLoggedIn ? children : <Navigate to={redirectTo} />};</div>;
}
