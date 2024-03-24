import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";
import { useSelector } from "react-redux";
import { selectContacts } from "../../redux/contactsSlice";
import { selectNameFilter } from "../../redux/filtersSlice";

function ContactList() {
  const allContacts = useSelector(selectContacts);
  const search = useSelector(selectNameFilter);
  const contacts =
    search.trim() === ""
      ? allContacts.slice()
      : allContacts.filter((contact) =>
          contact.name.toLowerCase().includes(search.toLowerCase())
        );

  return (
    <ul className={css.grid}>
      {contacts.map((contact) => (
        <Contact
          key={contact.id}
          id={contact.id}
          name={contact.name}
          number={contact.number}
        />
      ))}
    </ul>
  );
}

export default ContactList;
