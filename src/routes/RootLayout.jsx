import Header from "../components/Header";
import {Outlet} from "react-router-dom";
import TokenService from "../services/TokenService";

function RootLayout ({isLoggedIn, onLogout}) {
    return(
        <>
            <Header  isLoggedIn={isLoggedIn} onLogout={onLogout} />
            <Outlet />
        </>
    );
}

export default RootLayout;