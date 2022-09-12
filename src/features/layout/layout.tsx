import React, {ReactElement} from "react"
import Header from "./header/header";

type Props = {
    children?: ReactElement;
};

const Layout: React.FC<Props> = ({ children }) => {
    return (
        <>
            <Header />
            <main>{children}</main>
        </>
    )
};
export default Layout;
