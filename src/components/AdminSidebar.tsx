import { NavLink } from "react-router-dom";
import { FaBusinessTime, FaTree } from "react-icons/fa";
import { Coins, Users, ClipboardList, Users2, UserPlus, Package } from "lucide-react";
import logo from "../assets/home/logo.png";
import { GiLoveLetter, GiMoneyStack } from "react-icons/gi";

const navLinks = [
  {
    to: `/admin/${import.meta.env.VITE_ADMIN_ROUTE}/adminDashboard`,
    icon: <Package className="h-5 w-5" />,
    label: "Dashboard",
  },
  {
    to: `/admin/${import.meta.env.VITE_ADMIN_ROUTE}/adminUsers`,
    icon: <Users className="h-5 w-5" />,
    label: "Users",
  },
  {
    to: `/admin/${import.meta.env.VITE_ADMIN_ROUTE}/adminAllTransactions`,
    icon: <GiMoneyStack className="h-5 w-5" />,
    label: "Transactions",
  },
  {
    to: `/admin/${import.meta.env.VITE_ADMIN_ROUTE}/adminAllBusinessDetails`,
    icon: <FaBusinessTime className="h-5 w-5" />,
    label: "Business Calculator Details",
  },
  {
    to: `/admin/${import.meta.env.VITE_ADMIN_ROUTE}/farmOnboarding`,
    icon: <FaTree className="h-5 w-5" />,
    label: "Farm Onboarding",
  },
  {
    to: `/admin/${import.meta.env.VITE_ADMIN_ROUTE}/token`,
    icon: <Coins className="h-5 w-5" />,
    label: "Tokens",
  },
  {
    to: `/admin/${import.meta.env.VITE_ADMIN_ROUTE}/admin-newsletters`,
    icon: <GiLoveLetter className="h-5 w-5" />,
    label: "Newsletter",
  },
  {
    to: `/admin/${import.meta.env.VITE_ADMIN_ROUTE}/proposal`,
    icon: <ClipboardList className="h-5 w-5" />,
    label: "Proposal",
  },
  {
    to: `/admin/${import.meta.env.VITE_ADMIN_ROUTE}/membershipForm`,
    icon: <ClipboardList className="h-5 w-5" />,
    label: "Membership Form",
  },
  {
    to: `/admin/${import.meta.env.VITE_ADMIN_ROUTE}/collaborativePlatform`,
    icon: <Users2 className="h-5 w-5" />,
    label: "Collaborative Platform",
  },
  {
    to: `/admin/${import.meta.env.VITE_ADMIN_ROUTE}/volunteerRegistration`,
    icon: <UserPlus className="h-5 w-5" />,
    label: "Volunteer Registration",
  },
];

const AdminSidebar = () => {
  const activeClassName =
    "flex items-center text-lg text-white gap-3 rounded-lg px-3 py-2 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50 bg-green-500";

  return (
    <div className="flex h-full max-h-screen flex-col gap-2 bg-gray-50 dark:bg-gray-900">
      <div className="flex h-[80px] items-center border-b px-6 py-2 bg-white dark:bg-gray-800">
        <NavLink className="flex items-center gap-2 font-semibold text-xl" to="/">
          <img src={logo} alt="logo" className="h-16 w-16" />
        </NavLink>
      </div>
      <div className="flex-1 overflow-auto w-60 min-h-[90vh] py-2">
        <nav className="grid items-start pl-4 text-md font-medium">
          {navLinks.map((link) => (
            <NavLink
              key={link.label}
              to={link.to}
              className={({ isActive }) =>
                isActive
                  ? activeClassName
                  : "flex items-center text-lg text-black gap-3 rounded-lg px-3 py-2 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50 hover:bg-green-300"
              }
            >
              {link.icon}
              {link.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default AdminSidebar;
