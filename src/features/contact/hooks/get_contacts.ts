import { useAppDispatch, useAppSelector } from '../../../store';
import { useCallback } from 'react';
import { PhoneContactInterface } from '../ts/contact';
import { FetchContacts } from '../redux/thunks';

const getContactsHook = () => {
  const dispatch = useAppDispatch();
  const contacts = useAppSelector(state => state.contacts);

  const getListContact = useCallback(
    (data: PhoneContactInterface[]) => dispatch(FetchContacts(data)),
    [dispatch]
  );

  return {
    ...contacts,
    getListContact,
  };
};

export default getContactsHook;
