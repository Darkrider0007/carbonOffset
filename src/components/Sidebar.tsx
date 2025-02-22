import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { GiMoneyStack } from "react-icons/gi";
// import { FaTree } from "react-icons/fa";
import logo from "../assets/home/logo.png";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation(); // Get current route information

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  // Function to determine if the link is active
  const isActive = (path: string) => {
    return location.pathname === path
      ? "bg-green-300 text-gray-900 dark:text-gray-50"
      : "";
  };

  return (
    <>
      {/* Mobile Dropdown Toggle Button */}
      <div className="md:hidden flex items-center justify-between px-4 py-2">
        <Link className="text-xl font-semibold" to="/">
          <img src={logo} alt="logo" className="
          h-10 w-10" />
        </Link>
        <button
          onClick={toggleDropdown}
          className="text-gray-600 bg-gray-200 p-2 rounded-lg"
        >
          {isOpen ? "Close Menu" : "Open Menu"}
        </button>
      </div>

      {/* Dropdown Menu for Mobile */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-gray-800 p-4 shadow-lg">
          <nav className="grid items-start px-4 text-md font-medium">
            <Link
              className={`flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50 ${isActive(
                "/userDashboard"
              )}`}
              to="/userDashboard"
            >
              <PackageIcon className="h-5 w-5" />
              {/* Dashboard */}
              Profile Details
            </Link>
            <Link
              className={`flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50 ${isActive(
                "/userTransactions"
              )}`}
              to="/userTransactions"
            >
              <GiMoneyStack className="h-5 w-5" />
              Transactions
            </Link>
            {/* <Link
              className={`flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50 ${isActive(
                "/userOffsetDetails"
              )}`}
              to="/userOffsetDetails"
            >
              <FaTree className="h-5 w-5" />
              Offset Details
            </Link> */}
          </nav>
        </div>
      )}

      {/* Desktop Sidebar */}
      <div className="hidden md:block h-full max-h-screen flex-col gap-2">
        <div className="flex h-[60px] items-center border-b px-6">
          <Link className="flex items-center gap-2 font-semibold" to="/">
            <img src={logo} alt="logo" className="h-14" />

          </Link>
        </div>
        <div className="flex-1 overflow-auto w-60 min-h-[90vh] py-2">
          <nav className="grid items-start px-4 text-md font-medium">
            <Link
              className={`flex items-center text-lg gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50 ${isActive(
                "/userDashboard"
              )}`}
              to="/userDashboard"
            >
              <PackageIcon className="h-5 w-5" />
              {/* Dashboard */}
              Profile Details
            </Link>
            <Link
              className={`flex items-center text-lg gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50 ${isActive(
                "/userTransactions"
              )}`}
              to="/userTransactions"
            >
              <GiMoneyStack className="h-5 w-5" />
              Transactions
            </Link>
            {/* <Link
              className={`flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50 ${isActive(
                "/userOffsetDetails"
              )}`}
              to="/userOffsetDetails"
            >
              <FaTree className="h-5 w-5" />
              Offset Details
            </Link> */}
          </nav>
        </div>
      </div>
    </>
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

export default Sidebar;
