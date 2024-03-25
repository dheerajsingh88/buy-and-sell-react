import classes from "./Ad.module.css";
import ApiService from "../services/ApiService";
import {Link, useLocation, useNavigate} from "react-router-dom";
import { GrFormView  } from 'react-icons/gr';
function Ad({id, name, price, views, actionType}) {
    const navigate  = useNavigate();
    const location = useLocation();
    const appendRoute = (route) => {
        return `${location.pathname}${route}`;
    };
    async function onDelete() {
        await ApiService.deleteListings(id);
        navigate('/myads');
    }
    return (
        <li key={id} className={classes.list}>
            <p className={classes.name}>{name}</p>
            <p className={classes.price}>${price}</p>
            <p  className={classes.views}><GrFormView /> {views}</p>
            <Link to={appendRoute(`/ad-detail/${id}`)} className={classes.details}> Details</Link>
            {actionType === 'myads' && (
                <button className={classes.deleteButton} type="button" onClick={onDelete}>Delete</button>
            )}
        </li>
    );
}
export default Ad;