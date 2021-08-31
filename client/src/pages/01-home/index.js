import { Link } from "react-router-dom";

const P01Home = () => {
    return (
        <main classname="P01Home">
            <h1>Home Page</h1>
            <p>The homepage</p>
            
            <AuthButton />
            <ul>
                <li>
                <Link to="/">Dashboard</Link>
                </li>
                <li>
                <Link to="/login">Login Page</Link>
                </li>
            </ul>
        </main>
    );
}
 export default P01Home;