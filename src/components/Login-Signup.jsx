import {Form, Link, redirect} from "react-router-dom";
import ApiService from "../services/ApiService";
import classes from './Login-Signup.module.css'
import Modal from "./Modal";

function LoginSignup ({ actionType }) {

return (
    <Modal>
        <Form method="post" className={classes.form}>
            <p>
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" required/>
            </p>
            <p>
                <label htmlFor="password">Password</label>
                <input type="password" id="password" name="password" required/>
            </p>
            <p className={classes.actions}>
                <Link to=".." type="button">
                    Cancel
                </Link>
                <button type="submit">{actionType === 'login' ? 'Login' : 'Signup'}</button>
            </p>
        </Form>
    </Modal>
);
}
export default LoginSignup;

export async function login ({request, handleLogin }) {
    const formData = await request.formData();
    const postData = Object.fromEntries(formData);
    await ApiService.login(postData);
    handleLogin();
    return redirect('/ads');
}
export async function signUp ({request}) {
    const formData = await request.formData();
    const postData = Object.fromEntries(formData);
    await ApiService.signUp(postData);
    return redirect('/ads');
}