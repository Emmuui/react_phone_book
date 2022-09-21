import {useEffect} from 'react';

import getDetailContactHook from "../../hooks/get-detail-contact";
import {useParams} from "react-router";
import {ContactDetailForm} from "./index";
import {Loader} from "../../../../shared/components/loader";
import {Error} from "../../../../shared/components/error";

export const DetailContact = () => {
    const params = useParams();
    const id = String(params.id);
    const { getDetailContact, current_contact, isLoading, error } = getDetailContactHook();

    useEffect(() => {
        if (!current_contact || current_contact.id != id) {
            getDetailContact(id);
        }
    }, [getDetailContact, current_contact, isLoading, error, id]);

    if (isLoading) {
        return <Loader />;
    }

    if (error) {
        return <Error />;
    }
    return <ContactDetailForm />;

};
