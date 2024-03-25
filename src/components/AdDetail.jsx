import classes from "./AdDetail.module.css"
import ApiService from "../services/ApiService";
import {Link, useLoaderData, useNavigate, useParams} from "react-router-dom";
import Modal from "./Modal";
function Ad() {
    const ad = useLoaderData();
    return (
        <Modal>
            <div className={classes.ad}>
                <p className={classes.name}>Item: {ad[0].name}</p>
                <label className={classes.label}>Description:</label>
                <div className={classes.description}>{ad[0].description}</div>
                <p className={classes.price}>Price: ${ad[0].price}</p>
                <p className={classes.cancelButton}>
                    <Link to=".." type="button">
                        Cancel
                    </Link>
                </p>
            </div>
        </Modal>
    );
}
export default Ad;
export async function loader({request, params}) {
    const result = await ApiService.getListingsById(params.id);
    return result;
}