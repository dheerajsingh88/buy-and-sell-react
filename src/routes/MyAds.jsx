import '../App.css';
import Listings from "../components//Listings";
import {Outlet} from "react-router-dom";
import ApiService from "../services/ApiService";

function MyAds() {
    return (
        <>
            <Outlet />
            <main>
                <Listings actionType="myads"/>
            </main>
        </>
    );
}
export default MyAds;

export async function loader() {
    debugger
    const result = await ApiService.getMyAds();
    return result;
}