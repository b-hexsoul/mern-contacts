import React, { useContext } from "react";
import ContactContext from "../../context/contact/contactContext";
import ContactItem from "./ContactItem";

const Contacts = () => {
  const { contacts, filtered } = useContext(ContactContext);

  if (contacts.length === 0) {
    return <h4>Please add a contact</h4>;
  }

  if (filtered !== null && filtered.length === 0) {
    return <h4>No items match</h4>;
  }

  return (
    <>
      {(filtered ? filtered : contacts).map((contact) => (
        <ContactItem key={contact.id} contact={contact} />
      ))}
    </>
  );
};

export default Contacts;
