import { NavLink } from "react-router-dom";
import s from "./Navigation.module.css";

function Navigation() {
  return (
    <nav className={s.nav}>
      <NavLink to="/" exact="true" className={s.ref}>
        Home
      </NavLink>

      <NavLink to="/contacts" className={s.ref}>
        Contacts
      </NavLink>
    </nav>
  );
}

export default Navigation;
