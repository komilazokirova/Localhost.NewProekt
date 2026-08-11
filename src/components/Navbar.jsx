import { NavLink, useNavigate } from "react-router-dom";
import logo from "../assets/logo.svg";

function Navbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Login ma'lumotini o'chirish
    localStorage.removeItem("user");

    // Sign in sahifasiga qaytarish
    navigate("/signin");
  };

  return (
    <div className="w-full px-8 py-6 flex items-center justify-between">

      {/* LOGO */}
      <NavLink to="/">
        <img
          src={logo}
          alt="logo"
          className="w-36"
        />
      </NavLink>

      {/* NAVIGATION */}
      <div className="flex items-center gap-7 font-bold">

        {/* HOME */}
        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            isActive
              ? "text-emerald-500"
              : "text-gray-600 hover:text-emerald-500 transition"
          }
        >
          Home
        </NavLink>

        {/* STAYS */}
        <NavLink
          to="/"
          className="text-gray-600 hover:text-emerald-500 transition"
        >
          Stays
        </NavLink>

        {/* BECOME A HOST */}
        <NavLink
          to="/"
          className="text-gray-600 hover:text-emerald-500 transition"
        >
          Become a host
        </NavLink>

        {/* LOG OUT */}
        <button
          onClick={handleLogout}
          className="text-red-500 hover:text-red-600 transition font-bold"
        >
          Log out
        </button>

      </div>
    </div>
  );
}

export default Navbar;