import { useSelector } from "react-redux";
import { isLoading } from "../redux/contacts/contact-selectors";

function Homepage() {
  const loading = useSelector(isLoading);
  return <div>{!loading && <h2>Your Phonebook!</h2>}</div>;
}

export default Homepage;
