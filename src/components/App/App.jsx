import css from "./App.module.css";
import ContactForm from "../ContactForm/ContactForm";
import SearchBox from "../SearchBox/SearchBox";
import ContactList from "../ContactList/ContactList";

function App() {
  return (
    <>
      <div className={css.form}>
        <h1>PhoneBook</h1>
        <ContactForm />
        <SearchBox>Find contacts by name</SearchBox>
      </div>
      <ContactList />
    </>
  );
}

export default App;
