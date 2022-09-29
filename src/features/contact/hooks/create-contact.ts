import { useAppDispatch, useAppSelector } from 'src/store';
import { useCallback } from 'react';
import {PhoneContactInterface} from "../ts/contact";
import {createContactThunk} from "../redux/thunks";


const CreateContactHook = () => {
    const dispatch = useAppDispatch();
    const contacts = useAppSelector(state => state.contacts);
    const createContact = useCallback((data: PhoneContactInterface) => dispatch(createContactThunk(data)), [dispatch]);

    return {
        ...contacts,
        createContact,
    };
};

export default CreateContactHook;
