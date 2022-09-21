import ContactListForm from './home';
import getContactsHook from '../hooks/get-list-contacts';
import { Loader } from 'src/shared/components/loader';
import {Error} from "../../../shared/components/error";


export const Contacts = () => {
  const { isLoading, error } = getContactsHook();

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <Error />;
  }

  else {
    return <ContactListForm />;
  }
};
