import { Link, NavLink } from "react-router-dom";

const styles = {
  link: {
    display: "inline-block",
    textDecoration: "none",
    padding: 25,
    fontWeight: 700,
    color: "rgb(21, 151, 207)",
  },
  active: {
    color: "rgb(131, 19, 212)",
  },
};

// function AuthNav() {
//   return (
//     <div>
//       <Link
//         to="/register"
//         style={(data) => (data.isActive ? styles.active : styles.link)}
//       >
//         Register
//       </Link>
//       <NavLink
//         to="/login"
//         exact="true"
//         style={(data) => (data.isActive ? styles.active : styles.link)}
//       >
//         Login
//       </NavLink>
//     </div>
//   );
// }

function AuthNav() {
  return (
    <div>
      <Link to="/register" style={styles.link}>
        Register
      </Link>
      <NavLink to="/login" exact="true" style={styles.link}>
        Login
      </NavLink>
    </div>
  );
}

export default AuthNav;
