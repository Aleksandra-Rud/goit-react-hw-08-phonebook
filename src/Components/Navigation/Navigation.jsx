import { NavLink } from "react-router-dom";
import s from "./Navigation.module.css";

function Navigation() {
  return (
    <nav className={s.nav}>
      <NavLink to="/" exact="true" style={s.ref}>
        Home
      </NavLink>

      <NavLink to="/contacts" style={s.link}>
        Contacts
      </NavLink>
    </nav>
  );
}

export default Navigation;
