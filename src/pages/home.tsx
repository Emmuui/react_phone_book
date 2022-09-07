import { Navigate } from 'react-router-dom';
import {useSelector} from "react-redux";
import {selectUser} from "../features/auth/redux/user-slice";


const HomePage = () => {
    const user = useSelector(selectUser);

    return(
        <h1>Hello</h1>
    )
}

export default HomePage;
