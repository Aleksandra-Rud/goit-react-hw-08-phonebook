import { useSelector } from "react-redux";
import { isLoading } from "../redux/contacts/contact-selectors";
import s from "./HomepageView.module.css";

function Homepage() {
  const loading = useSelector(isLoading);
  return (
    <div clssNeme={s.form}>
      {!loading && <h2 classname={s.title}>Your Phonebook!</h2>}
    </div>
  );
}

export default Homepage;
