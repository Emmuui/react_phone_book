import React from 'react';
import styles from './styles.module.scss';
import { useAppSelector } from 'src/store';
import { useNavigate } from 'react-router-dom';
import {CreateContact} from "../create-update-contact";


export const ContactDetailForm = () => {
  const navigate = useNavigate();
  const routeBack = () =>{
    const path = `/`;
    navigate(path);
  }
  const action = 'Update'

  return (
    <div>
      <CreateContact action={action} />
    </div>
  );
};
