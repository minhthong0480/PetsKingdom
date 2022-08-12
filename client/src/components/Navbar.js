import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="nav bg-light d-flex justify-content-between">
        <Link className="nav-link" to="/Home">Home</Link>
        <Link className="nav-link" to="/login">Login</Link>
        <Link className="nav-link" to="/register">Register</Link>
    </div>
  )
};

export default Navbar;