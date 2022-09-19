import React, { useState } from 'react';
import styles from './styles.module.scss';
import { Link } from 'react-router-dom';

const [email, setEmail] = useState('');
const [phone, setPhone] = useState('');

const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();
};

export const CreateContact = () => {
  return (
    <div>
      <form className="" onSubmit={e => handleSubmit(e)}>
        <h1>Create new contact</h1>
        <input
          className=""
          type="text"
          placeholder="First name"
          value={email ? email : ''}
          onChange={e => setEmail(e.target.value)}
        />
        <input
          className=""
          type="password"
          placeholder="Last name"
          value={phone}
          onChange={e => setPhone(e.target.value)}
        />
        <p className="">
          Or <Link to="/">return to home page</Link>
        </p>
      </form>
    </div>
  );
};
