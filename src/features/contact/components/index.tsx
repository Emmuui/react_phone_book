import ContactListForm from './contact-list/contact-list';
import getContactsHook from "../hooks/get-contacts";
import {useEffect} from "react";

export const Contacts = () => {
  const {getListContact, contacts, isLoading, error} = getContactsHook()

  useEffect(() => {
    if (!contacts && !isLoading && !error) {
      getListContact();
    }
  }, [getListContact, contacts, isLoading, error]);

  return <ContactListForm />;
};
