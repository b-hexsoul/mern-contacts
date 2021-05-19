import React, { useContext, useEffect } from "react";
import Contacts from "../contacts/Contacts";
import ContactForm from "../contacts/ContactForm";
import ContactFilter from "../contacts/ContactFilter";
import AuthContext from '../../context/auth/authContext'

const Home = (props) => {
  const { isAuthenticated, loadUser } = useContext(AuthContext);

  useEffect(() => {
    if(!isAuthenticated) {
      loadUser()
    } 
    // eslint-disable-next-line
  },[])

  if(!isAuthenticated) {
    return (<></>)
  }

  return (
    <div className="grid-2">
      <div>
        <ContactForm />
      </div>
      <div>
        <ContactFilter />
        <Contacts />
      </div>
    </div>
  );
};

export default Home;
