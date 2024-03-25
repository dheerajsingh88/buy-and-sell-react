import classes from './NewAd.module.css';
import {Form, Link, redirect, useLocation} from "react-router-dom";
import ApiService from "../services/ApiService";
import Modal from "./Modal";

function NewAd() {

    return (
        <Modal>
            <Form method="post" className={classes.form}>
                <p>
                    <label htmlFor="name">Name</label>
                    <textarea id="name" name ="name" required/>
                </p>
                <p>
                    <label htmlFor="description">Description</label>
                    <textarea id="description" name="description" required rows={3} />
                </p>
                <p>
                    <label htmlFor="price">price</label>
                    <input type="text" id="price" name="price" required/>
                </p>
                <p className={classes.actions}>
                    <Link to=".." type="button">
                        Cancel
                    </Link>
                    <button>Submit</button>
                </p>
            </Form>
        </Modal>
    );
}

export default NewAd;

export async function action ({request}) {
    const formData = await request.formData();
    const postData = Object.fromEntries(formData);
    const response = await ApiService.postListings(postData);
    return redirect(window.history.back())
}