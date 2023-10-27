import { NavLink } from "react-router-dom";
import {
    Navbar,
    Nav,
    NavDropdown,
    Container,
  } from "react-bootstrap";

const Navigation = () => {
    return (
        <>
        <nav className="navbar navbar-dark bg-dark">
            <div className="container">
                <NavLink className="btn btn-outline-danger" to="/home">
                    Home
                </NavLink>
                <NavLink className="btn btn-outline-danger" to="/userinfo">
                    User Information
                </NavLink>
                <NavLink className="btn btn-outline-danger" to="/new-supplier-user">
                    Add New Supplier Use
                </NavLink>
                <NavLink className="btn btn-outline-danger" to="/pr-info">
                    PO Reduction
                </NavLink>
            </div>
        </nav>
       </>
    );
};

export default Navigation;
