import { Link } from "react-router-dom";
import "../assets/styles/notfound.css";

function NotFound() {

    return (

        <div className="notfound">

            <h1>404</h1>

            <h2>Page Not Found</h2>

            <p>
                The page you're looking for doesn't exist.
            </p>

            <Link to="/">
                Go Home
            </Link>

        </div>

    );

}

export default NotFound;