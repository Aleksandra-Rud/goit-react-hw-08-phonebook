import { useDispatch } from "react-redux";
import { useEffect } from "react";
import ContactForm from "../Components/ContactForm/Form";
import ContactList from "../Components/ContactList/ContactList";
import Filter from "../Components/Filter/Filter";
import { fetchContact } from "../redux/contacts/contact-operations";
// import UserMenu from "../Components/UserMenu/UserMenu";
import s from "./ContactView.module.css";

function ContactView() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContact());
  }, [dispatch]);

  return (
    <div classname={s.form}>
      <div>
        <ContactForm />
        <Filter />
      </div>
      <div>
        <ContactList />
      </div>
    </div>
  );
}

export default ContactView;
