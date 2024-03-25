import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Ads, {loader as adsLoader} from './routes/Ads';
import NewAd, {action as newAdAction} from "./components/NewAd";
import {createBrowserRouter, redirect, RouterProvider} from "react-router-dom";
import LoginSignup, {login as login, signUp as signUp} from "./components/Login-Signup";
import RootLayout from "./routes/RootLayout";
import MyAds, {loader as myAdsLoader} from "./routes/MyAds";
import AdDetail, {loader as adsDetailLoader} from "./components/AdDetail";

const App = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem('token'));

    const handleLogin = () => {
        setIsLoggedIn(true);
    };

    const handleLogout = () => {
        localStorage.removeItem('token');
        setIsLoggedIn(false);
        redirect('/ads')
    };
    const router = createBrowserRouter([
        {
            path: '/',
            element: <RootLayout  isLoggedIn={isLoggedIn} onLogout={handleLogout}/>,
            children: [
                {
                    path: '/ads',
                    element: <Ads/>,
                    loader: adsLoader,
                    children: [
                        {path: 'new-ad', element: <NewAd/>, action: newAdAction},
                        {path: 'login', element: <LoginSignup actionType="login"/>,action: (params) => login({ ...params, handleLogin }) },
                        {path: 'signup', element: <LoginSignup actionType="signup"/>, action: signUp},
                        {path: 'ad-detail/:id', loader: adsDetailLoader, element: <AdDetail/>},
                    ],
                },
                {
                    path: '/myads',
                    element: <MyAds/>,
                    loader: myAdsLoader,
                    children: [
                        {path: 'new-ad', element: <NewAd/>, action: newAdAction},
                        {path: 'ad-detail/:id', loader: adsDetailLoader, element: <AdDetail/>},
                    ],
                },
            ],
        },
    ]);

    return(
        <React.StrictMode>
            <RouterProvider router={router}/>
        </React.StrictMode>
    );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App/>);