import {Link, useNavigate} from 'react-router-dom';
import React, { ReactElement, useState, useEffect } from 'react';
import styles from './styles.module.scss';
import {useAppDispatch, useAppSelector} from "../../../store";
import {fetchUser} from "../redux/thunks";


const LoginForm = (): ReactElement => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate()
    const dispatch = useAppDispatch();
    const handleSubmit = (e: any) => {
        e.preventDefault();

        dispatch(fetchUser({
            email: email,
            password: password,
        }));
    }

    const loggedIn = useAppSelector(state => state.auth.loggedIn);

    useEffect(() => {
        if (loggedIn) navigate('/home');
    }, []);

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
                <p className={styles.home_page}>Or <Link to="/home">return to home page</Link></p>
            </form>
        </div>
    )
};

export default LoginForm;
