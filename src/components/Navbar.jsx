import { NavLink } from "react-router-dom";
import "../assets/styles/navbar.css";

function Navbar() {

    return (

        <nav className="navbar">

            <h2 className="logo">
                SocietyConnect
            </h2>

            <div className="nav-links">

                <NavLink to="/dashboard">Dashboard</NavLink>

                <NavLink to="/complaints">Complaints</NavLink>

                <NavLink to="/notices">Notices</NavLink>

                <NavLink to="/marketplace">Marketplace</NavLink>

                <NavLink to="/emergency">Emergency</NavLink>

                <NavLink to="/visitors">Visitors</NavLink>

                <NavLink to="/profile">Profile</NavLink>

                <NavLink to="/settings">Settings</NavLink>

            </div>

        </nav>

    );

}

export default Navbar;