import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="navbar navbar-dark bg-dark">
            <div className="container">
                <NavLink className="btn btn-outline-primary" to="/home">
                    Home
                </NavLink>
                <NavLink className="btn btn-outline-primary" to="/userinfo">
                    User Information
                </NavLink>
                <NavLink className="btn btn-outline-primary" to="/new-supplier-user">
                    Add New Supplier Use
                </NavLink>
                <NavLink className="btn btn-outline-primary" to="/pr-info">
                    PO Reduction
                </NavLink>
            </div>
        </nav>
    );
};

export default Navbar;
