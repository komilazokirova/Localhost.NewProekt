import { NavLink } from "react-router-dom";
import logo from "../assets/logo.svg";

function Navbar() {
    return (
        <div className="flex justify-between px-12 py-6 ">
            <img src={logo} alt="localhost logo" className="h-8" />

            <div className="flex gap-5 font-bold">
                <NavLink
                    to="/nav-home"
                    className={({ isActive }) =>
                        isActive ? "text-emerald-500 font-bold" : "text-gray-600"
                    }
                >
                    Home
                </NavLink>

                <NavLink
                    to="/stays"
                    className={({ isActive }) =>
                        isActive ? "text-emerald-500 font-bold" : "text-gray-600"
                    }
                >
                    Stays
                </NavLink>

                <NavLink
                    to="/become-host"
                    className={({ isActive }) =>
                        isActive ? "text-emerald-500 font-bold" : "text-gray-600"
                    }
                >
                    Become a host
                </NavLink>
            </div>
        </div>
    );
}

export default Navbar;