import { Link } from 'react-router-dom';
import React, { ReactElement, useState, useEffect } from 'react';
import styles from './styles.module.scss';
import {useDispatch} from "react-redux";
import {login} from "../redux/user-slice";


const LoginForm = (): ReactElement => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const dispatch = useDispatch();

    const handleSubmit = (e: any) => {
        e.preventDefault();

        dispatch(login({
            email: email,
            password: password,
            loggedIn: true
        }));
    }


    return (
        <div className={styles.login}>
            <form className={styles.login__form} onSubmit={(e) => handleSubmit(e)}>
                <h1>Login</h1>
                <input
                    className={styles.login_form__input}
                    type="email"
                    placeholder="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    className={styles.login_form__input}
                    type="password"
                    placeholder="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit" className={styles.submit__btn}>Submit</button>
                <p className={styles.home_page}>Or <Link to="/">return to home page</Link></p>
            </form>
        </div>
    )
};

export default LoginForm;
