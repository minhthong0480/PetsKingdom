import { Link } from "react-router-dom";
import {useSelector} from 'react-redux'

const Navbar = () => {
  return (
    <div className="nav bg-light d-flex justify-content-between">
        <Link className="nav-link" to="/">Home</Link>
        <Link className="nav-link" to="/login">Login</Link>
        <Link className="nav-link" to="/register">Register</Link>
    </div>
  )
};

export default Navbar;