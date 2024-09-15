import { Link, useLocation } from "react-router-dom";
import { FaTree, FaUser, FaBars, FaTimes } from "react-icons/fa";
import { RiWallet3Fill } from "react-icons/ri";
import { useContext, useEffect, useState } from "react";
import UserContext from "../context/UserContext";
import { getUser, refreshToken } from "../api/auth/getUser";

const Navbar = () => {
  const [userData, setUserData] = useState<any>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation(); // Hook to get the current path

  const context = useContext(UserContext);

  // Ensure context is defined before accessing properties
  if (!context) {
    throw new Error('UserProfile must be used within a UserContextProvider');
  }

  const { user, setUser } = context;

  useEffect(() => {
    const fetchUser = async () => {
      const res = await getUser();
      setUserData(res.data.data);
      if (res.status === 201) {
        setUser({
          id: res.data.data._id,
          firstName: res.data.data.firstName,
          lastName: res.data.data.lastName,
          email: res.data.data.email,
        });
      } else {
        const res = await refreshToken();
        if (res.status === 201) {
          setUser({
            id: res.data.id,
            firstName: res.data.firstName,
            lastName: res.data.lastName,
            email: res.data.email,
          });
        }
      }
    };
    fetchUser();
  }, []);

  // Function to check if the current URL matches the link
  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="w-full bg-white">
      <div className="flex items-center justify-between px-4 py-3 md:px-10">
        {/* Logo */}
        <h1 className="text-green-600 text-3xl font-bold">Carbon</h1>
        {/* Hamburger menu button (visible on mobile) */}
        <div className="md:hidden">
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
        {/* Desktop menu (hidden on mobile) */}
        <div className="hidden md:flex items-center space-x-6">
          {/* Menu items */}
          <Link
            to="/"
            className={`hover:text-green-600 ${isActive("/") ? "text-green-600 font-bold" : ""
              }`}
          >
            Home
          </Link>
          <Link
            to="/calculator"
            className={`hover:text-green-600 ${isActive("/calculator") ? "text-green-600 font-bold" : ""
              }`}
          >
            Carbon Calculator
          </Link>
          <Link
            to="/projects"
            className={`hover:text-green-600 ${isActive("/projects") ? "text-green-600 font-bold" : ""
              }`}
          >
            Projects
          </Link>
          <Link
            to="/about"
            className={`hover:text-green-600 ${isActive("/about") ? "text-green-600 font-bold" : ""
              }`}
          >
            About Us
          </Link>
          <Link
            to="/contact"
            className={`hover:text-green-600 ${isActive("/contact") ? "text-green-600 font-bold" : ""
              }`}
          >
            Contact Us
          </Link>
          {/* Right side buttons */}
          <Link
            to="/services"
            className="px-5 py-2 border-green-600 border-2 rounded-xl font-bold"
          >
            Our Services
          </Link>
          <Link
            to="/offsetNow"
            className="px-5 py-2 bg-green-600 rounded-xl text-white flex gap-2 items-center font-bold"
          >
            <FaTree /> Offset Now
          </Link>
          {user ? (
            <Link
              to="/userDashboard"
              className="px-5 py-2 border-black border-2 rounded-xl flex gap-2 items-center font-bold"
              state={{ user: userData }}
            >
              <RiWallet3Fill size={20} fill="black" /> Wallet
            </Link>
          ) : (
            <Link
              to="/login"
              className="px-5 py-2 border-black border-2 rounded-xl flex gap-2 items-center font-bold"
            >
              <FaUser size={20} fill="black" /> Login
            </Link>
          )}
        </div>
      </div>

      {/* Mobile menu (visible when isMobileMenuOpen is true) */}
      <div
        className={`${isMobileMenuOpen ? 'max-h-screen' : 'max-h-0'
          } overflow-hidden transition-max-height duration-300 ease-in-out md:hidden`}
      >
        <div className="flex flex-col items-start px-4 py-2 space-y-2">
          {/* Menu items */}
          <Link
            to="/"
            className={`hover:text-green-600 ${isActive("/") ? "text-green-600 font-bold" : ""
              }`}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/calculator"
            className={`hover:text-green-600 ${isActive("/calculator") ? "text-green-600 font-bold" : ""
              }`}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Carbon Calculator
          </Link>
          <Link
            to="/projects"
            className={`hover:text-green-600 ${isActive("/projects") ? "text-green-600 font-bold" : ""
              }`}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Projects
          </Link>
          <Link
            to="/about"
            className={`hover:text-green-600 ${isActive("/about") ? "text-green-600 font-bold" : ""
              }`}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            About Us
          </Link>
          <Link
            to="/contact"
            className={`hover:text-green-600 ${isActive("/contact") ? "text-green-600 font-bold" : ""
              }`}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Contact Us
          </Link>
          {/* Buttons */}
          <Link
            to="/services"
            className="px-5 py-2 border-green-600 border-2 rounded-xl font-bold"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Our Services
          </Link>
          <Link
            to="/offsetNow"
            className="px-5 py-2 bg-green-600 rounded-xl text-white flex gap-2 items-center font-bold"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <FaTree /> Offset Now
          </Link>
          {user ? (
            <Link
              to="/userDashboard"
              className="px-5 py-2 border-black border-2 rounded-xl flex gap-2 items-center font-bold"
              state={{ user: userData }}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <RiWallet3Fill size={20} fill="black" /> Wallet
            </Link>
          ) : (
            <Link
              to="/login"
              className="px-5 py-2 border-black border-2 rounded-xl flex gap-2 items-center font-bold"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <FaUser size={20} fill="black" /> Login
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
