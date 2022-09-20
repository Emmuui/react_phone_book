import {useEffect} from 'react';

import getDetailContactHook from "../../hooks/get-detail-contact";
import {useParams} from "react-router";
import {ContactDetailForm} from "./index";

export const DetailContact = () => {
    const params = useParams();
    const id = String(params.id);
    const { getDetailContact, current_contact, isLoading, error } = getDetailContactHook();

    useEffect(() => {
        if (!current_contact) {
            getDetailContact(id);
        }
    }, [getDetailContact, current_contact, isLoading, error, id]);
    return <ContactDetailForm />;
};
