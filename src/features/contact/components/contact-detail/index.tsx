import React from 'react';
import {CreateContact} from "../create-update-contact";


export const ContactDetailForm = () => {
  const action = 'Update'

  return (
    <div>
      <CreateContact action={action} />
    </div>
  );
};
