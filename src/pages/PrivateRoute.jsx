import React from 'react';
import {Navigate, Outlet} from 'react-router-dom';
import { useSelector } from 'react-redux';
import {selectUser} from "../features/auth/redux/user-slice";
import {useAppSelector} from "../store";

export { PrivateRoute };

function PrivateRoute({ children }) {
    const isLoggedIn = useAppSelector(state => state.auth.loggedIn);

    if (!isLoggedIn) {
        return <Navigate to="/login"/>
    }

    return children;
}


// const PrivateRoute = () => {
//     const loggedIn = useAppSelector(state => state.auth.loggedIn);
//     return loggedIn ? <Outlet /> : <Navigate to="/login" />;
// };

