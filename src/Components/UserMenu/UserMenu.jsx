import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../../redux/auth/auth-operations";
import s from "./UserMenu.module.css";

function UserMenu() {
  const dispatch = useDispatch();
  const email = useSelector((state) => state.auth.user.email);

  const handleClick = () => {
    dispatch(logOut());
  };

  return (
    <div>
      <h1 className={s.title}>Hello, {email}</h1>
      <button type="button" onClick={handleClick} className={s.button}>
        Logout
      </button>
    </div>
  );
}

export default UserMenu;
