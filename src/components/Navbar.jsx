import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <h2 className="logo">SocietyConnect</h2>

      <div className="nav-links">

        <Link to="/">Home</Link>

        <Link to="/dashboard">Dashboard</Link>

        <Link to="/complaints">Complaints</Link>

        <Link to="/notices">Notices</Link>

        <Link to="/marketplace">Marketplace</Link>

        <Link to="/visitors">Visitors</Link>

        <Link to="/profile">Profile</Link>

      </div>
    </nav>
  );
}

export default Navbar;