import { useDispatch } from "react";
import { logOut } from "../../redux/auth/auth-operations";

function UserMenu() {
  const dispatch = useDispatch();

  console.log("logout");
  const handleClick = () => {
    dispatch(logOut());
  };
  return (
    <div>
      <h1>Hello</h1>
      <button type="button" onClick={handleClick}>
        Logout
      </button>
    </div>
  );
}

export default UserMenu;
