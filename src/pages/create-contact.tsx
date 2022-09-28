import React from 'react';
import {CreateContact} from "src/features/contact/components/create-update-contact";

export const CreateView = () => {
    const action = 'Create';
    return <CreateContact action={action} />;
};

export default CreateView;
