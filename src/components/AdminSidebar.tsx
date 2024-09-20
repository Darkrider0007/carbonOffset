import { Link } from "react-router-dom";
import { GiMoneyStack } from "react-icons/gi";
import { FaTree } from "react-icons/fa";
import { Coins } from "lucide-react";

const AdminSidebar = () => {
  return (
    <div className="flex h-full max-h-screen flex-col gap-2">
      <div className="flex h-[60px] items-center border-b px-6">
        <Link className="flex items-center gap-2 font-semibold" to="/">
          <Package2Icon className="h-6 w-6" />
          <span className="">Carbon Offset</span>
        </Link>
      </div>
      <div className="flex-1 overflow-auto w-60 min-h-[90vh]   py-2 ">
        <nav className="grid items-start px-4 text-md font-medium">
          <Link
            className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
            to={`/admin/${import.meta.env.VITE_ADMIN_ROUTE}/adminDashboard`}
          >
            <PackageIcon className="h-5 w-5" />
            Dashboard
          </Link>
          <Link
            className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
            to={`/admin/${import.meta.env.VITE_ADMIN_ROUTE}/adminProjectDetails`}
          >
            <GiMoneyStack className="h-5 w-5" />
            Transactions
          </Link>
          <Link
            className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
            to={`/admin/${import.meta.env.VITE_ADMIN_ROUTE}/farmOnboarding`}
          >
            <FaTree className="h-5 w-5" />
            Farm Onboarding
          </Link>
          <Link
            className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
            to={`/admin/${import.meta.env.VITE_ADMIN_ROUTE}/token`}
          >
            <Coins className="h-5 w-5" />
            Tokens
          </Link>
        </nav>
      </div>
    </div>
  );
};

function Package2Icon(props: any) {
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
      <path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z" />
      <path d="m3 9 2.45-4.9A2 2 0 0 1 7.24 3h9.52a2 2 0 0 1 1.8 1.1L21 9" />
      <path d="M12 3v6" />
    </svg>
  );
}

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
