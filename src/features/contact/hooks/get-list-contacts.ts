import { useAppDispatch, useAppSelector } from 'src/store';
import { useCallback } from 'react';
import { fetchContacts } from '../redux/thunks';

const getContactsHook = () => {
  const dispatch = useAppDispatch();
  const contacts = useAppSelector(state => state.contacts);

  const getListContact = useCallback(
    () => dispatch(fetchContacts()),
    [dispatch]
  );

  return {
    ...contacts,
    getListContact,
  };
};

export default getContactsHook;
