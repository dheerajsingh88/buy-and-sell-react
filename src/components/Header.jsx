import {
    MdPostAdd,
    MdOutlineShoppingCart,
    MdLogin,
    MdOutlineAppRegistration, MdViewList, MdOutlineLogout
} from 'react-icons/md';

import classes from './Header.module.css';
import {Link, useLocation } from 'react-router-dom';

function Header({isLoggedIn, onLogout}) {
    const location = useLocation();
    const appendRoute = (route) => {
        return `${location.pathname}${route}`;
    };
    return (
        <header className={classes.header}>
            <h1 className={classes.logo}>
                <Link to="/ads">
                    <MdOutlineShoppingCart/>
                    Buy And Sell
                </Link>
            </h1>
            {isLoggedIn && (
                <p>
                    <Link to={appendRoute('/new-ad')} className={classes.button}>
                        <MdPostAdd size={18}/>
                        New Ad
                    </Link>
                </p>
            )}
            {isLoggedIn && (
                <p>
                    <Link to="/myads" className={classes.button}>
                        <MdViewList size={18}/>
                        My Ads
                    </Link>
                </p>
            )}
            {isLoggedIn ? (
                <p>
                    <button onClick={onLogout} className={classes.button}>
                        <MdOutlineLogout size={18}/>
                        Logout
                    </button>
                </p>
            ) : (
                <>
                    <p>
                        <Link to={appendRoute("/login")} className={classes.button}>
                            <MdLogin size={18}/>
                            Login</Link>
                    </p>
                    <p>
                        <Link to={appendRoute("/signup")} className={classes.button}>
                            <MdOutlineAppRegistration size={18}/>
                            Register
                        </Link>
                    </p>
                </>
            )}
        </header>
    );
}

export default Header;