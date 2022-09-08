import React, {ReactElement} from 'react';
import {useAppSelector} from "../store";
import {Navigate, Outlet} from "react-router-dom";

type Props = {
    children?: ReactElement
}

const PublicRoute: React.FC<Props> = ({children}) =>{
    const isLoggedIn = useAppSelector(state => state.auth.loggedIn);

    if (isLoggedIn) {
        return <Navigate to="/home"/>
    }

    return children ? children: <Outlet/>;
}


export { PublicRoute };
