import { Outlet } from "react-router";
import Navbar from "./components/navbar";

const App = () => {
    return (
        <div>
            <Navbar />
            <div className="container">
                <Outlet />
            </div>
        </div>
    );
};

export default App;