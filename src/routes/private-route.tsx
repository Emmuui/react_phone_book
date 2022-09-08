import React, {ReactElement} from 'react';
import {Navigate, Outlet} from 'react-router-dom';
import {useAppSelector} from "../store";


type Props = {
    children?: ReactElement
}

const PrivateRoute: React.FC<Props> = ({children}) =>{
    const isLoggedIn = useAppSelector(state => state.auth.loggedIn);

    if (!isLoggedIn) {
        return <Navigate to="/login"/>
    }

    return children ? children: <Outlet/>;
}


export { PrivateRoute };
