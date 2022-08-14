import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Fragment } from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const { auth } = useSelector((state) => ({ ...state }));
  const dispatch = useDispatch();
  const navigate = useNavigate();

  //functin for logout
  const logout = () => {
    dispatch({
      type: "LOGOUT",
      payload: null,
    });
    localStorage.removeItem("auth");
    navigate("/login");
  };
  return (
    // <div className="nav bg-light d-flex justify-content-between">

    // </div>
    <nav className="navbar navbar-expand-lg bg-light d-flex justify-content-between">
      <div className="container-fluid">
        <Link className="nav-link" to="/">
          Home
        </Link>

        {auth !== null && (
          <a className="nav-link pointer" onClick={logout}>
            Logout
          </a>
        )}

        {auth === null && (
          <Fragment>
            <Link className="nav-link" to="/login">
              Login
            </Link>
            <Link className="nav-link" to="/register">
              Register
            </Link>
          </Fragment>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
