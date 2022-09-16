import ContactListForm from './home';
import getContactsHook from '../hooks/get-list-contacts';
import { useEffect } from 'react';
import { Loader } from 'src/shared/components/loader';

export const Contacts = () => {
  const { getListContact, contacts, isLoading, error } = getContactsHook();

  useEffect(() => {
    if (!contacts && !isLoading && !error) {
      getListContact();
    }
  }, [getListContact, contacts, isLoading, error]);
  if (isLoading) {
    return <Loader />;
  }
  else {
    return <ContactListForm />;
  }
};
