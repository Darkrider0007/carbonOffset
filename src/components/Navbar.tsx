import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaTree, FaUser, FaBars, FaTimes } from "react-icons/fa";
import { RiWallet3Fill } from "react-icons/ri";
import { useContext, useEffect, useState } from "react";
import UserContext from "../context/UserContext";
import { getUser } from "../api/auth/getUser";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import logo from "../assets/logos/navbarLogo-black.png";

const Navbar = () => {
  const [userData, setUserData] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const context = useContext(UserContext);
  if (!context) {
    throw new Error("UserProfile must be used within a UserContextProvider");
  }

  const { user, setUser } = context;

  useEffect(() => {
    const fetchUser = async () => {
      const res = await getUser();
      if (res.data?.data) setUserData(res.data.data);
      if (res.status === 201) {
        setUser({
          id: res.data.data._id,
          firstName: res.data.data.firstName,
          lastName: res.data.data.lastName,
          email: res.data.data.email,
        });
      }
    };
    fetchUser();
  }, [setUser]);

  const menuItems = [
    { path: "/", label: "Home" },
    {
      path: "/products",
      label: "Products",
      isSubmenu: true,
      subMenu: [
        { path: "/uny", label: "UNY" },
        { path: "/bamboohut", label: "Bamboo Hut" },
        { path: "/divinehealer", label: "Divine Healer" },
        { path: "/cmrbitplast", label: "CMR Bitplast" },
        { path: "/books", label: "Books" },
      ],
    },
    { path: "/calculator", label: "Carbon Calculator" },
    { path: "/projects", label: "Projects" },
    { path: "/awards", label: "Awards" },
    { path: "/gallery", label: "Gallery" },
    {
      path: "/about",
      label: "About Us",
      isSubmenu: true,
      subMenu: [
        { path: "/", label: "About Us" },
        { path: "/sfuo", label: "SFUO" },
        { path: "/affiliateOrganization", label: "Affiliate Organization" },
        { path: "/future-city", label: "Future City" },
      ],
    },
    {
      path: "/joinUs",
      label: "Join Us",
      isSubmenu: true,
      subMenu: [
        { path: "/membership", label: "Membership" },
        { path: "/submitYourProposal", label: "Submit Your Proposal" },
        { path: "/memberShipForm", label: "Membership Form" },
        { path: "/farmOnboardApplication", label: "Farm Onboard Application" },
        {
          path: "/collaborativeParticipationPlatform",
          label: "Collaborative Participation Platform",
        },
        {
          path: "/volunteerRegistrationForm",
          label: "Volunteer Registration Form",
        },
      ],
    },
    { path: "/contact", label: "Contact Us" },
  ];

  const navigate = useNavigate();

  const isActive = (path: any) => {
    return (
      location.pathname === path ||
      location.pathname.split("/")[1] === path.split("/")[1]
    );
  };

  return (
    <nav className="w-full bg-gray-100 shadow-lg">
      <div className="flex items-center justify-between px-4 py-3 lg:px-10">
        <div onClick={() => navigate("/")} className="cursor-pointer">
          <img src={logo} alt="logo" className="h-12" />
        </div>
        <div className="lg:hidden">
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
        <div className="hidden lg:flex items-center space-x-6">
          {menuItems.map((item) => (
            <div key={item.path} className="relative group">
              <Link
                to={item.isSubmenu ? "" : item.path}
                className={`hover:text-green-600 ${isActive(item.path) ? "text-green-600 font-bold" : ""
                  }`}
              >
                {item.label}
              </Link>
              {item.isSubmenu && (
                <div className="hidden group-hover:flex flex-col z-30 absolute left-0 bg-white w-40 rounded-lg shadow-lg p-4 space-y-2">
                  {item.subMenu?.map((subItem) => (
                    <Link
                      key={subItem.path}
                      to={`${item.path}${subItem.path}`}
                      className="block hover:bg-green-500 hover:text-white rounded-lg px-2 py-1"
                    >
                      {subItem.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <Link
            to="/services"
            className="px-4 py-2 border-green-600 border-2 rounded-xl font-bold"
          >
            Our Services
          </Link>
          {user && (
            <Link
              to="/calculator"
              className="px-4 py-2 bg-green-600 rounded-xl text-white flex gap-2 items-center font-bold"
            >
              <FaTree /> Offset Now
            </Link>
          )}
          {user ? (
            <Link
              to="/userDashboard"
              className="px-4 py-2 border-black border-2 rounded-xl flex gap-2 items-center font-bold"
              state={{ user: userData }}
            >
              <RiWallet3Fill size={20} fill="black" /> Wallet
            </Link>
          ) : (
            <Link
              to="/login"
              className="px-4 py-2 border-black border-2 rounded-xl flex gap-2 items-center font-bold"
            >
              <FaUser size={20} fill="black" /> Login
            </Link>
          )}
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`${isMobileMenuOpen ? "max-h-screen" : "max-h-0"
          } overflow-hidden transition-all duration-300 ease-in-out lg:hidden`}
      >
        <div className="flex flex-col items-start px-4 py-2 space-y-2">
          {menuItems.map((item) => (
            <div key={item.path}>
              {item.isSubmenu ? (
                <DropdownMenu>
                  <DropdownMenuTrigger className="hover:text-green-600">
                    {item.label}
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="bg-white w-40 rounded-lg shadow-lg p-4 space-y-2 ml-4">
                    {item.subMenu?.map((subItem) => (
                      <Link
                        key={subItem.path}
                        to={`${item.path}${subItem.path}`}
                        className="block hover:bg-green-500 hover:text-white rounded-lg px-2 py-1"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {subItem.label}
                      </Link>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <Link
                  to={item.path}
                  className={`hover:text-green-600 ${isActive(item.path) ? "text-green-600 font-bold" : ""
                    }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              )}
            </div>
          ))}
          <Link
            to="/services"
            className="px-5 py-2 border-green-600 border-2 rounded-xl font-bold"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Our Services
          </Link>
          {user && (
            <Link
              to="/offsetNow"
              className="px-5 py-2 bg-green-600 rounded-xl text-white flex gap-2 items-center font-bold"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <FaTree /> Offset Now
            </Link>
          )}
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
