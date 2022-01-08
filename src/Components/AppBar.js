// import { useSelector } from "react-redux";
// import Navigation from "./Navigation/Navigation";
// import UserMenu from "./UserMenu/UserMenu";
// import AuthNav from "./AuthNav";
// import { isAuth } from "../redux/auth/auth-selectors";

// const styles = {
//   header: {
//     display: "flex",
//     justifyContent: "space-between",
//     alignItems: "center",
//     borderBottom: "1px solid rgb(250, 172, 17)",
//   },
// };

// export default function AppBar() {
//   const isLoggedIn = useSelector(isAuth.getIsLoggedIn);
//   return (
//     <header style={styles.header}>
//       <Navigation />
//       {isLoggedIn ? <UserMenu /> : <AuthNav />}
//     </header>
//   );
// }
