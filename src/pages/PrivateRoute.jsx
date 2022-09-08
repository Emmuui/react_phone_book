import React from 'react';
import {Navigate, Outlet} from 'react-router-dom';
import { useSelector } from 'react-redux';
import {selectUser} from "../features/auth/redux/user-slice";
import {useAppSelector} from "../store";


export const PrivateRoute = () => {
    const loggedIn = useAppSelector(state => state.auth.loggedIn);
    return loggedIn ? <Outlet /> : <Navigate to="/login" />;
};

