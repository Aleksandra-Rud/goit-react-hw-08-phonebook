import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { isAuth } from "../redux/auth/auth-selectors";

export default function PublicRoute({
  children,
  restricted = false,
  redirectTo = "/",
  ...routeProps
}) {
  const isLoggedIn = useSelector(isAuth);
  const shouldRedirect = isLoggedIn && restricted;
  return <div>{shouldRedirect ? <Navigate to={redirectTo} /> : children};</div>;
}
