import { NavLink } from "react-router-dom";
import { GiMoneyStack } from "react-icons/gi";
import { FaTree } from "react-icons/fa";
import { Coins } from "lucide-react";
import logo from "../assets/home/logo.png";

const AdminSidebar = () => {
  const activeClassName =
    "flex items-center text-xl text-white gap-3 rounded-lg px-3 py-2 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50 bg-green-500";

  return (
    <div className="flex h-full max-h-screen flex-col gap-2">
      <div className="flex h-[80px] items-center border-b px-6 py-2">
        <NavLink className="flex items-center gap-2 font-semibold" to="/">
          <img src={logo} alt="logo" className="h-16 w-16" />
          <span className="">Carbon Offset</span>
        </NavLink>
      </div>
      <div className="flex-1 overflow-auto w-60 min-h-[90vh] py-2">
        <nav className="grid items-start pl-4 text-md font-medium">
          <NavLink
            to={`/admin/${import.meta.env.VITE_ADMIN_ROUTE}/adminDashboard`}
            className={({ isActive }) =>
              isActive ? activeClassName : "flex items-center text-xl text-black gap-3 rounded-lg px-3 py-2 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50 hover:bg-green-300"
            }
          >
            <PackageIcon className="h-5 w-5" />
            Dashboard
          </NavLink>
          <NavLink
            to={`/admin/${import.meta.env.VITE_ADMIN_ROUTE}/adminProjectDetails`}
            className={({ isActive }) =>
              isActive ? activeClassName : "flex items-center text-xl text-black gap-3 rounded-lg px-3 py-2 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50 hover:bg-green-300"
            }
          >
            <GiMoneyStack className="h-5 w-5" />
            Transactions
          </NavLink>
          <NavLink
            to={`/admin/${import.meta.env.VITE_ADMIN_ROUTE}/farmOnboarding`}
            className={({ isActive }) =>
              isActive ? activeClassName : "flex items-center text-xl text-black gap-3 rounded-lg px-3 py-2 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50 hover:bg-green-300"
            }
          >
            <FaTree className="h-5 w-5" />
            Farm Onboarding
          </NavLink>
          <NavLink
            to={`/admin/${import.meta.env.VITE_ADMIN_ROUTE}/token`}
            className={({ isActive }) =>
              isActive ? activeClassName : "flex items-center text-xl text-black gap-3 rounded-lg px-3 py-2 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50 hover:bg-green-300"
            }
          >
            <Coins className="h-5 w-5" />
            Tokens
          </NavLink>
        </nav>
      </div>
    </div>
  );
};

function PackageIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m7.5 4.27 9 5.15" />
      <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
      <path d="m3.3 7 8.7 5 8.7-5" />
      <path d="M12 22V12" />
    </svg>
  );
}

export default AdminSidebar;
