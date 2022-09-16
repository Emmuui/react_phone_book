import { useAppDispatch, useAppSelector } from 'src/store';
import { useCallback } from 'react';
import { FetchDetailContact } from '../api/contact-detail-thunks';
import {FetchContacts} from "../api/contact-list-thunks";


const getDetailContactHook = () => {
  const dispatch = useAppDispatch();
  const contacts = useAppSelector(state => state.contacts);

  // const getAllContacts = useCallback(
  //     () => dispatch(FetchContacts()),
  //     [dispatch]
  // );

  const getDetailContact = useCallback((id: string) => dispatch(FetchDetailContact(id)), [dispatch]);

  return {
    ...contacts,
    getDetailContact,
    // getAllContacts
  };
};

export default getDetailContactHook;
