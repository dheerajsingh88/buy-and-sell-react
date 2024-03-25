import '../App.css';
import Listings from "../components/Listings";
import {Outlet} from "react-router-dom";
import ApiService from "../services/ApiService";

function Ads() {
  return (
      <>
          <Outlet />
          <main>
            <Listings actionType="allads"/>
          </main>
      </>
  );
}
export default Ads;

export async function loader() {
    const result = await ApiService.getListings();
    return result;
}