import ContactListForm from './home';
import getContactsHook from '../hooks/get-list-contacts';
import { useEffect } from 'react';
import { Loader } from 'src/shared/components/loader';

export const Contacts = () => {
  const { isLoading } = getContactsHook();

  if (isLoading) {
    return <Loader />;
  }

  else {
    return <ContactListForm />;
  }
};
