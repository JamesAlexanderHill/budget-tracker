import {
    useHistory,
    useLocation,
} from "react-router-dom";

import { useAuth } from "../../state/auth";


const P02Login = () => {
    let history = useHistory();
    let location = useLocation();
    let auth = useAuth();

    let { from } = location.state || { from: { pathname: "/" } };
    let login = () => {
        auth.signin(() => {
        history.replace(from);
        });
    };

    return (
        <main className="P02Login">
            <h1>Login Page</h1>
            <p>Login to a user account</p>
            <p>You must log in to view the page at {from.pathname}</p>
            <button onClick={login}>Log in</button>
        </main>
    );
}

export default P02Login;
