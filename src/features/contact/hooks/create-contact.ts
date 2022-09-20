import { useAppDispatch, useAppSelector } from 'src/store';
import { useCallback } from 'react';
import {PhoneContactInterface} from "../ts/contact";
import {CreateContactThunk} from "../redux/thunks";


const CreateContactHook = () => {
    const dispatch = useAppDispatch();
    const contacts = useAppSelector(state => state.contacts);

    const createContact = useCallback((data: PhoneContactInterface) => dispatch(CreateContactThunk(data)), [dispatch]);

    return {
        ...contacts,
        createContact,
    };
};

export default CreateContactHook;
